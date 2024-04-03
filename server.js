const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { success } = require('./response');
const connection = require('./connection');
const { nanoid } = require('nanoid');
const swagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const hapii18n = require('hapi-i18n');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.ext('onPreResponse', (request, h) => {
    // mendapatkan konteks response dari request
    const { response } = request;
    const id = nanoid(25);
    const createdat = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    if (response.isBoom) {
      const data = {
        iderror: id,
        detailerror: response.message,
        createdaterror: createdat,
      };
      const query = 'INSERT INTO error SET ?';
      const { languageCode } = request.params;
      const setLang = languageCode === 'id' ? 'id' : 'en';
      if (request.i18n.setLocale(setLang)) {
        connection.query(query, data, (error) => {
          if (error) {
            console.error(error);
          }
          h.response(success(request.i18n.__('status-finish'), request.i18n.__('message-add-error-success'))).code(201);
        });
      }
    }
    // jika bukan error, lanjutkan dengan response sebelumnya (tanpa terintervensi)
    return h.continue;
  });
  
  await server.register([
    Inert,
    Vision,
    {
      plugin: swagger,
      options: {
        info: {
          title: 'bookapp-public API Documentation',
          version: '1.0.11',
        },
        tags : [
          {
            name: 'books',
            description: 'Documentations for books'
          },
          {
            name: 'errors',
            description: 'Menampilkan error yang ada selama proses request'
          },
        ],
        documentationPath: '/{languageCode}',
        grouping: 'tags',
      },
    },
    {
      plugin: hapii18n,
      options: {
        locales: ['en', 'id'],
        directory: __dirname + '/locales',
        languageHeaderField: 'Accept-Language',
        defaultLocale: 'en',
      },
    },
  ]);
  
  server.route(routes);
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};
     
init();
