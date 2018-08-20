import express from 'express';
import http from 'http';
import https from 'https';
import bodyParser from 'body-parser';

import { setupLogging, setupErrorLogging } from './logging';
import exampleRoutes from './routes/example';

const port = process.env.PORT !== undefined ? process.env.PORT : 3030;
const host = process.env.HOST || 'localhost';
const app = express();
const logger = setupLogging(app, process.env);

app.locals.logger = logger;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  TODO: add all routes here
app.use('/example', exampleRoutes);

//  This must be done after all routes are setup
setupErrorLogging(app, process.env);

//  Start the server
const server = process.env.NODE_ENV === 'production' ? https.createServer(app) : http.createServer(app);
server.listen(port, host, () => logger.info(`server listening on ${server.address().address}:${server.address().port}`));
