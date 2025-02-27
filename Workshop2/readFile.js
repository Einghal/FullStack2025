const fs = require('fs');

// Read the content of example.txt
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:\n', data);
});