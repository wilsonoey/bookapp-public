const { nanoid } = require('nanoid');
const part = require('./handler');
const Joi = require('joi');

const routes = [
  {
    method: 'GET',
    path: '/{languageCode}/error',
    handler: part.geterrorbook,
    options: {
      description: 'Get Error',
      notes: 'Getting error each request from the server',
      tags: ['api', 'errors'],
    },
  },
  {
    method: 'POST',
    path: '/{languageCode}/book/add',
    handler: part.addpublicbook,
    options: {
      description: 'Add Book',
      notes: 'Add new book to the database',
      tags: ['api', 'books'],
      validate: {
        payload: Joi.object({
          idbook: Joi.string().equal(nanoid(50)),
          namebook: Joi.string(),
          picturebook: Joi.string(),
          descriptionbook: Joi.string(),
          authorbook: Joi.string(),
          publisherbook: Joi.string(),
        })
      },
    },
  },
  {
    method: 'GET',
    path: '/{languageCode}/books',
    handler: part.getallpublicbook,
    options: {
      description: 'Get All Books',
      notes: 'Get all books from the database',
      tags: ['api', 'books'],
    },
  },
  {
    method: 'GET',
    path: '/{languageCode}/book/{idbook}',
    handler: part.getpublicbookbyid,
    options: {
      description: 'Get book by id',
      notes: 'Get book by id from the database',
      tags: ['api', 'books'],
      validate: {
        params: Joi.object({
          idbook: Joi.string().description('ID of the book to detail')
        })
      },
    },
  },
  {
    method: 'PUT',
    path: '/{languageCode}/book/{idbook}',
    handler: part.editpublicbook,
    options: {
      description: 'Edit book by id',
      notes: 'Edit book by id from the database',
      tags: ['api', 'books'],
      validate: {
        params: Joi.object({
          idbook: Joi.string().description('ID of the book to edit')
        }),
        payload: Joi.object({
          namebook: Joi.string(),
          picturebook: Joi.string(),
          descriptionbook: Joi.string(),
          authorbook: Joi.string(),
          publisherbook: Joi.string(),
        })
      },
    },
  },
  {
    method: 'DELETE',
    path: '/{languageCode}/book/{idbook}',
    handler: part.deletepublicbook,
    options: {
      description: 'Delete book by id',
      notes: 'Delete book by id from the database',
      tags: ['api', 'books'],
      validate: {
        params: Joi.object({
          idbook: Joi.string().description('ID of the book to delete')
        })
      },
    },
  },
];

module.exports = routes;










// const { nanoid } = require('nanoid');
// const part = require('./handler');
// const Joi = require('joi');

// const routes = [
//   {
//     method: 'GET',
//     path: '/{languageCode}/error',
//     handler: part.geterrorbook,
//     options: {
//       locale: {
//         'en': {
//           description: 'Get Error',
//           notes: 'Getting error each request from the server',
//           tags: ['api', 'errors'],
//         },
//         'id': {
//           description: 'Dapatkan Kesalahan',
//           notes: 'Mendapatkan kesalahan setiap permintaan dari server',
//           tags: ['api', 'eror'],
//         }
//       }
//     },
//   },
//   {
//     method: 'POST',
//     path: '/{languageCode}/book/add',
//     handler: part.addpublicbook,
//     options: {
//       locale: {
//         'en': {
//           description: 'Add Book',
//           notes: 'Add new book to the database',
//           tags: ['api', 'books'],
//           validate: {
//             payload: Joi.object({
//               idbook: Joi.string().equal(nanoid(50)),
//               namebook: Joi.string(),
//               picturebook: Joi.string(),
//               descriptionbook: Joi.string(),
//               authorbook: Joi.string(),
//               publisherbook: Joi.string(),
//             })
//           },
//         },
//         'id': {
//           description: 'Tambah Buku',
//           notes: 'Menambahkan data buku ke database',
//           tags: ['api', 'buku'],
//           validate: {
//             payload: Joi.object({
//               idbook: Joi.string().equal(nanoid(50)),
//               namebook: Joi.string(),
//               picturebook: Joi.string(),
//               descriptionbook: Joi.string(),
//               authorbook: Joi.string(),
//               publisherbook: Joi.string(),
//             })
//           },
//         }
//       }
      
//     },
//   },
//   {
//     method: 'GET',
//     path: '/{languageCode}/books',
//     handler: part.getallpublicbook,
//     options: {
//       locale: {
//         'en': {
//           description: 'Get All Books',
//           notes: 'Get all books from the database',
//           tags: ['api', 'books'],
//         },
//         'id': {
//           description: 'Menampilkan Semua Buku',
//           notes: 'Menampilkan semua buku dari database',
//           tags: ['api', 'buku'],
//         }
//       }
//     },
//   },
//   {
//     method: 'GET',
//     path: '/{languageCode}/book/{idbook}',
//     handler: part.getpublicbookbyid,
//     options: {
//       locale: {
//         'en': {
//           description: 'Get book by id',
//           notes: 'Get book by id from the database',
//           tags: ['api', 'books'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID of the book to detail')
//             })
//           },
//         },
//         'id': {
//           description: 'Dapatkan buku berdasarkan id',
//           notes: 'Dapatkan buku berdasarkan id dari database',
//           tags: ['api', 'buku'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID dari buku yang ingin dilihat detailnya')
//             })
//           },
//         }
//       }
      
//     },
//   },
//   {
//     method: 'PUT',
//     path: '/{languageCode}/book/{idbook}',
//     handler: part.editpublicbook,
//     options: {
//       locale: {
//         'en': {
//           description: 'Edit book by id',
//           notes: 'Edit book by id from the database',
//           tags: ['api', 'books'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID of the book to edit')
//             }),
//             payload: Joi.object({
//               namebook: Joi.string(),
//               picturebook: Joi.string(),
//               descriptionbook: Joi.string(),
//               authorbook: Joi.string(),
//               publisherbook: Joi.string(),
//             })
//           },
//         },
//         'id': {
//           description: 'Edit buku berdasarkan id',
//           notes: 'Edit buku berdasarkan id dari database',
//           tags: ['api', 'buku'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID dari buku yang ingin diedit')
//             }),
//             payload: Joi.object({
//               namebook: Joi.string(),
//               picturebook: Joi.string(),
//               descriptionbook: Joi.string(),
//               authorbook: Joi.string(),
//               publisherbook: Joi.string(),
//             })
//           },
//         }
//       }
      
//     },
//   },
//   {
//     method: 'DELETE',
//     path: '/{languageCode}/book/{idbook}',
//     handler: part.deletepublicbook,
//     options: {
//       locale: {
//         'en': {
//           description: 'Delete book by id',
//           notes: 'Delete book by id from the database',
//           tags: ['api', 'books'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID of the book to delete')
//             })
//           },
//         },
//         'id': {
//           description: 'Hapus buku berdasarkan id',
//           notes: 'Hapus buku berdasarkan id dari database',
//           tags: ['api', 'buku'],
//           validate: {
//             params: Joi.object({
//               idbook: Joi.string().description('ID dari buku yang ingin dihapus')
//             })
//           },
//         }
//       }
      
//     },
//   },
// ];

// module.exports = routes;