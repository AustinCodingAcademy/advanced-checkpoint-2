import express from 'express';
import {
  list,
  show,
  create,
  update,
  remove
} from '../controllers/UserController';

const router = express.Router();
router.get('/users', list);
router.get('/users/:id', show);
router.post('/users', create);
router.put('/users/:id', update);
router.delete('/users/:id', remove);

export default router;
