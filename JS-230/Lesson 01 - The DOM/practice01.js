function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

//Starting with the document node, use the lastChild and childNodes properties to change the text color to red on the On the River heading and set its font size 48 pixels.

let html = document.childNodes[1]; // skip doctype
let body = html.lastChild;         // skip head and text nodes
let heading = body.childNodes[1];  // skip text node
heading.style.color = 'red';
heading.style.fontSize = '48px';

function countParagraphs() {
  let count = 0;

  function countIfParagraph(node) {
    if(node.nodeName === 'P') count += 1;
  }

  walk(document, countIfParagraph);

  console.log(count);
}

function getFirstWords() {
  let result = [];

  function extractFirstParagraphWord(node) {
    if(node.nodeName === 'P') {
      result.push(node.firstChild.nodeValue.match(/\s*(\w*)\s/)[1]);
    }
  }

  walk(document, extractFirstParagraphWord);

  console.log(result);
}

function addStanzaExceptFirst() {
  let shouldAdd = false;

  function addStanza(node) {
    if(node.nodeName === 'P') {
      if(shouldAdd) {
        node.classList.add('stanza');
      } else {
        shouldAdd = true;
      }
    } 
  }

  walk(document, addStanza);
}

function countImages() {
  let imageCount = 0;
  let PNGCount = 0;

  function imagePNGCount(node) {
    if(node.nodeName === 'IMG') {
      imageCount += 1;

      let imageURL = node.getAttribute('src');
        

      if(imageURL.match(/^.*\.png$/i)) {
        PNGCount += 1;
      }
    }
  }

  walk(document, imagePNGCount);

  console.log(`Image count is ${imageCount}`);
  console.log(`PNG count is ${PNGCount}`);
}

function changeLinksRed() {
  function changeLinkRed(node) {
    if(node.nodeName === 'A') {
      node.style.color = 'red'
    }
  }

  walk(document, changeLinkRed);
}

changeLinksRed();