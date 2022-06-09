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
* Mongoose

---

# Execução da aplicação

A aplicação após ser clonada através do prompt ou de uma IDE, como Visual Studio Code, deve ser executado o seguinte comando no console:

`npm start:dev`

Caso tudo proceda corretamente as mensagens "Rodando com express na porta 8080" e "Conexão com banco de dados criada com sucesso!" deverão aparecer no console.

No caso da porta 8080 já esteja sendo utilizada pelo computador, poderá ser efetuada a modificação da porta de comunicação alterando a const port do arquivo express.js localizado na pasta modules do projeto.

Agora através de um programa de testes funcionais, como Postman, é possível utilizar os endpoints da aplicação.

---

Endpoints disponíveis nessa aplicação:

* Buscar todos os usuários cadastrados no banco de dados (Get, "/users")
* Buscar um usuário través do seu id (Get, "/users/id")
* Cadastrar um novo usuário (Post, "/users")
* Editar campos de um usuário existente (Patch, "/users/id")
* Deletar um usuário do banco de dados (Delete, "/users/id")

---

Para criação de um novo usuário deve ser utilizado o padrão de comunicação JSON e sua estrutura de dados deve seguir conforme imagem abaixo:

![image](https://user-images.githubusercontent.com/21232079/172928700-3fd562a3-b323-4b94-bff4-277117f5a26e.png)

Obs.: A quantidade de caracteres foi padronizada para no mínimo 7 caracteres, sendo eles string ou numbers.

O código de identificação do usuário é criado por padrão automaticamente pelo banco de dados MongoDB, após o registro do novo usuário o sistema retorna os dados do usuário cadastrado assim como seu id no banco de dados, conforme imagem abaixo:

![image](https://user-images.githubusercontent.com/21232079/172929650-bce98827-d986-41f8-aaf6-789a35701739.png)



