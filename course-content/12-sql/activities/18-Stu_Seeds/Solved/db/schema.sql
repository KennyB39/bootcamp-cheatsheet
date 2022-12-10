DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  -- id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

ALTER TABLE products AUTO_INCREMENT = 1000;

SELECT id, product_name AS name from products;
-- +----+---------------+
-- | id | name          |
-- +----+---------------+
-- |  1 | spinach       |
-- |  2 | peanut butter |
-- |  3 | peas-canned   |
-- |  4 | ice cream     |
-- |  5 | potato chips  |
-- +----+---------------+