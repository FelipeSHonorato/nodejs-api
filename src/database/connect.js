const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USUARIO}:${process.env.MONGODB_PASSWORD}@nodejsapi.pel89.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao conectar com banco de dados: ",
          error
        );
      }
      return console.log("Conexão com banco de dados criada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
