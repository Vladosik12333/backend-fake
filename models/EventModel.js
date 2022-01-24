import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Event = db.define(
  'events',
  {
    title: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    founder: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    member: {
      type: DataTypes.INTEGER
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default Event;
