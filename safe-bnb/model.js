import { Sequelize, Model, DataTypes } from 'sequelize';
import { user, password, host, database } from './database.js';

//disable logging for now (overly verbose) => re-enable during debugging with logging:true

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres',
  logging: false
});

// create a model for our users table: describe the data it contains and rules we want applied
// disable null => always require an email and password

export class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: false
  }
);
