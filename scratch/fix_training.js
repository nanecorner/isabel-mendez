const fs = require('fs');

let content = fs.readFileSync('src/lib/profile-data.ts', 'utf8');

let startIndex = content.indexOf('  training: [');
if (startIndex === -1) {
  console.log('Not found');
  process.exit(1);
}

// Find matching bracket
let openBrackets = 0;
let endIndex = -1;
for (let i = startIndex + 12; i < content.length; i++) {
  if (content[i] === '[') openBrackets++;
  else if (content[i] === ']') {
    openBrackets--;
    if (openBrackets === 0) {
      endIndex = i + 1;
      break;
    }
  }
}

if (endIndex === -1) {
  console.log('End not found');
  process.exit(1);
}

let trainingStr = content.substring(startIndex, endIndex);

let replacedCount = 0;
let finalStr = trainingStr.replace(/institution:\s*"([^"]*)",(\s*)duration:\s*([^,]+),(\s*)date:\s*"([^"]+)"/g, (matchStr, inst, s1, dur, s2, date) => {
    // Some lines have date as null... the regex captures up to the quote for date, so it expects a quoted string.
    if (/^(\d+\s+[a-z]+\s*[–-]| \d+\s*[–-])$/i.test(inst) || /^\d+\s*[a-z]*\s*[–-]$/i.test(inst) || /^\d+\s*[a-z]*\s*a$/i.test(inst) || /^\d+\s*al$/i.test(inst) || /^[a-z]+\s*\d+\s*[–-]$/i.test(inst)) {
        let newDate = inst.trim() + " " + date;
        replacedCount++;
        console.log(`Replaced: ${inst} + ${date} -> ${newDate}`);
        return `institution: "",${s1}duration: ${dur},${s2}date: "${newDate}"`;
    }
    return matchStr;
});

console.log(`Replaced ${replacedCount} items.`);

const newContent = content.substring(0, startIndex) + finalStr + content.substring(endIndex);
fs.writeFileSync('src/lib/profile-data.ts', newContent, 'utf8');
console.log("training updated successfully.");
