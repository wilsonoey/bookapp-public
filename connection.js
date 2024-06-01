const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.NAMEDB,
});

connection.on('enqueue', (sequence) => (sequence.constructor.name === 'Query' ? console.log(sequence.sql) : null));

module.exports = connection;
