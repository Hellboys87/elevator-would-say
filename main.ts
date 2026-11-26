import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "I go up and down all day and I've still never gotten a window seat.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
