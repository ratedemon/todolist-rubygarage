import Sequelize from 'sequelize';
import env from 'dotenv';

env.config();

const dbString = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const ssl = !!process.env.DATABASE_URL;
console.log(dbString, ssl);
const db = new Sequelize(dbString, {
    dialectOptions: {ssl},
    logging: true
});

if(!!process.env.DATABASE_URL){
    // db.sync({force:true})
    db.sync()
      .then(() => {
        console.log('DB synced');
      });
}else{
    console.log('DB connected');
}

export default db;