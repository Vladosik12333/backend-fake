import { Sequelize } from "sequelize";

const db = new Sequelize("secret", "secret", "secret", {
  host: "secret",
  dialect: "mysql",
});

export default db;

// fake backend
