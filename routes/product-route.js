import express from 'express';
import { AddNewProduct ,deleteProduct,getAllProduct, updateProduct} from '../data-store/product-prisma-data-store.js';

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

router.put('/update/:id',async(req,res)=>{
  const update_product=req.body;
  const productId=+req.params.id;
  try{
  const updatingProduct=await updateProduct(update_product,productId)
  res.json(updatingProduct)
  if (!updatingProduct) {
    return res.status(404).json({ error: "Product not found" });
  }
  }catch(err){
    console.error("Update failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
})
export default router;