const fs = require('fs');

// Write text to output.txt
fs.writeFile('output.txt', 'This is the initial text.', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully.');

  // Append additional text to output.txt
  fs.appendFile('output.txt', '\nThis is the appended text.', (err) => {
    if (err) {
      console.error('Error appending file:', err);
      return;
    }
    console.log('Text appended successfully.');
  });
});
