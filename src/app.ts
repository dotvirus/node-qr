import express from "express";
import morgan from "morgan";
import path from "./path";

export default () => {
  const app = express();

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("tiny"));
  }

  app.get("/", (_req, res) => {
    res.download(path);
  });

  return app;
};
