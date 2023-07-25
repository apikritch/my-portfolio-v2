import { execa } from "execa";
import fs from "fs";

try {
  await execa("git", ["checkout", "--orphan", "gh-pages"]);

  console.log("Building started...");
  await execa("pnpm", ["build"]);
  const folderName = fs.existsSync("dist") ? "dist" : "build";
  await execa("git", ["--work-tree", folderName, "add", "--all"]);
  await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);

  console.log("Pushing to gh-pages...");
  await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
  await execa("git", ["checkout", "-f", "master"]);
  await execa("git", ["branch", "-D", "gh-pages"]);

  console.log("Successfully deployed, check your settings");
} catch (error) {
  console.log(error);
  process.exit(1);
}
