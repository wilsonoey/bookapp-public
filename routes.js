const part = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/error',
    handler: part.geterrorbook,
    options: {
      description: 'Get Error',
      notes: 'Getting error each request from the server',
      tags: ['api', 'errors'], // ADD THIS TAG
    },
  },
  {
    method: 'POST',
    path: '/book/add',
    handler: part.addpublicbook,
    options: {
      description: 'Add Book',
      notes: 'Add new book to the database',
      tags: ['api', 'books'], // ADD THIS TAG
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: part.getallpublicbook,
    options: {
      description: 'Get All Books',
      notes: 'Get all books from the database',
      tags: ['api', 'books'], // ADD THIS TAG
    },
  },
  {
    method: 'GET',
    path: '/book/{idbook}',
    handler: part.getpublicbookbyid,
    options: {
      description: 'Get book by id',
      notes: 'Get book by id from the database',
      tags: ['api', 'books'], // ADD THIS TAG
    },
  },
  {
    method: 'PUT',
    path: '/book/{idbook}',
    handler: part.editpublicbook,
    options: {
      description: 'Edit book by id',
      notes: 'Edit book by id from the database',
      tags: ['api', 'books'], // ADD THIS TAG
    },
  },
  {
    method: 'DELETE',
    path: '/book/{idbook}',
    handler: part.deletepublicbook,
    options: {
      description: 'Delete book by id',
      notes: 'Delete book by id from the database',
      tags: ['api', 'books'], // ADD THIS TAG
    },
  },
];

module.exports = routes;
