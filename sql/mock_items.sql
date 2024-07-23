INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 1', 100, 10.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 2', 200, 20.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 3', 300, 30.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 4', 400, 40.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 5', 500, 50.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 6', 600, 60.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 7', 700, 70.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 8', 800, 80.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 9', 900, 90.00);
INSERT INTO stocks (item_name, quantity, price) VALUES ('Item 10', 1000, 100.00);

DELETE FROM stocks WHERE item_name = 'Item 2';
DELETE FROM stocks WHERE item_name = 'Item 4';

UPDATE stocks SET price = 35.00 WHERE item_name = 'Item 3';
