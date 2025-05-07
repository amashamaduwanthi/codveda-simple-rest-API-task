import express from 'express';
import { AddNewUser, deleteUser, getAllUser, updateUser } from '../data-store/user-prisma-data-store.js';

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
router.put('/update/:id',async(req,res)=>{
  const update_user=req.body;
  const userId=+req.params.id;
  try{
  const updatingUser=await updateUser(update_user,userId)
  res.json(updatingUser)
  if (!updatingUser) {
    return res.status(404).json({ error: "User not found" });
  }
  }catch(err){
    console.error("Update failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
})
export default router;