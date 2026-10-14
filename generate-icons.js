import fs from 'fs';
import zlib from 'zlib';

function createPng(width, height, colorHex, textChar) {
  // Parse colorHex e.g. '#58cc02'
  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);

  const rowLength = 1 + width * 4;
  const rawData = Buffer.alloc(rowLength * height);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.44;
  const cornerRadius = width * 0.22;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLength;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      
      // Rounded rect mask
      const dx = Math.max(0, Math.abs(x - cx) - (cx - cornerRadius));
      const dy = Math.max(0, Math.abs(y - cy) - (cy - cornerRadius));
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= cornerRadius) {
        // Inside rounded squircle
        // Draw an educational star / graduation / book graphic in white
        const distCenter = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        
        // Let's create a stylized "E" + star in center
        let isWhite = false;
        
        // Center book / star icon
        const nx = (x - cx) / (width * 0.35); // -1 to 1
        const ny = (y - cy) / (height * 0.35); // -1 to 1

        // Open book shape:
        // Left page: nx in [-0.7, -0.05], ny in [-0.4, 0.4]
        // Right page: nx in [0.05, 0.7], ny in [-0.4, 0.4]
        if (ny >= -0.5 && ny <= 0.4) {
          const pageCurve = 0.1 * Math.sin(Math.abs(nx) * Math.PI);
          if (Math.abs(nx) >= 0.08 && Math.abs(nx) <= 0.75) {
            if (ny >= -0.4 + pageCurve && ny <= 0.35 + pageCurve) {
              isWhite = true;
            }
          }
          // Spine / bookmark
          if (Math.abs(nx) < 0.05 && ny >= -0.55 && ny <= 0.5) {
            isWhite = true;
          }
        }
        // Small star / light on top
        if (ny < -0.45 && ny > -0.75 && Math.abs(nx) < 0.2) {
          if (Math.abs(nx) + Math.abs(ny + 0.6) < 0.2) {
            isWhite = true;
          }
        }

        if (isWhite) {
          rawData[pixelOffset] = 255;
          rawData[pixelOffset + 1] = 255;
          rawData[pixelOffset + 2] = 255;
          rawData[pixelOffset + 3] = 255;
        } else {
          // Gradient green
          const gradFactor = 1 - (y / height) * 0.15;
          rawData[pixelOffset] = Math.round(r * gradFactor);
          rawData[pixelOffset + 1] = Math.round(g * gradFactor);
          rawData[pixelOffset + 2] = Math.round(b * gradFactor);
          rawData[pixelOffset + 3] = 255;
        }
      } else {
        // Transparent outside
        rawData[pixelOffset] = 0;
        rawData[pixelOffset + 1] = 0;
        rawData[pixelOffset + 2] = 0;
        rawData[pixelOffset + 3] = 0;
      }
    }
  }

  // Deflate
  const compressed = zlib.deflateSync(rawData);

  // Helper CRC32
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);

    const crcBuf = Buffer.alloc(4);
    const combined = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(combined), 0);

    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT chunk
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const icon192 = createPng(192, 192, '#58cc02', 'E');
fs.writeFileSync('public/icon-192.png', icon192);

const icon512 = createPng(512, 512, '#58cc02', 'E');
fs.writeFileSync('public/icon-512.png', icon512);

console.log('Icons generated successfully: icon-192.png and icon-512.png');
