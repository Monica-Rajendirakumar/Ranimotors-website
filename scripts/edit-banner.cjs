const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const originalPath = path.join(__dirname, '../public/assets/showroom-building-orig.jpg');
const targetPath = path.join(__dirname, '../public/assets/showroom-building.jpg');

// Ensure original photo is preserved
if (!fs.existsSync(originalPath)) {
  if (fs.existsSync(targetPath)) {
    fs.copyFileSync(targetPath, originalPath);
  }
}

// 1. Top Red Header Bar (Top of building facade)
const topWidth = 352;
const topHeight = 56;
const svgTopBar = `
<svg width="${topWidth}" height="${topHeight}" viewBox="0 0 352 56" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="352" height="56" fill="#D30611" />
  <text x="176" y="27" font-family="'Nirmala UI', 'Latha', 'Noto Sans Tamil', 'Arial', sans-serif" font-size="21" font-weight="bold" fill="#ffffff" text-anchor="middle">ராணி மோட்டார்ஸ்</text>
  <text x="176" y="47" font-family="'Nirmala UI', 'Latha', 'Noto Sans Tamil', 'Arial', sans-serif" font-size="10.5" font-weight="500" fill="#ffffff" text-anchor="middle" letter-spacing="0.2">2270, எம்.பி.டி சாலை, வி.சி.முத்தூர், வாலாஜாபேட்டை - 632 513.</text>
</svg>
`;

// 2. Main Banner (Image 3 replacing Image 4 on front building board)
const mainWidth = 684;
const mainHeight = 140;
const svgMainBanner = `
<svg width="${mainWidth}" height="${mainHeight}" viewBox="0 0 684 140" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E30613" />
      <stop offset="100%" stop-color="#B8030F" />
    </linearGradient>
  </defs>

  <!-- Base Container / White Panel -->
  <rect x="0" y="0" width="684" height="140" fill="#ffffff" stroke="#d5d5d5" stroke-width="2" />

  <!-- Left Red Section -->
  <path d="M 0 0 L 310 0 L 250 140 L 0 140 Z" fill="url(#redGrad)" />

  <!-- Slanted Black Stripe -->
  <path d="M 310 0 L 336 0 L 276 140 L 250 140 Z" fill="#181818" />

  <!-- Slanted White Gap / Accent -->
  <path d="M 336 0 L 346 0 L 286 140 L 276 140 Z" fill="#ffffff" />

  <!-- HERO LOGO (Left Red Box) -->
  <g transform="translate(22, 34)">
    <!-- 3D Hero Emblem Mark -->
    <g transform="translate(0, 3) scale(0.7)">
      <!-- Left vertical block -->
      <polygon points="0,0 24,0 24,68 0,68" fill="#ffffff" />
      <!-- Slanted crossbar -->
      <polygon points="24,24 66,0 66,22 24,46" fill="#ffffff" />
      <!-- Right vertical block -->
      <polygon points="44,0 66,0 66,68 44,68" fill="#ffffff" />
    </g>
    <!-- HERO Wordmark Text -->
    <text x="62" y="50" font-family="'Outfit', 'Montserrat', 'Arial Black', sans-serif" font-size="54" font-weight="900" fill="#ffffff" letter-spacing="-1.5">Hero</text>
  </g>

  <!-- RIGHT WHITE SECTION (Text Content matching Image 3) -->
  <g transform="translate(352, 0)">
    <!-- Tamil Title: ராணி மோட்டார்ஸ் -->
    <text x="160" y="34" font-family="'Nirmala UI', 'Latha', 'Noto Sans Tamil', 'Arial', sans-serif" font-size="25" font-weight="bold" fill="#E30613" text-anchor="middle">ராணி மோட்டார்ஸ்</text>
    
    <!-- English Title: Rani Motors -->
    <text x="160" y="73" font-family="'Outfit', 'Montserrat', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#E30613" text-anchor="middle" letter-spacing="0.5">Rani Motors</text>
    
    <!-- Subtitle Line 1: AUTHORISED REPRESENTATIVE OF DEALER -->
    <text x="160" y="99" font-family="'Inter', 'Outfit', 'Arial', sans-serif" font-size="10.5" font-weight="800" fill="#333333" text-anchor="middle" letter-spacing="0.8">AUTHORISED REPRESENTATIVE OF DEALER</text>
    
    <!-- Subtitle Line 2: GANESH HERO -->
    <text x="160" y="118" font-family="'Inter', 'Outfit', 'Arial', sans-serif" font-size="12" font-weight="900" fill="#111111" text-anchor="middle" letter-spacing="1.8">GANESH HERO</text>
  </g>
</svg>
`;

const topBuffer = Buffer.from(svgTopBar);
const mainBuffer = Buffer.from(svgMainBanner);

Promise.all([
  sharp(topBuffer).png().toBuffer(),
  sharp(mainBuffer).png().toBuffer()
]).then(([topImg, mainImg]) => {
  return sharp(originalPath)
    .composite([
      { input: topImg, top: 147, left: 424 },
      { input: mainImg, top: 316, left: 258 }
    ])
    .toFile(targetPath);
}).then(() => {
  console.log('Successfully applied top bar address and Image 3 banner overlay to showroom building image!');
}).catch(err => {
  console.error('Error compositing building images:', err);
});
