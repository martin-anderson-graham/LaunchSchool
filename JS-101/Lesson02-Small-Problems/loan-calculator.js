
let readline = require('readline-sync');

//clears the console on linux
console.clear();

const PROMPT_LIST = require('./loan-calculator-prompts.json');
const LANGUAGE = 'en';
const LOCALE = 'en-us';
const prefix = "==$";
let loanAmount,
  apr,
  monthlyPercentageRate,
  durationYears,
  durationMonths,
  monthlyPayment,
  totalPayments;

let printLine = (str, lang = LANGUAGE) => {
  console.log(`${prefix} ${PROMPT_LIST[lang][str]}`);
};

let printSummary = () => {
  console.log(`${prefix} ${PROMPT_LIST[LANGUAGE]['reportLoanAmount']}$${loanAmount}.`);
  console.log(`${prefix} ${PROMPT_LIST[LANGUAGE]['reportAPR']}${apr}%.`);
  console.log(`${prefix} ${PROMPT_LIST[LANGUAGE]['reportDuration'][0]}` +
    `${durationYears}${PROMPT_LIST[LANGUAGE]['reportDuration'][1]}${durationMonths}` +
    `${PROMPT_LIST[LANGUAGE]['reportDuration'][2]}`);
  console.log(`${prefix} ${PROMPT_LIST[LANGUAGE]['reportPayment'][0]}${monthlyPayment}` +
    `${PROMPT_LIST[LANGUAGE]['reportPayment'][1]}`);
  console.log(`${prefix} ${PROMPT_LIST[LANGUAGE]['reportTotal'][0]}${totalPayments}` +
    `${PROMPT_LIST[LANGUAGE]['reportTotal'][1]}`);
};

let isValidNumber = (num) => {
  return num.trim() === '' ||
    Number(num) < 0 ||
    Number.isNaN(Number(num));
};

printLine("welcome");
printLine("loanAmount");
loanAmount = readline.question('$');

while (isValidNumber(loanAmount)) {
  printLine("invalid");
  printLine("loanAmount");
  loanAmount = readline.question('$');
}
loanAmount = parseFloat(loanAmount,10);

printLine("apr");
apr = readline.question();

while (isValidNumber(apr)) {
  printLine("invalid");
  printLine("apr");
  apr = readline.question();
}
apr = parseFloat(apr,10);
monthlyPercentageRate = apr / 12;

printLine("duration");
durationYears = readline.question();

while (isValidNumber(durationYears)) {
  printLine("invalid");
  printLine("duration");
  durationYears = readline.question();
}
durationYears = parseFloat(durationYears,10);

durationMonths = (12 * durationYears).toFixed(0);

if (apr !== 0) {
  monthlyPayment = loanAmount *
    ( (monthlyPercentageRate / 100) /
    (1 - Math.pow((1 + (monthlyPercentageRate / 100)),-durationMonths)));
} else {
  monthlyPayment = loanAmount / durationMonths;
}

loanAmount = Number(loanAmount.toFixed(2)).toLocaleString(LOCALE);
totalPayments = Number((monthlyPayment * durationMonths)
  .toFixed(2))
  .toLocaleString(LOCALE,{minimumFractionDigits: 2, maximumFractionDigits: 2});
monthlyPayment = Number(monthlyPayment.toFixed(2))
  .toLocaleString(LOCALE,{minimumFractionDigits: 2, maximumFractionDigits: 2});

printSummary();