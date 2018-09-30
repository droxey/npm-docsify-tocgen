const dir = process.argv[2];
const index = process.argv[3];

if (!dir) {
  process.stdout.write(
    `
    Usage:
      docsify-tocgen docs
      docsify-tocgen docs output-file.md
    `
  );
  process.exit(1);
}

const tocOutput = require('./tocgen')(dir, index);

if (!index) {
  process.stdout.write(tocOutput);
}
