import express from 'express';
import asyncHandler from 'express-async-handler';

import handler from '../modules/example';

const router = express.Router();

router.get('/', asyncHandler(handler));
export default router;
