import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
const word = "Bicker" + "bazaar";
writeFileSync("/output/entry.txt", word, "utf8");
