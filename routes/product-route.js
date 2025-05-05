import express from 'express';
import { AddNewProduct ,deleteProduct,getAllProduct} from '../data-store/product-prisma-data-store.js';

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

router.delete('/delete/:id',async(req,res)=>{
  const productId = +req.params.id; 
  console.log(productId);
  try{
  const deletingProduct=await deleteProduct(productId);
  res.json(deletingProduct)
  }catch(err){
    console.log(err)
    res.status(400)
  }
})
export default router;