CREATE DATABASE bestrong;
USE bestrong;

/* 
Tabela de Usuários
 */
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    senha CHAR(7)
);

/* 
Tabela de Quizzes
 */
CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* 
Tabela intermediária para relacionamento N:N entre usuário e quiz
 */
CREATE TABLE usuario_quiz (
    usuario_id INT NOT NULL,
    quiz_id INT NOT NULL,
    concluido BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (usuario_id, quiz_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);
