create database bestrong;
use bestrong;

/*
comandos para mysql server
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha char(7)
);



