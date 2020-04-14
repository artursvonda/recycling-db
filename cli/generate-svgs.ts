import * as fs from "fs";
import * as path from "path";
import classifiers from "../classifiers.json";

(async () => {
  const template = (
    await fs.promises.readFile(path.relative(__dirname, "template.svg"))
  ).toString();

  for (const classifier of classifiers) {
    const icon = template
      .replace("{code}", classifier.code)
      .replace("{short}", classifier.short);

    const filename = path.resolve(
      __dirname,
      "..",
      "svgs",
      `${classifier.code}.svg`
    );

    await fs.promises.writeFile(filename, icon);
  }
})();
