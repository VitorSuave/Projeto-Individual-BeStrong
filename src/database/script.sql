create database bestrong;
use bestrong;

/*
Comandos para MySQL Server
*/

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50) unique,
    senha VARCHAR(45)
);

CREATE TABLE pontuacao (
    idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    datahora DATETIME,
    fkUsuario INT,
    CONSTRAINT fkPontuacaoUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id) 
);

