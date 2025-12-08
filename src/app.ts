import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Rhoomie Roommate Backend is running!");
  });
  
export default app;
