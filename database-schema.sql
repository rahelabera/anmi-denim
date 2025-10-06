-- Create the database
CREATE DATABASE IF NOT EXISTS anmi_denim;
USE anmi_denim;

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255),
  category VARCHAR(100) NOT NULL,
  in_stock BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Custom orders table
CREATE TABLE IF NOT EXISTS custom_orders (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  description TEXT NOT NULL,
  quantity INT NOT NULL,
  deadline VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Wholesale inquiries table
CREATE TABLE IF NOT EXISTS wholesale_inquiries (
  id VARCHAR(36) PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  business_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (id, name, description, price, image_url, category, featured) VALUES
(UUID(), 'Classic Denim Jeans', 'Premium quality classic denim jeans with perfect fit and exceptional durability.', 1300, '/placeholder.svg?height=400&width=600', 'Jeans', TRUE),
(UUID(), 'Denim Jacket', 'Stylish denim jacket with modern design, perfect for casual and semi-formal occasions.', 1300, '/placeholder.svg?height=400&width=600', 'Jackets', TRUE),
(UUID(), 'Denim Skirt', 'Versatile denim skirt that combines comfort with contemporary fashion trends.', 1300, '/placeholder.svg?height=400&width=600', 'Skirts', TRUE),
(UUID(), 'Slim Fit Jeans', 'Modern slim fit jeans with stretch fabric for maximum comfort and style.', 1300, '/placeholder.svg?height=400&width=600', 'Jeans', FALSE),
(UUID(), 'Denim Shirt', 'Classic denim shirt that works great for casual and smart casual outfits.', 1300, '/placeholder.svg?height=400&width=600', 'Shirts', FALSE),
(UUID(), 'Denim Overalls', 'Comfortable and stylish denim overalls for a casual, relaxed look.', 1300, '/placeholder.svg?height=400&width=600', 'Overalls', FALSE);
