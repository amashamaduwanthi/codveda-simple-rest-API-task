import express from 'express';
import { AddNewUser, getAllUser } from '../data-store/user-prisma-data-store.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const new_user = req.body;
  const addedUser = await AddNewUser(new_user);
  res.json(addedUser);
});
router.get('/view', async (req, res) => {
  const users = await getAllUser();
  res.json(users);
});
export default router;