let randomUUIDChar = () => {
  const UUIDchars = 'abcdef0123456789';
  let index = parseInt(Math.random() * UUIDchars.length, 10);
  return UUIDchars[index];
};

let generateUUID = () => {
  let pattern =   [8, 4, 4, 4, 12];
  let result = [];
  pattern.forEach( (val, idx) => {
    result[idx] = '';
    for (let count = 0; count < val; count++) {
      result[idx] += randomUUIDChar();
    }
  });

  console.log(result.join('-'));
  return result.join('-');
};

generateUUID();