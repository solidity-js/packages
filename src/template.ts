import fs from "fs";
import path from "path";

import Mustache from "mustache";
import prettier from "prettier";

import { PackageName, TemplateName } from "./types";

export const getTemplateContent = (templateName: TemplateName) =>
  fs
    .readFileSync(path.join(__dirname, "./templates", `${templateName}.tmpl`))
    .toString();

export const parse = (
  templateName: TemplateName,
  variables: Record<any, any>
) => Mustache.render(getTemplateContent(templateName), variables);

export const compile = (
  packageName: PackageName,
  templateName: TemplateName,
  variables: Record<any, any>
) =>
  fs.writeFileSync(
    path.join(__dirname, "../packages", packageName, templateName),
    prettier.format(
      parse(templateName, { ...variables, now: new Date().toISOString() }),
      { filepath: templateName }
    )
  );
