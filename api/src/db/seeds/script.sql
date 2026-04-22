SELECT * FROM event ;
CREATE TABLE userprofile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);
INSERT INTO userprofile (name, email)
VALUES 
('shilpa', 'shilpa@example.com'),
('rahul', 'rahul123@gmail.com');
SELECT * FROM userprofile;
