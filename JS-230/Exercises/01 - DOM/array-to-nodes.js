function arrayToNodes(arr, indentLevel = 0) {
  let indentString = ' '.repeat(indentLevel);
  if(arr[1].length === 0) {
    return `${indentString}<${arr[0].toLowerCase()}></${arr[0].toLowerCase()}>`;
  } else {
    let indentedResult = `${indentString}<${arr[0].toLowerCase()}>\n`;

    arr[1].forEach( subArr => {
      indentedResult += `${arrayToNodes(subArr, indentLevel + 2)}\n`;
    })

    indentedResult += `${indentString}</${arr[0].toLowerCase()}>`;

    return indentedResult;
  }
}


// Nested array of nodes
//const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [R
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

// Nested array of nodes
const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

console.log(arrayToNodes(nodes));