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
      validate: {
        params: Joi.object({
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en')
        }),
      },
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(200),
          status: Joi.string().example('success'),
          count: Joi.number().example(1),
          message: Joi.string().example('Error data has been retrieved'),
          data: Joi.array().items(Joi.object({
            iderror: Joi.string().example(nanoid(25)),
            detailerror: Joi.string().example('Error message'),
            createdaterror: Joi.date().example(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
          }))
        }).label('Result').description('Successful response in English'),
      },
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
        params: Joi.object({
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en')
        }),
        payload: Joi.object({
          idbook: Joi.string().equal(nanoid(50)),
          namebook: Joi.string(),
          picturebook: Joi.string(),
          descriptionbook: Joi.string(),
          authorbook: Joi.string(),
          publisherbook: Joi.string(),
        }),
      },
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(201),
          status: Joi.string().example('success'),
          message: Joi.string().example('Data has been added')
        }).label('Result').description('Successful response in English'),
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
      validate: {
        params: Joi.object({
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en')
        }),
      },
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(200),
          status: Joi.string().example('success'),
          count: Joi.number().example(1),
          message: Joi.string().example('Data has been retrieved'),
          data: Joi.array().items(Joi.object({}))
        }).label('Result').description('Successful response in English'),
      },
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
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en'),
          idbook: Joi.string().description('ID of the book to detail')
        })
      },
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(200),
          status: Joi.string().example('success'),
          count: Joi.number().example(1),
          message: Joi.string().example('Data has been retrieved'),
          data: Joi.array().items(Joi.object({}))
        }).label('Result').description('Successful response in English'),
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
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en'),
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
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(200),
          status: Joi.string().example('success'),
          count: Joi.number().example(1),
          message: Joi.string().example('Data has been retrieved'),
          data: Joi.array().items(Joi.object({}))
        }).label('Result').description('Successful response in English'),
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
          languageCode: Joi.string().valid('en', 'id').description('Language code (en = English, id = Indonesian)').default('en'),
          idbook: Joi.string().description('ID of the book to delete')
        })
      },
      response: {
        schema: Joi.object({
          statusCode: Joi.number().example(200),
          status: Joi.string().example('success'),
          count: Joi.number().example(1),
          message: Joi.string().example('Data has been retrieved'),
          data: Joi.array().items(Joi.object({}))
        }).label('Result').description('Successful response in English'),
      },
    },
  },
];

module.exports = routes;
