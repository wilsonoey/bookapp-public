const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { success } = require('./response');
const connection = require('./connection');
const { nanoid } = require('nanoid');
const swagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

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
        detailerror: response.message || response.output.payload,
        createdaterror: createdat,
      };
      const query = 'INSERT INTO error SET ?';
      connection.query(query, data, (error) => {
        if (error) {
          console.error(error);
        }
        h.response(success('Error berhasil ditambahkan')).code(201);
      });
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
        documentationPath: '/',
        grouping: 'tags',
        swaggerUI: true,
        //customCssUrl: '/public/swagger-ui.css',
        //
      },
    }
  ]);
  
  server.route(routes);
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};
     
init();
