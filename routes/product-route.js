import express from 'express';
import { AddNewProduct, getAllProduct } from '../data-store/product-prisma-data-store.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const new_product = req.body;
  const addedProduct = await AddNewProduct(new_product);
  res.json(addedProduct);
});

router.get('/view', async (req, res) => {
  const products = await getAllProduct();
  res.json(products);
});

export default router;
