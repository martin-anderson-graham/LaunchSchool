let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeAllWords(str) {
  return str.split(' ').map( word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
};

function removeDots(str) {
  return str.split('').filter( ele => {
    return ele !== '.';
  }).join('');
}

function processBands(data) {
  let bands = data.map( band => {
    let parsed = JSON.stringify(band);
    return JSON.parse(parsed);
  });

  bands.forEach( (band) => {
    if(band.country) band.country = "Canada";

    band.name = capitalizeAllWords(band.name);
    band.name = removeDots(band.name);
  })

  return bands;
}

let result = processBands(bands);

result.forEach(ele => console.log(ele));

/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/