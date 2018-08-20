import express from 'express';
import asyncHandler from 'express-async-handler';

import { addData, getData, removeData } from '../modules/example';

const router = express.Router();

router.get('/datastore/:id', asyncHandler(async (req, res) => {
  const data = await getData(req.params.id);

  if (data) {
    res.send(data);
  } else {
    res.status(404);
  }
}));

router.post('/datastore', asyncHandler(async (req, res) => {
  const id = await addData();

  res.status(201);
  res.send(`/example/datastore/${id}`);
}));

router.delete('/datastore/:id', asyncHandler(async (req, res) => {
  if (await removeData(req.params.id) === false) {
    res.status(404);
  }
}));

export default router;
