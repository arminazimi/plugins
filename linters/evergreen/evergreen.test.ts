import { customLinterCheckTest, TestCallback } from "tests";

// Evergreen scans a repository, not a single file, so the fixture has to be a
// real manifest at the sandbox root for the npm detector to read it.
const moveManifestToRoot: TestCallback = (driver) => {
  driver.moveFile("test_data/package.json", "package.json");
};

customLinterCheckTest({
  linterName: "evergreen",
  args: "package.json",
  preCheck: moveManifestToRoot,
});
