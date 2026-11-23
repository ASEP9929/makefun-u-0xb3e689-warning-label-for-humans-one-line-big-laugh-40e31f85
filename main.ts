// Warning Label for Humans — one line, big laugh.
// Writes a single-line safety warning label (<=160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// REVISION: "recall" -> "replay" (lebih hidup, manusia benar-benar memutar
// ulang momen itu di kepala); punchline akhir diperkuat dari "Wait for
// reboot." menjadi "Reboot takes 3-5 business days." — turn yang lebih
// spesifik dan lucu, tetap dalam irama label peringatan mesin.
const ENTRY =
  "WARNING: Human may suddenly replay an embarrassing moment from 2009 and freeze mid-sentence. Do not startle. Reboot takes 3-5 business days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
