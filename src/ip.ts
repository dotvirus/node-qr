import * as os from "os";

export default () => {
  for (let addresses of Object.values(os.networkInterfaces())) {
    if (addresses) {
      for (let add of addresses) {
        if (add.address.startsWith("192.168.")) {
          return add.address;
        }
      }
    }
  }
  return null;
};
