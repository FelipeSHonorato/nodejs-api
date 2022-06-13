const registerUser = async (req, res) => {
  const { name, email, password, img } = req.body;

  res.json({
    name,
    email,
  });
};

module.exports = { registerUser };
