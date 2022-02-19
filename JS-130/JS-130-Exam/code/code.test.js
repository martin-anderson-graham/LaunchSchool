const Cipher = require('./cipher');

describe('encode', () => {
  test('encode a', () => {
    expect(Cipher.encode('a')).toEqual('n');
  });

  test('encode n', () => {
    expect(Cipher.encode('n')).toEqual('a');
  });

  test('encode m', () => {
    expect(Cipher.encode('m')).toEqual('z');
  });

  test('encode z', () => {
    expect(Cipher.encode('z')).toEqual('m')
  });

  test('encode Z', () => {
    expect(Cipher.encode('Z')).toEqual('M');
  });

  test('encode multiple letters', () => {
    expect(Cipher.encode('O M G')).toEqual('B Z T');
  });

  test('encode numbers', () => {
    expect(Cipher.encode('Testing 1 2 3 testing'))
      .toEqual('Grfgvat 1 2 3 grfgvat');
    });

  test('encode punctuations', () => {
    expect(Cipher.encode("Let's eat, Grandma!"))
      .toEqual("Yrg'f rng, Tenaqzn!");
  });

  test('encode all letters', () => {
    expect(Cipher.encode("The quick brown fox jumps over the lazy dog."))
      .toEqual("Gur dhvpx oebja sbk whzcf bire gur ynml qbt.");
  });
});