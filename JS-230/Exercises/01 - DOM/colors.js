function colorGeneration(indentationLevel) {
  if(indentationLevel < 1) return undefined;

  function colorIfMatched(node, level){
    if(level === indentationLevel + 2){
      node.classList.add('generation-color');
    }
  }

  walk(document, colorIfMatched, 0);
}

function walk(node, callback, indentationLevel) {
  callback(node, indentationLevel);
  for(let i = 0; i < node.children.length; i += 1){
    walk(node.children[i], callback, indentationLevel + 1);
  }
}

