/* eslint-disable */

function createBook(title, author, read = false) {
  return {
    //author: author,
    title,
    //title: title,
    author,
    read,

    getDescription(){
      let result = `${this.title} was written by ${this.author}.`;
      if (this.read) {
        result += ' I have read it.';
      } else {
        result += " I haven't read it.";
      }
      return result;
    },

    readBook() {
      this.read = true;
    },

  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentleman", 'PG Wodehouse');

book3.readBook();
console.log(book1.getDescription());
console.log(book3.getDescription());