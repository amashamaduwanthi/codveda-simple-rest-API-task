import express from 'express';
import { AddNewUser } from '../data-store/user-prisma-data-store.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const new_user = req.body;
  const addedUser = await AddNewUser(new_user);
  res.json(addedUser);
});
export default router;