function nodesToArr(){
  function buildArr(node) {
    let result = [node.tagName];
    if(node.children.length === 0) {
      result.push([]);
    } else {
      let childrenArr = [];
      for(let i = 0; i < node.children.length; i += 1) {
        childrenArr.push(buildArr(node.children[i]));
      }
      result.push(childrenArr);  
    }
    return result;
  }

  return buildArr(document.body);
  
}
