function walk(node, callback) {
  callback(node);

  for(let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function count(fromNode) {
  let count = 0;

  function walkingCounter(node) {
    count += 1;
  }

  walk(fromNode, walkingCounter);

  return count;
}

function childNodes(id) {
  let node = document.getElementById(String(id));

  let directChildNodes = node.childNodes.length;

  let indirectChildNodes = 0;
  Array.prototype.slice.call(node.childNodes).forEach( child => {
    let sum = 0;

    Array.prototype.slice.call(child.childNodes).forEach ( grandchild => {
      sum += count(grandchild);
    })

    indirectChildNodes += sum;
  })

  return [directChildNodes, indirectChildNodes];
}

console.log(childNodes(10));