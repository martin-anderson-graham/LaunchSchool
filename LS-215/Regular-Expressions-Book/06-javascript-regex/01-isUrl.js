function isUrl(textString) {
  let result = textString.match(/^https?:\/\/\w+.\w+$/);
  console.log(!!result);
  return !!result;
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false