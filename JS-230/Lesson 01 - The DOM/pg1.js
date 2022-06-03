function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function addClassToNode(node, className) {
  if(!node.classList.contains(className)) {
    node.classList.add(className);
  }
}

function getParagraphElements() {
  let result = [];

  function getParagraphs(node) {
    if(node.nodeName === 'P') {
      result.push(node);
    }
  }

  walk(document, getParagraphs);

  console.log(result);
  return result;
}


let paragraphs = document.querySelectorAll(".intro p");

for(let i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].classList.add('article-text')
}
