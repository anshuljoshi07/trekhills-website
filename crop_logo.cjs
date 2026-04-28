const sharp = require('sharp');
const fs = require('fs');
const input = '/Users/anshuljoshi/.gemini/antigravity/brain/22ad7c74-9147-4b77-95d8-1b2060f95d7c/media__1777383936500.png';
const output = '/Users/anshuljoshi/.gemini/antigravity/scratch/trek-listing-app/public/trekhills_logo_new.png';

sharp(input)
  .trim({ threshold: 20 }) // Auto-crop the cream background
  .toFile(output)
  .then(info => {
    console.log('Cropped successfully:', info);
  })
  .catch(err => {
    console.error('Error cropping:', err);
  });
