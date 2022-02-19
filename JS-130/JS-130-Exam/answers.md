```javascript
describe("toContain", () => {
  test("toContain with Arrays", () => {
    let a = [1, 2, 3];
    expect(a).toContain(3); //passes;
  });

  test("toContains with strings", () => {
    let str = "Hi there";
    expect(str).toContain("there"); //passes
  });
});
```