const part = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/error',
    handler: part.geterrorbook,
  },
  {
    method: 'POST',
    path: '/book/add',
    handler: part.addpublicbook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: part.getallpublicbook,
  },
  {
    method: 'GET',
    path: '/book/{idbook}',
    handler: part.getpublicbookbyid,
  },
  {
    method: 'PUT',
    path: '/book/{idbook}',
    handler: part.editpublicbook,
  },
  {
    method: 'DELETE',
    path: '/book/{idbook}',
    handler: part.deletepublicbook,
  },
];

module.exports = routes;
