import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use("/api", userRouter);

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );


app.listen(port, () => {
    console.log(`🚀 Example app listening on port ${port}`);
})