/* eslint-disable max-lines-per-function */
const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
      'general-purpose programming language. It was designed and developed in the mid-1990s ' +
      'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
      'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
      'including functional, object-oriented, and imperative. It also has a dynamic type ' +
      'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
      'programming language. It has been standardized in the ECMAScript language ' +
      'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
      'technologies of World Wide Web content production; the majority of websites employ ' +
      'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
      'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
      'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
      'with a long history and a distinctive, fully parenthesized prefix notation. ' +
      'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
      'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
      'since its early days, and many dialects have existed over its history. Today, the best ' +
      'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];
function getPartialText(text) {
  let result = '';
  result += text.slice(0, 120);
  result += '...';
  return result;
}

function populateDocument() {
  let div = document.getElementById('content');

  function languageDiv({ name, description }, index) {
    let langDiv = document.createElement('div');
    let heading = document.createElement('h2');
    let para = document.createElement('p');
    let button = document.createElement('button');

    heading.textContent = name;
    para.textContent = getPartialText(description);
    button.textContent = 'Show more';
    button.classList.add('showMore');
    button.dataset.id = index;

    langDiv.appendChild(heading);
    langDiv.appendChild(para);
    langDiv.appendChild(button);

    div.appendChild(langDiv);
  }

  languages.forEach((lang, index) => languageDiv(lang, index));
}

function showPartialDescription(buttonEle) {
  let div = buttonEle.parentNode;
  let langIndex = buttonEle.dataset.id;
  div.querySelector('p').textContent = getPartialText(languages[langIndex].description);
}

function showFullDescription(buttonEle) {
  let div = buttonEle.parentNode;
  let langIndex = buttonEle.dataset.id;
  div.querySelector('p').textContent = languages[langIndex].description;
}

function processButtonClick(button) {
  if (button.classList.contains('showMore')) {
    button.classList.remove('showMore');
    button.classList.add('showLess');
    button.textContent = 'Show Less';
    showFullDescription(button);
  } else {
    button.classList.add('showMore');
    button.classList.remove('showLess');
    button.textContent = 'Show More';
    showPartialDescription(button);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateDocument();

  let buttons = document.querySelectorAll('button');
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      processButtonClick(button);
    });
  });
});