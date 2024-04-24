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
const { senderror } = require('./senderror');

async function geterror(request, h) {
  try {
    const query = 'SELECT * FROM error ORDER BY createdaterror DESC';
    const { languageCode } = request.params;
    const setLang = languageCode === 'id' ? 'id' : 'en';
    return new Promise((resolve, reject) => {
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, (error, results) => error ? console.log(error) : resolve(h.response(
          successwithdataANDcount(
            results.length,
            request.i18n.__('status-finish'),
            request.i18n.__('message-get-error-success'),
            results
          )
        ).code(200)));
      }
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
    const { languageCode } = request.params;
    const setLang = languageCode === 'id' ? 'id' : 'en';
    return new Promise((resolve, reject) => {
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, data, (error, results) => error ? reject(error) : (
          resolve(h.response(
            successcreated(request.i18n.__('status-finish'), request.i18n.__('message-add-success'))
          ).code(201))
        ));
      }
    });
  } catch (error) {
    senderror(request, h, error, "addBook");
  }
}

async function getAllBooks(request, h) {
  try {
    const query = 'SELECT * FROM books';
    const { languageCode } = request.params;
    const setLang = languageCode === 'id' ? 'id' : 'en';
    return new Promise((resolve, reject) => {
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, (error, results) => (error ? reject(error) : (
          resolve(h.response(
            successwithdataANDcount(results.length, request.i18n.__('status-finish'), request.i18n.__('message-get-data-success'), results)
          ).code(201))
        )));
      }
    });
  } catch (error) {
    senderror(request, h, error, "getAllBooks");
  }
}

async function getBookById(request, h) {
  try {
    const { idbook, languageCode } = request.params;
    const query = 'SELECT * FROM books WHERE idbook = ?';
    const setLang = languageCode === 'id' ? 'id' : 'en';
    return new Promise((resolve, reject) => {
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, idbook, (error, results) => (error ? reject(error) : (
          results.length === 0 ? resolve(h.response(
            notfound(request.i18n.__('status-fail'), request.i18n.__('message-get-by-id-fail'))
          ).code(404)) : resolve(h.response(
            successwithdata(request.i18n.__('status-finish'), request.i18n.__('message-get-data-success'), results[0])
          ).code(200))
        )));
      }
    });
  } catch (error) {
    senderror(request, h, error, "getBookById");
  }
}

async function editBook(request, h) {
  try {
    const { idbook, languageCode } = request.params;
    const updatedatbook = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const data = { ...request.payload, updatedat: updatedatbook };
    const setLang = languageCode === 'id' ? 'id' : 'en';
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
      if (request.i18n.setLocale(setLang)) {
        connection.query(updateQuery, values, (error, results) => {
          if (error) { reject(error); } else {
            if (results.affectedRows > 0) {
              resolve(h.response(success(request.i18n.__('status-finish'), request.i18n.__('message-update-success'))).code(200));
            } else { resolve(h.response(clienterror(request.i18n.__('status-fail'), request.i18n.__('message-update-fail'))).code(400)); }
          }
        });
      }
    });
  } catch (error) {
    senderror(request, h, error, "editBook");
  }
}

async function deleteBook(request, h) {
  try {
    const { idbook, languageCode } = request.params;
    const query = 'DELETE FROM books WHERE idbook = ?';
    const setLang = languageCode === 'id' ? 'id' : 'en';
    return new Promise((resolve, reject) => {
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, idbook, async (error, results) => (error ? reject(error) : (
          results.affectedRows === 0 ? resolve(h.response(
            notfound(request.i18n.__('status-fail'), request.i18n.__('message-delete-fail'))
          ).code(404)) : resolve(h.response(success(request.i18n.__('status-finish'), request.i18n.__('message-delete-success'))).code(200))
        )));
      } 
    });
  } catch (error) {
    senderror(request, h, error, "deleteBook");
  }
}

const part = {
  geterrorbook: geterror,
  addpublicbook: addBook,
  getallpublicbook: getAllBooks,
  getpublicbookbyid: getBookById,
  editpublicbook: editBook,
  deletepublicbook: deleteBook,
};

module.exports = part;
