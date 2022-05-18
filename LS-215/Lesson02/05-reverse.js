function reverse(string) {
  let result = string.split('').reverse().join('');
  console.log(result);
  return result;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"