const express = require('express');
const hostname = require('os').hostname();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from the server!</h1>\n');
});

app.get('/hostname', (req, res) => {
  res.send(hostname+ '\n');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
