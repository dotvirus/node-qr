import getPort from "get-port";
import qrcode from "qrcode-terminal";

import buildApp from "./app";
import getLocalIp from "./ip";
import path from "./path";

(async () => {
  const app = buildApp();

  const localIp = getLocalIp();
  const tryPort =
    (process.env.PORT ? parseInt(process.env.PORT) : null) || 3000;
  const port = await getPort({ port: tryPort });
  const url = `http://${localIp}:${port}`;

  app.listen(port, () => {
    console.log(`Scan this QR code to download ${path}\n`);
    qrcode.generate(url);
  });
})();
