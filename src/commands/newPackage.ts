import fs from "fs";
import path from "path";
import prettier from "prettier";

import paths from "../paths";
import { Settings } from "../types";

export default async function newPackage(
  packageName: string,
  settings: Settings
) {
  const normalisedPackageName = packageName.trim();

  if (normalisedPackageName.length === 0) {
    console.log("Usage: yarn new-package [package-name]");
    return;
  }

  const newFilepath = path.join(
    paths.packages,
    normalisedPackageName,
    "config.ts"
  );

  if (fs.existsSync(newFilepath)) {
    console.error(`Package '${normalisedPackageName}' already exists`);
    return;
  }

  fs.mkdirSync(path.join(paths.packages, normalisedPackageName));

  fs.writeFileSync(newFilepath, template);

  if (settings.verbose) {
    console.log(`Created skeleton package '${normalisedPackageName}'`);
  }

  const typesPath = path.join(__dirname, "../types.ts");

  const typesSrc = fs.readFileSync(typesPath).toString();

  fs.writeFileSync(
    typesPath,
    prettier.format(
      typesSrc.replace(
        "export type PackageName = ",
        `export type PackageName = "${normalisedPackageName}" | `
      ),
      { filepath: "types.ts" }
    )
  );

  if (settings.verbose) {
    console.log(`Added '${normalisedPackageName}' to PackageName type`);
  }
}

const template = `
import { PackageConfig } from "../../src/types";

const config: PackageConfig = {
  projectName: "",
  projectUrl: "",
  contracts: {
    Contract: {
      address: "",
      source: "etherscan"
    }
  }
};

export default config;

`;
