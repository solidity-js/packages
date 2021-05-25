require("dotenv").config();

import process from "process";
import build from "./commands/build";
import buildAll from "./commands/buildAll";
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

  const command = process.argv[2];
  if (!Object.keys(commands).includes(command)) {
    throw new Error(`Unknown command ${command}.`);
  }

  if (command === "build") {
    commands["build"]((process.argv[3] || "") as PackageName, settings);
  } else if (command === "build-all") {
    commands["build-all"](settings);
  }
}

main()
  .then(() => {})
  .catch((e) => console.error(e));
