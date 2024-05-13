CREATE TABLE clients (
                         id SERIAL PRIMARY KEY,
                         client_code VARCHAR(255),
                         company_name VARCHAR(255),
                         name VARCHAR(255),
                         address VARCHAR(255),
                         email VARCHAR(255),
                         phone VARCHAR(255),
                         image_url VARCHAR(255)
);
