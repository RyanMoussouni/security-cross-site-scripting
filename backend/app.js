const express = require('express');
const app = express();

app.get('/', (req, res) => {
	const searchParam = req.query.search;
	res.send(`Your search: ${searchParam}`); 
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
