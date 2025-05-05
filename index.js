import express from 'express';
import productRoutes from './routes/product-route.js'; // Add `.js`!

const app = express();
const port = 3000;

app.use(express.json());
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
