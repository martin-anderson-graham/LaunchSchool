/* eslint-disable max-lines-per-function */
let minilang = (str) => {
  let stack = [];
  let register = 0;
  let stackCommands = str.split(' ');
  let result = 0;
  for (let idx = 0; idx < stackCommands.length; idx++) {
    let currentCommand = stackCommands[idx];
    if (Number(Number(currentCommand))) {
      register = Number(currentCommand);
      continue;
    } else if (currentCommand === 'PUSH') {
      stack.push(register);
      continue;
    } else if (currentCommand === 'ADD') {
      register += stack.pop();
      continue;
    } else if (currentCommand === 'SUB') {
      register -= stack.pop();
      continue;
    } else if (currentCommand === 'MULT') {
      register *= stack.pop();
      continue;
    } else if (currentCommand === 'DIV') {
      register = parseInt(register / stack.pop(), 10);
      continue;
    } else if (currentCommand === 'REMAINDER') {
      register %= stack.pop();
      continue;
    } else if (currentCommand === 'POP') {
      register = stack.pop();
      continue;
    } else if (currentCommand === 'PRINT') {
      console.log(register);
      continue;
    }
  }
  return result;
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)