Write a regex that matches any sequence of three characters delimited by whitespace characters. Test it with these strings:

`/\s...\s/`

Write a regex that matches any four digit hexadecimal number that is both preceded and followed by whitespace. Note that 0x1234 is not a hexadecimal number in this exercise: there is no space before the number 1234.

`\\s0x[\dA-F][\dA-F][\dA-F][\dA-F]\s\`

Write a regex that matches any sequence of three letters. Test it with these strings:

`\[a-z][a-z][a-z]\i`