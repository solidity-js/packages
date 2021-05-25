require("dotenv").config();

import process from "process";
import build from "./commands/build";
import buildAll from "./commands/buildAll";
import newPackage from "./commands/newPackage";
import { cliHasToggle } from "./helpers";
import { PackageName, Settings } from "./types";

// Main

const settings: Settings = {
  verbose: true,
  sourcesEnabled: {
    etherscan: false,
  },
  etherscan: { apiKey: "" },
};

const commands = {
  build: build,
  "build-all": buildAll,
  "new-package": newPackage,
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

  if (cliHasToggle("quiet")) {
    settings.verbose = false;
  }

  const command = process.argv[2];
  if (!Object.keys(commands).includes(command)) {
    throw new Error(`Unknown command ${command}.`);
  }

  if (command === "build") {
    commands["build"]((process.argv[3] || "") as PackageName, settings);
  } else if (command === "build-all") {
    commands["build-all"](settings);
  } else if (command === "new-package") {
    commands["new-package"](process.argv[3] || "", settings);
  }
}

main()
  .then(() => {})
  .catch((e) => console.error(e));
