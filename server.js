'use strict';

const express = require('express');
const fetch = require('node-fetch');

const PORT = 8080;
const HOST = '127.0.0.1';

const app = express();
app.get('/', (req, res) => {
	const now = new Date();
  res.send(`Hello, you have logged in at: ${now.toLocaleString()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
