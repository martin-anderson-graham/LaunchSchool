const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function getMonthlyPayment(amount, durationYears, APR) {
  const mPR = APR / 12;
  const numMonths = durationYears * 12;
  let monthlyPayment = amount * (mPR / (1 - Math.pow((1 + mPR), (-numMonths))));
  return monthlyPayment.toFixed(2);
}

function getLoanText(params) {
  let body = HTML_START;
  let amount = Number(params.get('amount')) || 0;
  let duration = Number(params.get('duration')) || 30;
  let APR = 0.05;
  let monthlyPayment = getMonthlyPayment(amount, duration, APR);

  body += `<tr><th>Amount:</th>
    <td><a = href='/?amount=${amount - 100}&duration=${duration}'>- $100</a></td>
    <td>$${amount}</td>
    <td><a = href='/?amount=${amount + 100}&duration=${duration}'>+ $100</a></td>
    </tr>`;

  body += `<tr><th>duration:</th>
    <td><a = href='/?amount=${amount}&duration=${duration - 1}'>- 1 year</a></td>
    <td>${duration}</td>
    <td><a = href='/?amount=${amount}&duration=${duration + 1}'>+ 1 year</a></td>
    </tr>`;

  body += `<tr><th>APR:</th><td colspan='3'>5%</td></tr><tr> <th>Monthly payment:</th>
  <td colspan='3'>$${monthlyPayment}</td></tr>`;
  return body + HTML_END;
}


const SERVER = HTTP.createServer( (req, res) => {
  //let method = req.method;
  let path = req.url;
  let params = getParams(path);

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader(`Content-Type`, 'text/html');
    res.write(getLoanText(params));
    res.end();
  }
});

SERVER.listen( PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
