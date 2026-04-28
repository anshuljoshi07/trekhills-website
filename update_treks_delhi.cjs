const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/data/treks.js');

let content = fs.readFileSync(file, 'utf8');

// Convert to CommonJS for reading
let jsCode = content.replace('export const treks = [', 'const treks = module.exports = [');

const m = new module.constructor();
m.paths = module.paths;
m._compile(jsCode, file);
const treks = m.exports;

// For writing back
const writeOutput = `export const treks = ${JSON.stringify(treks, null, 2)};`;

treks.forEach(trek => {
  // Update Chopta Chandrashila specifically
  if (trek.name.includes("Chopta-Tungnath-Chandrashila")) {
    const dayToUpdate = trek.itinerary.find(d => d.title.includes("Rishikesh to Chopta"));
    if (dayToUpdate && !dayToUpdate.description.includes("Omkareshwar")) {
      dayToUpdate.description += " Enroute, visit Dhari Devi Temple and Omkareshwar (Ukhimath).";
    }
  }
});

let outputContent = `export const treks = ${JSON.stringify(treks, null, 2)};\n`;
fs.writeFileSync(file, outputContent, 'utf8');
console.log('Successfully updated treks data.');
