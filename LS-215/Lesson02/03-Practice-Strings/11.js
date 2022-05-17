let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = [fact1, fact2.replace(/[A-Z]/, (w) => w.toLowerCase())].join(' and ');
console.log('compoundSentence', compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);