// scripts/generate-uno.js


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGenerator } from 'unocss';
import config from '../uno.config.js';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursively scan all .vue, .js, .ts, .css files in src/
function scanFiles(dir, exts = ['.vue', '.js', '.ts', '.css']) {
  let content = '';
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      content += scanFiles(fullPath, exts);
    } else if (exts.includes(path.extname(file))) {
      content += fs.readFileSync(fullPath, 'utf8') + '\n';
    }
  }
  return content;
}

async function generateCSS() {
  const uno = createGenerator(config);
  const content = scanFiles(path.resolve(__dirname, '../src'));
  const { css } = await uno.generate(content);
  fs.writeFileSync(path.resolve(__dirname, '../src/generated-uno.css'), css);
}

generateCSS().catch(console.error);
