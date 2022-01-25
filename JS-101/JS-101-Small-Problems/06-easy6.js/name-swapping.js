let swapName = (str) => {
  let otherNames = str.split(' ');
  let lastName = otherNames.pop();
  let result = [lastName, otherNames.join(' ')].join(', ');
  console.log(result);
  return result;
};

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"