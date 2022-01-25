//Refactor the function below using arrow syntax. Line 9 should still log the same sentence.


const template = 'I VERB NOUN.';

let sentence = (verb, noun)  => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

