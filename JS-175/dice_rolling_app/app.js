/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function rollDice(params) {
  let rolls = Number(params.get('rolls')) || 1;
  let sides = Number(params.get('sides')) || 6;
  let body = '';

  for (let idx = 0; idx < rolls; idx += 1) {
    body += `${dieRoll(1, sides)}\n`;
  }
  return body;
}

const SERVER = HTTP.createServer( (req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(rollDice(getParams(path)));
    res.write(`${method} ${path} \n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});