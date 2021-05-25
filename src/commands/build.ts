import fs from "fs";

import compilePackage from "../compilePackage";
import paths from "../paths";
import { PackageName, Settings } from "../types";

export default async function build(
  packageName: PackageName,
  settings: Settings
) {
  const normalisedPackageName = packageName.trim() as PackageName;

  if (normalisedPackageName.length === 0) {
    console.log("Usage: yarn build [package]");
    return;
  }

  const packages = fs.readdirSync(paths.packages);
  if (!packages.includes(normalisedPackageName)) {
    throw new Error(`Unknown package '${normalisedPackageName}'`);
  }

  compilePackage(normalisedPackageName, settings);
}
