function nodeSwap(id1, id2){
  let node1 = document.getElementById(String(id1));
  let node2 = document.getElementById(String(id2));

  if(!node1 || !node2) {
    console.log('Not valid nodes');
    return undefined;
  }
  if(nodesAreParentChild(node1, node2)) {
    console.log('pc'); 
    return undefined;
  }
  let nodeOneLocation = getNodeLocationObject(node1);
  let nodeTwoLocation = getNodeLocationObject(node2);

  moveNode(node1, nodeTwoLocation);
  moveNode(node2, nodeOneLocation);

  return true;
}

function moveNode(node, nodeLocationObject){
  if(nodeLocationObject.nextSibling){
    nodeLocationObject.parent.insertBefore(node, nodeLocationObject.nextSibling);
  } else{
    nodeLocationObject.parent.appendChild(node);
  }

}

function getNodeLocationObject(node){
  //returns an object with two properties
  // parent: the parent node
  // nextSibling: the next sibling of the node or null (if it is last)
  return {
    parent: node.parentNode,
    nextSibling: node.nextElementSibling
  }
}

function nodesAreParentChild(node1, node2){
  let currentNode = node2;
  while(currentNode.nodeName !== 'HTML') {
    if(currentNode === node1) return true;
    currentNode = currentNode.parentNode;
  }

  currentNode=node1;
  while(currentNode.nodeName!== 'HTML'){
    if(currentNode === node2) return true;
    currentNode = currentNode.parentNode;
  }

  return false;
}