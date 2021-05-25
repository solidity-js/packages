import fs from "fs";
import paths from "../paths";
import { PackageName, Settings } from "../types";
import build from "./build";

export default async function buildAll(settings: Settings) {
  const packages = fs.readdirSync(paths.packages);
  const promises = packages.map((packageName) =>
    build(packageName as PackageName, settings)
  );

  await Promise.all(promises);
}
