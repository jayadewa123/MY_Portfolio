const fs = require('fs');
const path = require('path');

const src1 = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\18692079-04a2-4942-841c-2bfaf7d04d55\\.user_uploaded\\media_1790052014587.png';
const src2 = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\18692079-04a2-4942-841c-2bfaf7d04d55\\.user_uploaded\\media_1790052014603.png';

const dest1 = path.join(__dirname, 'public', 'projects', 'techloom-pos.png');
const dest2 = path.join(__dirname, 'public', 'projects', 'techloom-store.png');

try {
  fs.copyFileSync(src1, dest1);
  console.log('Copied techloom-pos.png successfully.');
  fs.copyFileSync(src2, dest2);
  console.log('Copied techloom-store.png successfully.');
} catch (err) {
  console.error('Error copying files:', err);
}
