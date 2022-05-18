function acronym(string) {
  let result = string.split(/[- ]/)
                      .map( (word) => word[0])
                      .join('')
                      .toUpperCase();

  console.log(result);
  return result;
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"