import express from 'express';

import { authorization, register } from '../controllers/User.js';

const router = express.Router();
router.put('/', authorization);
router.post('/', register);

export default router;
