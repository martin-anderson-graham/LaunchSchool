function countWordsInElementType(type) {
  let list = document.getElementsByTagName(type);

  let sum = [];

  for(let i = 0; i < list.length; i += 1) {
    sum.push(list[i].textContent.split(' ').length);
  }

  return sum;
}



// three way to access the div containg the table of contents
let TOCdiv = document.querySelector('.toc');
let liElements = TOCdiv.querySelectorAll('a');

let liArr = Array.prototype.slice.call(liElements);

liArr.forEach( (li, index) => {
  if(index % 2) {
    li.style.color = 'green';
  }
})

//Write some JavaScript code to retrieve the text of every thumbnail caption on the page

let captionDivs = document.querySelectorAll('.thumbcaption');

console.log(captionDivs);

let captionArr = Array.prototype.slice.call(captionDivs);

let classificationTableRows = document.querySelectorAll('.biota tbody tr');

console.log(classificationTableRows);

let targetKeys = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];

let tableRowArray = Array.prototype.slice.call(classificationTableRows);

let classificationObject = {};

console.log(tableRowArray[8].firstElementChild);
console.log(tableRowArray[8].lastElementChild);

tableRowArray.forEach( tr => {
  targetKeys.forEach( key => {
    let regEx = new RegExp(`${key}`, 'i')
    if(tr.firstElementChild.textContent.match(regEx)) {
      classificationObject[key] = tr.lastElementChild.textContent;
    }
  });
});

console.dir(classificationObject);


