create database likeme;

CREATE TABLE posts (
id SERIAL primary key, 
usuario VARCHAR(25), 
url VARCHAR(1000),
descripcion VARCHAR(255), 
likes INT default 0);