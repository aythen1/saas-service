import morgan from "morgan";
import express from "express";
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

// control centralizado de errores.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default app;
