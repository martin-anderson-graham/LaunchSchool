describe("beforeEach example", () => {
  let myArr;
  //must be declared here to be in lexical scope of the tests
  beforeEach( () => {
    myArr = [1, 2, 3];
  });

  test("test1", () => {
    expect(myArr.length).toBe(3); //pass
  });

  test("test2", () => {
    expect(myArr).not.toContain(5); //pass
  });
});