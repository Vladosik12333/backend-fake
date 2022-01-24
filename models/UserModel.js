import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Users = db.define(
  'users',
  {
    login: {
      type: DataTypes.STRING,
    },
    pass: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default Users;
