import Sequelize from 'sequelize';
import db from '../../db.js';
import Project from '../project/model';

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
  password: Sequelize.STRING(80)
});

User.hasMany(Project, {foreignKey: 'user_id', onDelete: 'cascade'});

export default User;