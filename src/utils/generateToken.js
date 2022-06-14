const jwt = require("jsonwebtoken");

//------- Processo para gerar um token através do id ------//

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
