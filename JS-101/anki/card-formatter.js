// eslint-disable

let output = ['',''];
let index = 0;
let fs = require('graceful-fs');
var logStream = fs.createWriteStream(`${__dirname}/to-add.txt`, {flags: 'a'});

let jsHeading = () => {
  output[index] += "<h3>JavaScript</h3>";
  return "<h3>JavaScript</h3>";
};

let bold = (str) => {
  return '<b>'+str+'</b>';
}

let type = (str) => {
  let result = '<span style="color:blue;">'
  result += str;
  result += '</span>';
  return result;
}

let code = (arr) => {
  let tempArr = ['<span style="font-family:monospace">'];
  for (let idx = 0; idx < arr.length; idx++) {
    tempArr.push(arr[idx]);
  }
  tempArr.push('</span>');
  let result = tempArr.join('');
  output[index] += result;
  return result;
}

let br = () => {
  output[index] += '<br>';
  return '<br>';
}

let normal = (str) => {
  output[index] += str;
  return str;
};

let vari = (str) => {
  let result = '';
  result += '<span style="color:blueviolet;">';
  result += str;
  result += '</span>';
  //output[index] += result;
  return result;
};

let func = (str) => {
 let result = '';
 result += '<span style="color:yellowgreen;">';
 result += str;
 result += '</span>';
 return result;
};

let bool = (str) => {
let result = '';
 result += '<span style="color:red;">';
 result += str;
 result += '</span>';
 return result;
};

let list = (arr) => {
  let result = '<ul>';
  arr.forEach( (str) => {
    result += ('<li>' + str + '</li>');
  });
  return result + '</ul>';
};

//question
jsHeading(); 
normal("What is a " +bold("higher-order-function")+"?");




index++;
//answer
normal("A functiont that takes a function as an argument.");c

//outputing to console and to-add.txt
logStream.write('\n');
logStream.write('\n');
console.log(output[0]);
logStream.write(output[0]);
logStream.write('\n');
logStream.write('\n');
console.log('\n');
console.log(output[1]);
logStream.write(output[1]);
logStream.write('\n');
logStream.write('\n');
logStream.end('=====================================')
