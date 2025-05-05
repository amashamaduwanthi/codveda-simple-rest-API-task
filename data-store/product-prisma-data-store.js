import { PrismaClient } from '@prisma/client';
import e from 'express';

const prisma = new PrismaClient();

export async function AddNewProduct(new_product) {
  const newProduct = await prisma.product.create({
    data: {
      productName: new_product.productName,
      description: new_product.description,
      quantity: new_product.quantity,
      unitPrice: new_product.unitPrice,
    },
  });
  console.log("Product added successfully:", newProduct);
  return newProduct;
}
export async function getAllProduct() {
  return await prisma.product.findMany();
}

export async function deleteProduct(productId) {
  try{
    const deletingProduct=await prisma.product.delete({
      where:{productId:productId} 
    })
    console.log("Deleting Process Successfully")
    return deletingProduct;
  }catch(err){
    console.log(err,"deleting process failed!!")
  }
}