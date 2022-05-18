function formatDate(text) {
  let result = text.replace(/(\d{4})([\-\/])(\d{2})\2(\d{2})/, '$4.$3.$1');
  console.log(result);
  return result;
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)