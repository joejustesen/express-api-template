// @flow
export default function loggingMiddleware(logger: {info: Function}) {
  return (req: Object, res: Object, next: Function) => {
    logger.info('before');

    res.on('finish', () => {
      logger.info('after');
    });

    next();
  };
}
