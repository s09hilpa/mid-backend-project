export async function seed(knex) {
  await knex("event").del();

  await knex("event").insert([
    {
      id: 1,
      price: 100,
      currency: "DKK",
      title: "Copenhagen Coffee Crawl",
      description:
        "A relaxed Saturday walk between 4 specialty cafés. Includes tasting notes, small pastry, and a guide to brewing styles.",
      event_date: "2026-05-10",
      event_time: "10:00",
      venue: "Copenhagen City Center",
    },
    {
      id: 2,
      price: 150,
      currency: "DKK",
      title: "After-Work Board Games Night",
      description:
        "Drop in with friends or come solo. We’ll teach quick games, set you up at a table, and keep the vibe cozy and social.",
      event_date: "2026-05-12",
      event_time: "18:00",
      venue: "Nørrebro Community House",
    },
    {
      id: 3,
      price: 250,
      currency: "DKK",
      title: "Beginner Pasta Workshop",
      description:
        "Hands-on workshop: mix dough, roll sheets, shape pasta, and finish with a simple sauce.",
      event_date: "2026-05-15",
      event_time: "17:00",
      venue: "Vesterbro Kitchen Studio",
    },
    {
      id: 4,
      price: 0,
      currency: "DKK",
      title: "Sunday Park Run & Stretch",
      description:
        "Easy-paced community run followed by guided stretching. All levels welcome.",
      event_date: "2026-05-18",
      event_time: "09:00",
      venue: "Fælledparken",
    },
    {
      id: 5,
      price: 75,
      currency: "DKK",
      title: "Indie Film Screening: Short Nights",
      description: "A curated set of local short films with a Q&A after.",
      event_date: "2026-05-20",
      event_time: "19:00",
      venue: "Indie Cinema Copenhagen",
    },
    {
      id: 6,
      price: 180,
      currency: "DKK",
      title: "Photography Walk: City Lights",
      description:
        "Evening photo walk focused on street scenes and reflections.",
      event_date: "2026-05-22",
      event_time: "20:00",
      venue: "Nyhavn",
    },
    {
      id: 7,
      price: 120,
      currency: "DKK",
      title: "Bread & Butter Tasting",
      description: "Taste 6 breads and 5 butters and learn about fermentation.",
      event_date: "2026-05-25",
      event_time: "14:00",
      venue: "Nordic Food Lab",
    },
    {
      id: 8,
      price: 300,
      currency: "DKK",
      title: "Live Jazz Trio at the Loft",
      description: "An intimate set with modern standards and originals.",
      event_date: "2026-05-28",
      event_time: "19:00",
      venue: "The Loft Jazz Club",
    },
  ]);
}
