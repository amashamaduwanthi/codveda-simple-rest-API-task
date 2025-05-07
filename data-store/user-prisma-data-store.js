import { PrismaClient } from '@prisma/client';
import e from 'express';

const prisma = new PrismaClient();
export async function AddNewUser(new_user) {
  const newUser = await prisma.user.create({
    data: {
     username:new_user.username,
     email:new_user.email,
     password:new_user.password
    },
  });
  console.log("User added successfully:", newUser);
  return newUser;
}

export async function getAllUser() {
  return await prisma.user.findMany();
}

export async function deleteUser(userId) {
  try{
    const deletingUser=await prisma.user.delete({
      where:{userId:userId} 
    })
    console.log("Deleting Process Successfully")
    return deletingUser;
  }catch(err){
    console.log(err,"deleting process failed!!")
  }
}
export async function updateUser(updateData, userId) {
  try {
    const updatedUser = await prisma.user.update({
      where: { userId:userId },
      data: {
       username:updateData.username,
       email:updateData.email,
       password:updateData.password
      },
    });
    console.log("User updated successfully");
    return updatedUser;
  } catch (err) {
    console.error("Failed updating data", err);
    throw err;
  }
}
