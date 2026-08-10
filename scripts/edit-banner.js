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

// Banner dimensions on the building facade
const width = 680;
const height = 138;

const svgBanner = `
<svg width="${width}" height="${height}" viewBox="0 0 680 138" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E30613" />
      <stop offset="100%" stop-color="#C00410" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Base Container / Border -->
  <rect x="0" y="0" width="680" height="138" fill="#ffffff" stroke="#e0e0e0" stroke-width="2" />

  <!-- Left Red Section -->
  <path d="M 0 0 L 305 0 L 245 138 L 0 138 Z" fill="url(#redGrad)" />

  <!-- Slanted Black Stripe -->
  <path d="M 305 0 L 332 0 L 272 138 L 245 138 Z" fill="#181818" />

  <!-- Slanted White Gap / Accent -->
  <path d="M 332 0 L 342 0 L 282 138 L 272 138 Z" fill="#ffffff" />

  <!-- HERO LOGO (Left Red Box) -->
  <g transform="translate(18, 32)">
    <!-- 3D Hero Emblem Mark -->
    <g transform="translate(0, 4) scale(0.68)">
      <!-- Parallelogram 1 (Left block) -->
      <polygon points="0,0 24,0 24,68 0,68" fill="#ffffff" />
      <!-- Parallelogram 2 (Slanted bridge) -->
      <polygon points="24,24 66,0 66,22 24,46" fill="#ffffff" />
      <!-- Parallelogram 3 (Right block) -->
      <polygon points="44,0 66,0 66,68 44,68" fill="#ffffff" />
    </g>
    <!-- HERO Wordmark Text -->
    <text x=\"60\" y=\"50\" font-family=\"'Outfit', 'Montserrat', 'Arial Black', sans-serif\" font-size=\"52\" font-weight=\"900\" fill=\"#ffffff\" letter-spacing=\"-1.5\">Hero</text>
  </g>

  <!-- RIGHT WHITE SECTION (Text Content) -->
  <g transform="translate(348, 0)">
    <!-- Tamil Title: ராணி மோட்டார்ஸ் -->
    <text x="160" y="34" font-family="'Nirmala UI', 'Latha', 'Noto Sans Tamil', 'Arial', sans-serif" font-size="25" font-weight="bold" fill="#E30613" text-anchor="middle">ராணி மோட்டார்ஸ்</text>
    
    <!-- English Title: Rani Motors -->
    <text x="160" y="72" font-family="'Outfit', 'Montserrat', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#E30613" text-anchor="middle" letter-spacing="0.5">Rani Motors</text>
    
    <!-- Subtitle Line 1: AUTHORISED REPRESENTATIVE OF DEALER -->
    <text x="160" y="98" font-family="'Inter', 'Outfit', 'Arial', sans-serif" font-size="10.5" font-weight="800" fill="#333333" text-anchor="middle" letter-spacing="1">AUTHORISED REPRESENTATIVE OF DEALER</text>
    
    <!-- Subtitle Line 2: GANESH HERO -->
    <text x="160" y="117" font-family="'Inter', 'Outfit', 'Arial', sans-serif" font-size="12" font-weight="900" fill="#111111" text-anchor="middle" letter-spacing="2">GANESH HERO</text>
  </g>
</svg>
`;

const svgBuffer = Buffer.from(svgBanner);

sharp(svgBuffer)
  .png()
  .toBuffer()
  .then(bannerBuffer => {
    return sharp(originalPath)
      .composite([{
        input: bannerBuffer,
        top: 316,
        left: 260
      }])
      .toFile(targetPath);
  })
  .then(() => {
    console.log('Successfully updated showroom building image with Image 3 banner!');
  })
  .catch(err => {
    console.error('Error compositing banner:', err);
  });
