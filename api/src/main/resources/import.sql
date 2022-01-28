DROP TABLE IF EXISTS boats;
 
CREATE TABLE boats (id INT AUTO_INCREMENT  PRIMARY KEY, name VARCHAR(250) NOT NULL, description VARCHAR(250) NOT NULL, size INT NOT NULL);
 
INSERT INTO boats (name, description, size) VALUES ('Boat1', 'The largest boat', 150), ('Boat2', 'The smallest boat', 10), ('Boat3', 'An intermediate boat', 50);