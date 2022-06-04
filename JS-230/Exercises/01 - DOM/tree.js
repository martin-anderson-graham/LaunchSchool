function sliceTree(startID, endID) {
  let result = [];

  let startNode = document.getElementById(String(startID));
  let endNode = document.getElementById(String(endID));

  if(!startNode || !endNode) return undefined;
  if(!bodyIsAncestor(startNode)) return undefined;
  if(!startNodeIsAncestorEndNode(startNode, endNode)) return undefined;

  let currentNode = endNode;

  while(currentNode !== startNode.parentNode) {
    result.unshift(currentNode.nodeName);
    currentNode = currentNode.parentNode;
  }



  return result;
}

function bodyIsAncestor(node) {
  let currentNode = node;
  while(currentNode.nodeName !== 'HTML') {
    if(currentNode.nodeName === 'BODY') return true;
    currentNode = currentNode.parentNode;
  }

  return false;
}

function startNodeIsAncestorEndNode(startNode, endNode) {
  let currentNode = endNode;
  while(currentNode.nodeName !== 'HTML') {
    if(currentNode === startNode) return true;
    currentNode = currentNode.parentNode;
  }
  return false;
}


let tests = [
  sliceTree(1, 4),
  // ["ARTICLE", "HEADER", "SPAN", "A"]
  sliceTree(1, 76),
  // undefined
  sliceTree(2, 5),
  // undefined
  sliceTree(5, 4),
  // undefined
  sliceTree(1, 23),
  // ["ARTICLE", "FOOTER"]
  sliceTree(1, 22),
  // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
  sliceTree(11, 19),
  // ["SECTION", "P", "SPAN", "STRONG", "A"]
];

tests.forEach(test => console.log(test));