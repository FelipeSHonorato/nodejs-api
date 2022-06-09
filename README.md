# PROJETO - CRIAÇÃO DE UMA API CRUD COM NODE.JS e MONGODB

Projeto exemplificando a criação de uma API CRUD simples simulando o cadastro de novos usuários em um sistema.

Tecnologias utilizadas no desenvolvimento deste projeto:

* Node.JS
* Express(framework)
* MongoDB

Módulos adicionais:

* Nodemon
* Dotenv
* NPM

---

# Execução da aplicação

A aplicação após ser clonada através do prompt ou de uma IDE, como Visual Studio Code, deve ser executado o seguinte comando no console:

`npm start:dev`

Caso tudo proceda corretamente as mensagens "Rodando com express na porta 8080" e "Conexão com banco de dados criada com sucesso!" deverão aparecer no console.

Agora através de um programa de testes funcionais, como Postman, é possível utilizar os endpoints da aplicação.

---

Endpoints disponíveis nessa aplicação:

* Buscar todos os usuários cadastrados no banco de dados
* Buscar um usuário través do seu id
* Cadastrar um novo usuário
* Editar campos de um usuário existente
* Deletar um usuário do banco de dados
