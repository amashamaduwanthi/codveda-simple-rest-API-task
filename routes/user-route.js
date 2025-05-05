import express from 'express';
import { AddNewUser, deleteUser, getAllUser } from '../data-store/user-prisma-data-store.js';

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
router.delete('/delete/:id',async(req,res)=>{
  const userId = +req.params.id; 
  console.log(userId);
  try{
  const deletingUser=await deleteUser(userId);
  res.json(deletingUser)
  }catch(err){
    console.log(err)
    res.status(400)
  }
})
export default router;