//We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let newPass = passcode.join('-');

console.log(newPass);