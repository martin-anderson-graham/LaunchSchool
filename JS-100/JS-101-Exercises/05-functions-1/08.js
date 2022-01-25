//Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

let greet = (str) => {
  switch (str) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Ola!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai';
      break;
    default:
      return 'Sorry I do not know that language.';
  }
};

let codes = ['en', 'fr', 'pt', 'de', 'sv', 'af'];

for ( let str of codes){
  console.log(greet(str));
}