Write a regex that matches the word The when it occurs at the beginning of a line. Test it with these strings:

`\^The\b\`

Write a regex that matches the word cat when it occurs at the end of a line. Test it with these strings:

`\\bcat$\`

Write a regex that matches any three-letter word; a word is any string comprised entirely of letters. You can use these test strings.

`\\b[a-z][a-z][a-z]\b\i`

Challenge: Write a regex that matches an entire line of text that consists of exactly 3 words as follows:

The first word is A or The.
There is a single space between the first and second words.
The second word is any 4-letter word.
There is a single space between the second and third words.
The third word -- the last word -- is either dog or cat.
Test your solution with these strings:

`\^(A|The) \w\w\w\w (dog|cat)$\`