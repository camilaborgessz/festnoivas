const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, '../public/logoFestnoivas.svg');
const outPath = path.join(__dirname, '../public/og-logo.png');

const svgContent = fs.readFileSync(svgPath);


sharp(svgContent)
  .resize(900, 565, { fit: 'contain', background: { r: 253, g: 250, b: 248, alpha: 1 } })
  .extend({ top: 33, bottom: 32, left: 150, right: 150, background: { r: 253, g: 250, b: 248, alpha: 1 } })
  .png()
  .toFile(outPath)
  .then(() => console.log('og-logo.png gerado em public/og-logo.png'))
  .catch(err => console.error('Erro:', err));
