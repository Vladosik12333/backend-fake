import Users from "../models/UserModel.js";

export const authorization = async (req, res) => {
  try {
    const info = req.body;
    const user = await Users.findAll({
      where: {
        login: info.login,
      },
    });
    const result =
      info.login === user[0].dataValues.login &&
      /* encryption (fake backend) */ info.password === user[0].dataValues.pass;
    res.json({
      authorization: result,
      login: user[0].dataValues.login,
      id: user[0].dataValues.id,
    });
  } catch (error) {
    if (
      error.message ===
      "Cannot read properties of undefined (reading 'dataValues')"
    ) {
      res.json({ authorization: false });
      return;
    }
    res.json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const infoRegLogin = req.body.login;
    const infoRegPass = /* encryption (fake backend) */ req.body.pass;
    const newUser = await Users.create({
      login: infoRegLogin,
      pass: infoRegPass,
    });
    res.json({
      message: "User Register",
      id: newUser.dataValues.id,
      login: newUser.dataValues.login,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
