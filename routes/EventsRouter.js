import express from 'express';

import {
  getAllEvent,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsByFounderId,
  counterMembers
} from '../controllers/Event.js';

const router = express.Router();
router.get('/', getAllEvent);
router.get('/:id', getEventById);
router.get('/founder/:id', getEventsByFounderId)
router.post('/', createEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.patch('/counter/:id', counterMembers);

export default router;
