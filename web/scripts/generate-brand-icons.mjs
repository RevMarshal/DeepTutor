import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webDir = path.resolve(__dirname, "..");
const svgPath = path.join(webDir, "public", "rm-mark.svg");
const publicDir = path.join(webDir, "public");

async function main() {
  if (!fs.existsSync(svgPath)) {
    console.error(`Missing SVG input at ${svgPath}`);
    process.exit(1);
  }

  let sharp;
  try {
    const mod = await import("sharp");
    sharp = mod.default ?? mod;
  } catch (err) {
    console.error("sharp is required to generate brand icons:", err);
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(svgPath);

  const targets = [
    { name: "rm-icon-16.png", size: 16 },
    { name: "rm-icon-32.png", size: 32 },
    { name: "rm-apple-touch-icon.png", size: 180 },
  ];

  for (const { name, size } of targets) {
    const outPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${name} (${size}x${size})`);
  }
}

main().catch((err) => {
  console.error("Error generating brand icons:", err);
  process.exit(1);
});
