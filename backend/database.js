const mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rubytodo1',
  // socketPath: '/var/run/mysqld/mysqld.sock',
  connectionLimit: 100
})

module.exports = (sql, props)=>{
  return new Promise((resolve, reject)=>{
    pool.getConnection((err, connection)=>{
      if(err) return reject(err);
      let con = connection.query(sql, props, (err,res)=>{
        if(err) reject(err);
        else resolve(res);
      });
      console.log(con.sql);
      connection.release();
    });
  });
}

// module.exports = connection;