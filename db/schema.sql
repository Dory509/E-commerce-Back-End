DROP DATABASE IF EXISTS e_commerce_db;
CREATE DATABASE e_commerce_db;

\c e_commerce_db;

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    stock INTEGER DEFAULT 10,
    category_id INTEGER REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(255)
);

CREATE TABLE product_tag (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES product(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tag(id) ON DELETE CASCADE
);