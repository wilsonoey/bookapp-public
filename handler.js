const { nanoid } = require('nanoid');
const {
  clienterror,
  notfound,
  successwithdata,
  success,
  successcreated,
  successwithdataANDcount,
} = require('./response');
const connection = require('./connection');
const variable = require('./variable');
const { senderror } = require('./senderror');

async function geterror(request, h) {
  try {
    const query = 'SELECT * FROM error ORDER BY createdaterror DESC';
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => error ? console.log(error) : resolve(h.response(
        successwithdataANDcount(results.length, 'Error berhasil ditampilkan', results)
      ).code(200)));
    });
  } catch (error) {
    senderror(request, h, error, "geterror");
  }
}

async function addBook(request, h) {
  try {
    const id = nanoid(50);
    const createdat = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const data = {
      idbook: id,
      ...request.payload,
      createdat: createdat,
      updatedat: createdat,
    };
    const query = 'INSERT INTO books SET ?';
    return new Promise((resolve, reject) => {
      connection.query(query, data, (error, results) => error ? reject(error) : (
        resolve(h.response(
          successcreated('Buku berhasil ditambahkan')
        ).code(201))
      ));
    });
  } catch (error) {
    senderror(request, h, error, "addBook");
  }
}

async function getAllBooks(_, h) {
  try {
    const query = 'SELECT * FROM books';
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => (error ? reject(error) : (
        resolve(h.response(
          successwithdataANDcount(results.length, 'Buku berhasil ditampilkan', results)
        ).code(201))
      )));
    });
  } catch (error) {
    senderror(request, h, error, "getAllBooks");
  }
}

async function getBookById(request, h) {
  try {
    const { idbook } = request.params;
    const query = 'SELECT * FROM books WHERE idbook = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, idbook, (error, results) => (error ? reject(error) : (
        results.length === 0 ? resolve(h.response(
          notfound('Buku tidak ditemukan')
        ).code(404)) : resolve(h.response(
          successwithdata('Buku berhasil ditampilkan', results[0])
        ).code(200))
      )));
    });
  } catch (error) {
    senderror(request, h, error, "getBookById");
  }
}

async function editBook(request, h) {
  try {
    const { idbook } = request.params;
    const updatedatbook = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const data = { ...request.payload, updatedat: updatedatbook };
    return new Promise((resolve, reject) => {
      let updateQuery = 'UPDATE books SET';
      const values = [];
      let i = 0;
      for (const [key, value] of Object.entries(data)) {
        if (value !== null && value !== undefined) {
          if (i > 0) {
            updateQuery += ',';
          }
          updateQuery += ` \`${key}\` = ?`;
          values.push(value);
          i++;
        }
      }
      updateQuery += ' WHERE idbook = ?';
      values.push(idbook);
      connection.query(updateQuery, values, (error, results) => {
        if (error) { reject(error); } else {
          if (results.affectedRows > 0) {
            resolve(h.response(success('Buku berhasil diupdate')).code(200));
          } else { resolve(h.response(clienterror('Buku gagal diupdate')).code(400)); }
        }
      });
    });
  } catch (error) {
    senderror(request, h, error, "editBook");
  }
}

async function deleteBook(request, h) {
  try {
    const { idbook } = request.params;
    const query = 'DELETE FROM books WHERE idbook = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, idbook, async (error, results) => (error ? reject(error) : (
        results.affectedRows === 0 ? resolve(h.response(
          notfound('Buku tidak ditemukan')
        ).code(404)) : resolve(h.response(success('Buku berhasil dihapus')).code(200))
      )));
    });
  } catch (error) {
    senderror(request, h, error, "deleteBook");
  }
}

const part = {
  geterrorkad: geterror,
  addpublicbook: addBook,
  getallpublicbook: getAllBooks,
  getpublicbookbyid: getBookById,
  editpublicbook: editBook,
  deletepublicbook: deleteBook,
};

module.exports = part;
