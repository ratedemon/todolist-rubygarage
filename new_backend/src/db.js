import Sequelize from 'sequelize';

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

// db.authenticate().then(function(errors) { console.log(errors) });

db.sync()
  .then(() => {
    console.log('DB synced');
  });

export default db;