-- Drop the existing table if it exists to start fresh
DROP TABLE IF EXISTS products;

-- Create the products table for our visualization app
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    model_url VARCHAR(255) NOT NULL
);

-- Insert sample product data based on uploaded models
INSERT INTO products (name, category, price, description, image_url, model_url) VALUES
('Warrior Pigeon', 'Characters', 49.99, 'A formidable warrior pigeon, ready for any quest. A high-quality, detailed character model.', '/images/pigeon.jpg', '/models/pigeon_quest__the_warrior.glb'),
('Shiba Inu', 'Animals', 29.50, 'A charming and detailed 3D model of a Shiba Inu dog, perfect for games and animations.', '/images/shiba.jpg', '/models/shiba.glb'),
('Feather Sculpture', 'Abstract Art', 99.00, 'An elegant, abstract feather sculpture. Perfect for digital art displays and modern visualizations.', '/images/feather.jpg', '/models/Bond_Test.glb');