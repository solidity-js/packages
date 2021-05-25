require("dotenv").config();

import fs from "fs";
import process from "process";
import compilePackage from "./compilePackage";
import { PackageName, Settings } from "./types";
import paths from "./paths";

// Main

const settings: Settings = {
  sourcesEnabled: {
    etherscan: false,
  },
  etherscan: { apiKey: "" },
};

async function main() {
  if (!process.env.ETHERSCAN_API_KEY) {
    console.warn(
      "Couldn't find a valid ETHERSCAN_API_KEY; disabling etherscan."
    );
  } else {
    settings.sourcesEnabled.etherscan = true;
    settings.etherscan.apiKey = process.env.ETHERSCAN_API_KEY;
  }

  const packages = fs.readdirSync(paths.packages);
  const promises = packages.map((value) =>
    compilePackage(value as PackageName, settings)
  );

  await Promise.all(promises);
}

main()
  .then(() => console.log("Compilation complete."))
  .catch((e) => console.error(e));
