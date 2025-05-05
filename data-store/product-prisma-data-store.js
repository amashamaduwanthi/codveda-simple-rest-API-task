import { PrismaClient } from '@prisma/client';

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