import { existsSync } from "fs";
import { resolve } from "path";

import args from "./args";

function checkFile(filename?: string) {
  if (!filename) {
    args.help();
    process.exit(0);
  }

  const path = resolve(filename);

  if (!existsSync(path)) {
    console.log(`${path} not found`);
    process.exit(1);
  }

  return path;
}

const argv = args.argv;
const filename = argv.file as string;
const path = checkFile(filename);

export default path;
