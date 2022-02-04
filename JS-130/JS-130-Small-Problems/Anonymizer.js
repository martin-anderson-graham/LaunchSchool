/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
// function makeAccount(email, password, firstName, lastName) {
//   return {
//     email,
//     password,
//     firstName,
//     lastName,
//   };
// }

let Account = (function () {


  function generateDisplayName() {
    let displayName = '';
    while (displayName.length < 16) {
      let rand = Math.floor(Math.random() * 123);
      while ((rand < 48) ||
        (rand > 57 && rand < 65) ||
        (rand > 90 && rand < 97) ||
        (rand > 122)) {
        rand = Math.floor(Math.random() * 123);
      }
      displayName += String.fromCharCode(rand);
    }
    return displayName;
  }

  return {
    init(email, password, firstName, lastName) {
      let create = (function (email, password, firstName, lastName) {
        let privateObj = {
          email,
          password,
          firstName,
          lastName,
        };

        function isValidPassword(pass) {
          return pass === privateObj.password;
        }
        return {
          firstName(pass) {
            if (isValidPassword(pass)) {
              return privateObj.firstName;
            } else {
              return "Invalid Password";
            }
          },
          lastName(pass) {
            if (isValidPassword(pass)) {
              return privateObj.lastName;
            } else {
              return "Invalid Password";
            }
          },
          email(pass) {
            if (isValidPassword(pass)) {
              return privateObj.email;
            } else {
              return "Invalid Password";
            }
          },
          resetPassword(pass, newPass) {
            if (isValidPassword(pass)) {
              privateObj.password = newPass;
              return true;
            } else {
              return "Invalid Password";
            }
          },
          reanonymize(pass) {
            if (isValidPassword(pass)) {
              this.displayName = generateDisplayName();
              return true;
            } else {
              return "Invalid Password";
            }
          },
        };
      })(email, password, firstName, lastName);
      Object.assign(this, create);
      return this;
    },
    displayName : generateDisplayName(),
  };
})();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true
// console.log(fooBar.firstName('abc'));              // logs 'foo'

// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));             // logs true
// console.log(displayName === fooBar.displayName);   // logs false

// console.log(fooBar.privateObj)

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'

console.log(bazQux.firstName('123456'));           // logs baz