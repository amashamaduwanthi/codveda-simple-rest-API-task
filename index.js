import express from 'express';
import productRoutes from './routes/product-route.js'; 
import userRoutes from './routes/user-route.js'; 

const app = express();
const port = 3000;

app.use(express.json());
app.use('/product', productRoutes);
app.use('/user',userRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
