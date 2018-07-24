import { createLogger, transports, format } from 'winston';
// import expressWinston from 'express-winston';
import loggingMiddleware from './middleware/logging';

export default function setupLogging(app, env) {
  const opts = {
    level: env.LOG_LEVEL || 'debug',
    format: format.simple(),
    transports: [
      new transports.Console(),
    ],
    expressFormat: true,
    colorize: env !== 'production',
  };

  if (env === 'production') {
    opts.level = env.LOG_LEVEL || 'info';
    opts.format = format.json();
  }

  const logger = createLogger(opts);
  app.use(loggingMiddleware(logger));
  // app.use(expressWinston.logger(opts));

  return logger;
}
