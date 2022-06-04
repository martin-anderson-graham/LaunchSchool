function domTreeTracer(nodeId) {
  let result = [];

  let currentNode = document.getElementById(nodeId);

  result.push(getSiblingArray(currentNode));

  while(currentNode.id !== '1') {
    currentNode = currentNode.parentNode;
    result.push(getSiblingArray(currentNode));
  }
  

  return result;
}

function getSiblingArray(node) {
  return Array.prototype.slice.call(node.parentNode.children)
          .map(n => n.nodeName);
}


let tests = [
  domTreeTracer(1),
  // [["ARTICLE"]]
  domTreeTracer(2),
  // [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
  domTreeTracer(22)
  // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
]

tests.forEach(test => console.log(test));