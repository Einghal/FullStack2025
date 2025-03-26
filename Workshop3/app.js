const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Basic route to render an EJS template
app.get('/', (req, res) => {
	res.render('index', { 
		message: 'Käyttäjälista!', 
		users: [
			{ name: 'Benkku', age: 25 },
			{ name: 'Pave', age: 30 },
			{ name: 'Oskar', age: 35 }
		], 
		showUsers: true // Pass a boolean value
	});
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
