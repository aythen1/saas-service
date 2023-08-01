import express from "express";
import morgan from "morgan";
import cors from "cors";
import index from "./router/index.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", index);

app.get("/root", (req, res) => {
  res.json({
    index: "/root",
  });
});

export default app;
