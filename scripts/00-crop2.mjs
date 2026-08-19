// Deprecated — kept to be moved
export {};
const meta = await sharp(src).metadata();
const w = meta.width, h = meta.height;

// Image is 1254x1254 (already square). Just take a crop that's slightly inset
// to focus on face. The face is roughly in upper-center.
// We want to start from a bit above the top of head and end at the shoulders/collar
const top = Math.floor(h * 0.05);
const left = Math.floor(w * 0.18);
const size = Math.floor(Math.min(w * 0.64, h * 0.55));

await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(512, 512)
  .jpeg({ quality: 92 })
  .toBuffer()
  .then(b => writeFile("./public/portrait/face-square.jpg", b));

await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(64, 64)
  .png()
  .toBuffer()
  .then(b => writeFile("./public/favicon-64.png", b));

await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(32, 32)
  .png()
  .toBuffer()
  .then(b => writeFile("./public/favicon-32.png", b));

console.log("size:", size, "top:", top, "left:", left);
