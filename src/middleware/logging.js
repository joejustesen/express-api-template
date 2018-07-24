// @flow
export default function loggingMiddleware(
  logger: {info: Function},
  opts: { before: bool } = { before: false },
) {
  return (req: Object, res: Object, next: Function) => {
    if (opts.before) {
      logger.info('before');
    }

    res.on('finish', () => {
      logger.info('after');
    });

    next();
  };
}
