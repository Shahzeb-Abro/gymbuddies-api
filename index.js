import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Deployment successful");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
