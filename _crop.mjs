// Deprecated — kept to be removed.
export {};
const meta = await sharp(src).metadata();
console.log("source:", meta.width, "x", meta.height);

const w = meta.width;
const h = meta.height;
const size = Math.min(w, h);
const left = Math.floor((w - size) / 2);
const top = Math.max(0, Math.floor((h - size) * 0.3));

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

console.log("done");
