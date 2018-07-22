import express from 'express';
import asyncHandler from 'express-async-handler';

import handler from '../modules/example';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const data = await handler(req, res);
  res.send(data);
}));

export default router;
