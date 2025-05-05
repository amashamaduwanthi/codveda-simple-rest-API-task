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
      userId:new_product.userId
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
export async function updateProduct(updateData, productId) {
  try {
    const updatedProduct = await prisma.product.update({
      where: { productId: productId },
      data: {
        productName: updateData.productName,
        description: updateData.description,
        quantity: updateData.quantity,
        unitPrice: updateData.unitPrice,
        userId:updateData.userId
      },
    });
    console.log("Product updated successfully");
    return updatedProduct;
  } catch (err) {
    console.error("Failed updating data", err);
    throw err;
  }
}
