const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('MetaData.json'); // Ensure this file path is correct
const middleware = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
