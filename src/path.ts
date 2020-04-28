import { resolve } from "path";
import { existsSync } from "fs";
import args from "./args";

function checkFile(filename?: string) {
  if (!filename) {
    // @ts-ignore
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

const filename = <string>args.file;
const path = checkFile(filename);

export default path;
