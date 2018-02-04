//import Joi from 'joi';
//import schema from './schema';
import Sequelize from 'sequelize';

import db from '../../db.js';

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING(30),
  email: {
    type:Sequelize.STRING(40),
    isEmail: true,
    notNull: true,
    allowNull: false,
    notEmpty: true,
    unique: true
  },
  password: Sequelize.STRING(70)
});

export default User;