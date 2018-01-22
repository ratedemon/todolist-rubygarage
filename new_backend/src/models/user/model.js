//import Joi from 'joi';
//import schema from './schema';
import Sequelize from 'sequelize';

import db from '../../db.js';
import bcrypt from 'bcrypt';

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
    notEmpty: true,
    unique: true
  },
  password: Sequelize.STRING(40)
});
// }, {
//   hooks:{
//     beforeCreate(user, options){
//       // return hashPassword(user.password).then(hashedPw => {
//       //   user.password = hashedPw;
//       // });
//       const salt = bcrypt.genSaltSync(10);
//       user.password = bcrypt.hashSync(user.password, salt);
//     }
//   }
// });

User.beforeCreate((user, options) => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
});


export default User;