const fs = require('fs');

let content = fs.readFileSync('src/lib/profile-data.ts', 'utf8');

// The events array is between `events: [` and the next section `// ── DIRECCIÓN DE TESIS` or something.
// We can use a simpler approach: extract the file, run it in a VM or eval to get the object, modify it, but then we lose comments.
// Best approach: replace inside the events array using regex on the `title: "..."` lines.

// Let's find all events objects.
const blockRegex = /events:\s*\[([\s\S]*?)\]\s*,?\s*(\/\/ ──|$)/;
const match = blockRegex.exec(content);

if (!match) {
  console.log("Could not find events array!");
  process.exit(1);
}

let eventsStr = match[1];

// For each title inside the events array
eventsStr = eventsStr.replace(/title:\s*"([^"]+)",/g, (match, titleStr) => {
  // Split the title by dots.
  // Note: Authors usually ends with the first dot.
  // Wait! Some authors have dots: "Méndez I., Díaz-Muñoz M."
  // But usually in this file it's: "Mendoza Patiño MC, Aceves Fernández MA, Méndez Hernández I, Tovar Arriaga S." (no dots in authors until the end)
  
  // Let's split by '. '
  const parts = titleStr.split(/\.\s+/);
  if (parts.length >= 3) {
    let authors = parts[0] + '.';
    let venue = parts.slice(-2).join('. '); // Usually Congress and Location
    // sometimes location is the last part, congress is the second to last.
    let title = parts.slice(1, -2).join('. ') + '.';
    
    if (parts.length === 3) {
        // authors, title, venue
        title = parts[1] + '.';
        venue = parts[2];
    }
    
    // Check if venue ends with dot
    if (!venue.endsWith('.')) venue += '.';

    return `authors: "${authors}",
      title: "${title}",
      venue: "${venue}",`;
  } else if (parts.length === 2) {
    return `authors: "${parts[0]}.",
      title: "${parts[1]}",`;
  }
  
  return match;
});

const newContent = content.replace(blockRegex, `events: [${eventsStr}],\n  $2`);
fs.writeFileSync('src/lib/profile-data.ts', newContent, 'utf8');
console.log("events updated successfully.");
