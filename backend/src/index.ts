import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi  from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import { userRouter } from "./router/userRouter";

const app = express();

const port = 8000;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());


app.use("/api", userRouter);

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Rinasik:qwerty123@data.vd0po.mongodb.net/messengerData?retryWrites=true&w=majority"
    );

    app.listen(port, () => {
      console.log(`🚀 Example app listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
