const { createConnection } = require('mysql');

const connection = createConnection({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.NAMEDB,
});
connection.connect((checker) => console.log(checker));
// tampilkan di terminal setiap tindakan database menggunakan method yang ada
connection.on('enqueue', (sequence) => (sequence.constructor.name === 'Query' ? console.log(sequence.sql) : null));

module.exports = connection;
