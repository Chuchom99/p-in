import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"


//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());
  
  app.use("/api/auth", authRoutes);

  app.listen(8800, () => {
    console.log("API working!");
  });
  