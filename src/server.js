import express from 'express';
import http from 'http';
import https from 'https';

import loggerSetup from './logger';
import exampleRoutes from './routes/example';

const port = process.env.PORT !== undefined ? process.env.PORT : 3030;
const host = process.env.HOST || 'localhost';
const app = express();
const logger = loggerSetup(app, process.env);

app.locals.logger = logger;

//  TODO: add all routes here
app.use('/example', exampleRoutes);

//  Start the server
const server = process.env.NODE_ENV === 'production' ? https.createServer(app) : http.createServer(app);
server.listen(port, host, () => logger.info(`server listening on ${server.address().address}:${server.address().port}`));
