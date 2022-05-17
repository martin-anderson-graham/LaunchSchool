Write a regex that matches uppercase or lowercase Ks or a lowercase s. Test it with these strings:

`/[Kks]/`

Write a regex that matches any of the strings cat, cot, cut, bat, bot, or but, regardless of case. Test it with this text:

`/[cb][aou]t/i`

Base 20 digits include the decimal digits 0 through 9, and the letters A through J in upper or lowercase. Write a regex that matches base 20 digits. Test it with these strings:

`/[0-9A-Ja-j]/`

Write a regex that matches any letter except x or X. Test it with these strings:

`[A-WY-Za-wy-z]`

Why is /[^xX]/ not a valid answer to the previous exercise?

It matches non-letters

Write a regex that matches any character that is not a letter. Test it with these strings:

`/[^A-Za-z]/`

Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

No - the first requires all caps or no caps, the second lets you mix and match

`AbC`

Are /abc/i and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

Equivalent

Challenge: write a regex that matches a string that looks like a simple negated character class range, e.g., '[^a-z]'. (Your answer should match precisely six characters.) Test it with these strings:

`/\[\^[0-9A-Za-z]\-[0-9A-Za-z]\]/`