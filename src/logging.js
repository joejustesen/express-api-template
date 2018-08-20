import winston, { createLogger, transports, format } from 'winston';
import expressWinston from 'express-winston';

export function setupLogging(app, env) {
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
  const expressWinstonOptions = {
    meta: false,
    msg: '{{req.ip}} {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorize: true,
  };

  // HACK: Remove when `express-winston` fixes this
  // HACK: See https://github.com/bithavoc/express-winston/issues/163
  expressWinstonOptions.winstonInstance = winston.createLogger(opts);
  app.use(expressWinston.logger(expressWinstonOptions));
  // app.use(expressWinston.logger(opts));

  return logger;
}

export function setupErrorLogging(app, env) {
  // const opts = {
  //   level: env.LOG_LEVEL || 'debug',
  //   format: format.simple(),
  //   transports: [
  //     new transports.Console(),
  //   ],
  //   expressFormat: true,
  //   colorize: env !== 'production',
  // };

  // if (env === 'production') {
  //   opts.level = env.LOG_LEVEL || 'info';
  //   opts.format = format.json();
  // }

  // const expressWinstonOptions = {
  //   meta: false,
  //   msg: '{{req.ip}} {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  //   colorize: true,
  //   winstonInstance: winston.createLogger(opts),
  // };

  // app.use(expressWinston.errorLogger(expressWinstonOptions));
}
