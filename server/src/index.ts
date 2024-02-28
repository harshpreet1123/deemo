import express from "express";
import mongoose from "mongoose";
import freelancerAuthRoutes from './routes/user/freelancer/authRoutes';
const port=3000;
const app = express();
app.use(express.json());

app.use('/user/freelancer',freelancerAuthRoutes);
app.listen(port, () => {
  console.log(`Running at ${port}`);
  console.log(`Visit http://localhost:${port}`);
});
