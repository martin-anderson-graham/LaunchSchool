//Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

//Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

let extractRegion = (locale) => {
  return locale.slice(3,5);
};

let extractLanguage = (locale) => {
  return locale.slice(0,2);
};

let greet = (language) => {
  switch (language) {
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

let localGreet = (locale) => {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);

  switch (language) {
    case 'en':
      switch (region) {
        case 'US': return 'Hey!';
        case 'GB': return 'Hello!';
        case 'AU': return 'Howdy';
        default: return greet(language);
      }
    default: return greet(language);
  }
};

