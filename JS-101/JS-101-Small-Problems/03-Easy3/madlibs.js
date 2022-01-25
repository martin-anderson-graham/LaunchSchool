/*Madlibs is a simple game where you create a story template with "blanks" for
words. You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and
an adjective, and injects them into a story that you create.
*/
console.clear();

let readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Oh no! I seem to have misplaced my ${noun}.  Perhaps you found it` +
  ` while you were ${verb}ing? No?  Hmm, could be that ${adjective} ` +
  `Mr. Wumpus - he is always ${adverb} shaking his head at me.`);

