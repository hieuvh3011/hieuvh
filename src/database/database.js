// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect();

// /**
//  * Query function
//  * @param {String} queryStatement
//  * @returns {Array} a collection of rows
//  */
// const query = (queryStatement) => {
//   connection.query(queryStatement, (err, rows, fields) => {
//     if (err) throw err;
//     return rows;
//   });
// };

// // connection.query('select * from users', function (err, rows, fields) {
// //   if (err) throw err;
// //   console.log('user: ', rows[0]);
// // });

// connection.end();

// exports.modules = {
//   query,
// };
