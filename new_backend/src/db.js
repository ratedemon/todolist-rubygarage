import Sequelize from 'sequelize';
import env from 'dotenv';

env.config();

const dbString = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const ssl = !!process.env.DATABASE_URL;
const db = new Sequelize(dbString, {
    dialectOptions: {ssl}
});
/*const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});
*/
// db.authenticate().then(function(errors) { console.log(errors) });

db.sync()
  .then(() => {
    console.log('DB synced');
  });

export default db;