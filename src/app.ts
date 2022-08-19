import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { basename } from "path";

import path from "./path";

export default () => {
  const app = new App();

  app.use(logger());

  app.get("/", (_, res) => {
    res.download(path, basename(path));
  });

  return app;
};
