
let template1 = [ 'The', 'ADJECTIVE', 'brown', 'NOUN', 'ADVERB', '\n',
  'VERB', 'the', "ADJECTIVE", 'yellow', '\n',
  "NOUN", 'who', "ADVERB", "VERB", 'his', '\n',
  "NOUN", 'and', 'looks', 'around'];
let template2 = ['The', 'NOUN', 'VERB', 'the', 'NOUNS', 'NOUN'];

const ADJECTIVES = 'quick lazy sleepy noisy hungry'.split(' ');
const NOUNS = 'fox dog head leg tail cat'.split(' ');
const VERBS = 'jumps lifts bites licks pats'.split(' ');
const ADVERBS = 'easily lazily noisily excitedly'.split(' ');

function pickRandomWordFromArray (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function madlibs(template) {
  let result = [];
  let specialWords = {NOUN: NOUNS,
    VERB:VERBS,
    ADJECTIVE: ADJECTIVES,
    ADVERB: ADVERBS,
  };
  template.forEach( (word) => {
    if (Object.keys(specialWords).includes(word) ) {
      result.push(pickRandomWordFromArray(specialWords[word]));
    } else if (word === 'NOUNS') {
      result.push((pickRandomWordFromArray(NOUNS) + '\'s'));
    } else {
      result.push(word);
    }
  });
  result = result.join(' ') + '.';
  console.log(result);
}

// These examples use the following list of replacement texts:
/*
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------
*/

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".