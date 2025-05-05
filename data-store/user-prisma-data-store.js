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