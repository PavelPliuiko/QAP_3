CREATE DATABASE stock_management;

\c stock_management;

CREATE TABLE stocks (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10, 2)
);
