let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

Object.keys(obj).forEach( key => {
  if (obj[key].type === 'fruit') {
    arr.push(obj[key].colors.map( val => val[0].toUpperCase() + val.slice(1)));
  } else if (obj[key].type === 'vegetable') {
    arr.push(obj[key].size.toUpperCase());
  }
});

console.log(arr);