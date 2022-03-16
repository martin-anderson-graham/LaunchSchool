const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const HANDLEBARS = require('handlebars');

const SOURCE = `
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
        font-size: 1.5rem;
      }
      th {
        text-align: right;
      }
      td {
        text-align: center;
      }
      th,
      td {
        padding: 0.5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
          <tr>
            <th>Amount:</th>
            <td>
              <a href='/?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
            </td>
            <td>$ {{amount}}</td>
            <td>
              <a href='/?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
            </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <a href='/?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
            </td>
            <td>{{duration}} years</td>
            <td>
              <a href='/?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
            </td>
          </tr>
          <tr>
            <th>APR:</th>
            <td colspan='3'>{{apr}}%</td>
          </tr>
          <tr>
            <th>Monthly payment:</th>
            <td colspan='3'>$ {{payment}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
`;

const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(SOURCE);

function render (template, data) {
  let html  = template(data);
  return html;
}

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

function createLoanOffer(params) {
  const APR = 5;
  let data = {};

  data.amount = Number(params.get('amount'));
  data.amountIncrement = data.amount + 100;
  data.amountDecrement = data.amount - 100;
  data.duration = Number(params.get('duration'));
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;
  data.apr = APR;
  data.payment = getMonthlyPayment(data.amount, data.duration, APR);

  return data;
}

const SERVER = HTTP.createServer( (req, res) => {
  //let method = req.method;
  let path = req.url;
  let params = getParams(path);

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let data = createLoanOffer(params);
    let content = render(LOAN_OFFER_TEMPLATE, data);
    res.statusCode = 200;
    res.setHeader(`Content-Type`, 'text/html');
    res.write(content);
    res.end();
  }
});

SERVER.listen( PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
