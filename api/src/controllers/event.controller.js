import { getAllEvents, getEventById } from "#models/event.model.js";
import { EventListQuery, EventIdParams } from "#schemas/events.js";

export async function listEvents(req, res, next) {
  try {
    const parsed = EventListQuery.safeParse(req.query);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.flatten(),
      });
    }

    const { page, pageSize } = parsed.data;

    const q = req.query.q || ""; // ✅ SAFE DEFAULT

    const result = await getAllEvents({ page, pageSize, q });

    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getEvent(req, res, next) {
  try {
    const { id } = EventIdParams.parse(req.params);

    const event = await getEventById(id);

    if (!event) {
      return res.status(404).json({
        error: { message: "Event not found" },
      });
    }

    res.json(event);
  } catch (err) {
    next(err);
  }
}
