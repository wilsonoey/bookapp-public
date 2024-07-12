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
    const [getallerror] = await connection.query(query);
    if (request.i18n.setLocale(setLang)) {
      return h.response(successwithdataANDcount(
        getallerror.length,
        request.i18n.__('status-finish'),
        request.i18n.__('message-get-error-success'),
        getallerror
      )).code(200);
    }
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
    const [adddata] = await connection.query(query, data);
    if (request.i18n.setLocale(setLang)) {
      if (adddata.affectedRows > 0) {
        return h.response(
          successcreated(request.i18n.__('status-finish'), request.i18n.__('message-add-success'))
        ).code(201);
      } else {
        return h.response(clienterror(request.i18n.__('message-add-fail'))).code(400);
      }
    }
  } catch (error) {
    senderror(request, h, error, "addBook");
  }
}

async function getAllBooks(request, h) {
  try {
    const query = 'SELECT * FROM books';
    const { languageCode } = request.params;
    const setLang = languageCode === 'id' ? 'id' : 'en';
    const [getalldata] = await connection.query(query);
    if (request.i18n.setLocale(setLang)) {
      return h.response(
        successwithdataANDcount(getalldata.length, request.i18n.__('status-finish'), request.i18n.__('message-get-data-success'), getalldata)
      ).code(201);
    };
  } catch (error) {
    senderror(request, h, error, "getAllBooks");
  }
}

async function getBookById(request, h) {
  try {
    const { idbook, languageCode } = request.params;
    const query = 'SELECT * FROM books WHERE idbook = ?';
    const setLang = languageCode === 'id' ? 'id' : 'en';
    const [getdatabyid] = await connection.query(query, idbook);
    if (request.i18n.setLocale(setLang)) {
      if (getdatabyid.length > 0) {
        return h.response(successwithdata(request.i18n.__('status-finish'), request.i18n.__('message-get-data-success'), getdatabyid[0])).code(200);
      } else {
        return h.response(notfound(request.i18n.__('status-fail'), request.i18n.__('message-get-by-id-fail'))).code(404);
      }
    }
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
    const query = 'UPDATE books SET ? WHERE idbook = ?';
    const [editdata] = await connection.query(query, [data, idbook]);
    if (request.i18n.setLocale(setLang)) {
      if (editdata.affectedRows > 0) {
        return h.response(success(request.i18n.__('status-finish'), request.i18n.__('message-update-success'))).code(200);
      } else {
        return h.response(notfound(request.i18n.__('status-fail'), request.i18n.__('message-update-fail'))).code(404);
      }
    }
  } catch (error) {
    senderror(request, h, error, "editBook");
  }
}

async function deleteBook(request, h) {
  try {
    const { idbook, languageCode } = request.params;
    const query = 'DELETE FROM books WHERE idbook = ?';
    const setLang = languageCode === 'id' ? 'id' : 'en';
    const [deletedata] = await connection.query(query, idbook);
    if (request.i18n.setLocale(setLang)) {
      if (deletedata.affectedRows > 0) {
        return h.response(success(request.i18n.__('status-finish'), request.i18n.__('message-delete-success'))).code(200);
      } else {
        return h.response(notfound(request.i18n.__('status-fail'), request.i18n.__('message-delete-fail'))).code(404);
      }
    }
  } catch (error) {
    senderror(request, h, error, "deleteBook");
  }
}

async function routesOthers(req, res) {
  const id = nanoid(50);
  const createdat = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const data = {
    iderror: id,
    detailerror: simpleStringify(res),
    createdaterror: createdat,
  };
  const query = 'INSERT INTO error SET ?';
  await connection.query(query, data);
  return res.response({
    status: 'fail',
    message: 'The route you are accessing was not found return',
  }).code(404);
};

function simpleStringify (object){
    // stringify an object, avoiding circular structures
    // https://stackoverflow.com/a/31557814
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};

const part = {
  geterrorbook: geterror,
  addpublicbook: addBook,
  getallpublicbook: getAllBooks,
  getpublicbookbyid: getBookById,
  editpublicbook: editBook,
  deletepublicbook: deleteBook,
  besides: routesOthers,
};

module.exports = part;
