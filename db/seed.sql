CREATE TABLE shelfie_products (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(60)NOT NULL,
price INT NOT NULL,
image TEXT);

INSERT INTO shelfie_products (name, price, image)
VALUES ('Pants', 50, 'http://cdn.shopify.com/s/files/1/0266/4899/products/PassagePant_Moss_Flat_550x.jpg?v=1562884875'),
('Shirt', 30, 'https://bonobos-prod-s3.imgix.net/products/139033/original/Casual-Shirts_Short-Sleeve-Shirts_23759-MVB66_40_category-outfitter.jpg?1561584872=&auto=format%2Ccompress&fit=clip&ixlib=react-8.6.1&h=1&w=385');