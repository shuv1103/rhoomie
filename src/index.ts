import dotenv from "dotenv";
import app from "./app.js";
import { db } from "./db/db_connect.js";

dotenv.config({
    path: "../.env"
});

const PORT = process.env.PORT || 8000;

// Test DB connection first
db.connect()
  .then(client => {
    console.log("✅ Database connection verified!");
    client.release();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });