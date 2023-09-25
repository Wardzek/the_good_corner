-- CREATE TABLE Category (
--     id INTEGER PRIMARY KEY,
--     name VARCHAR(100)
-- )

-- CREATE TABLE ad 
-- (
--     id INTEGER PRIMARY KEY,
--     title VARCHAR(100),
--     description TEXT,
--     owner VARCHAR(100),
--     price INTEGER,
--     createdAt DATE,
--     imageUrl TEXT,
--     city VARCHAR(100),
--     categoryId INTEGER NOT NULL,
--     FOREIGN KEY(categoryId) REFERENCES Category(id)
-- );

-- INSERT INTO Category (name) VALUES ('Bike');
-- INSERT INTO Category (name) VALUES ('Cars');

-- SELECT * FROM ad;


-- PRAGMA foreign_keys = ON;
-- INSERT INTO ad (title, description, owner, price, createdAt, imageUrl, city, categoryId) VALUES ('Bike to sell', 'My bike is blue, working fine. I''m selling it because I''ve got a new one', 'bike.seller@gmail.com', 100, '2023-09-05T10:13:14.755Z', 'https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000', 'Paris', 1);

-- PRAGMA foreign_keys = ON;
-- INSERT INTO ad (title, description, owner, price, createdAt, imageUrl, city, categoryId) VALUES ('Car to sell', 'My car is blue, working fine. I''m selling it because I''ve got a new one', 'car.seller@gmail.com', 100, '2023-09-05T10:13:14.755Z', 'https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000', 'Lyon', 2);

-- SELECT ad.*
-- FROM ad
-- INNER JOIN Category ON Category.id = ad.categoryId
-- WHERE Category.name = 'Bike';

-- SELECT ad.*
-- FROM ad
-- INNER JOIN Category ON Category.id = ad.categoryId
-- WHERE Category.name IN ('Bike', 'Cars');

-- SELECT ad.*
-- FROM ad
-- INNER JOIN Category ON Category.id = ad.categoryId
-- WHERE Category.name LIKE 'v%';