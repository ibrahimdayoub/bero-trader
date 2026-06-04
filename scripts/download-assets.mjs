import https from "node:https";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const imagesDir = path.join(publicDir, "images");

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const assets = [
  { url: "https://sp-today.com/images/logo.svg", dest: "logo.svg" },
  { url: "https://sp-today.com/og-image.png", dest: "og-image.png" },
  { url: "https://sp-today.com/favicon.ico", dest: path.join("..", "public", "favicon.ico") },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.isAbsolute(destPath) ? destPath : path.join(imagesDir, destPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(fullPath);
    const protocol = url.startsWith("https") ? https : http;

    protocol.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(fullPath);
        return download(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(fullPath);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Downloaded: ${url} -> ${fullPath}`);
        resolve(fullPath);
      });
    }).on("error", (err) => {
      file.close();
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
      reject(err);
    });
  });
}

async function downloadAll() {
  const results = await Promise.allSettled(
    assets.map((a) => download(a.url, a.dest))
  );
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`Failed: ${assets[i].url} - ${r.reason.message}`);
  });
}

downloadAll();
