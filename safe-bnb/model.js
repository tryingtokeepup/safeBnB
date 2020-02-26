import { Sequelize, Model, DataTypes } from 'sequelize';
import { user, password, host, database } from './database.js';
import bcrypt from 'bcrypt';
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
    timestamps: false,
    hooks: {
      beforeCreate: async user => {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
);

User.prototype.isPasswordValid = async function(password) {
  return await bcrypt.compare(password, this.password);
};