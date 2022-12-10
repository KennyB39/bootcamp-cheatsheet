DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT NOT NULL AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL
);


INSERT INTO instructors (first_name, last_name)
VALUES ("Farley", "Wittles"),
       ("Asher", "Filth Lord"),
       ("Sage", "Filth Lord");
