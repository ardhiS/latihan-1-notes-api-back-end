/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-console *//* eslint-disable linebreak-style */

const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/no-unresolved
const routes = require('./routes');

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

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
