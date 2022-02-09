const { SimpleLinkedList, Element } = require('./simple-linked-list.js');

describe("Simple Linked List", () => {
  test("element datum", () => {
    let element = new Element(1);
    expect(element.datum()).toBe(1);
  });

  test("element tail", () => {
    let element = new Element(1);
    expect(element.isTail()).toBe(true);
  });

  test("element next default", () => {
    let element = new Element(1);
    expect(element.next()).toBe(null);
  });

  test("element next initialization", () => {
    let element1 = new Element(1);
    let element2 = new Element(2, element1);
    expect(element2.next()).toEqual(element1);
  });

  test("empty list size", () => {
    let list = new SimpleLinkedList();
    expect(list.size()).toBe(0);
  });

  test("empty list empty", () => {
    let list = new SimpleLinkedList();
    expect(list.isEmpty()).toBe(true);
  });

  test("pushing element on list", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
  });

  test("empty list 1 element", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.isEmpty()).toBe(false);
  });

  test("peeking at list", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
    expect(list.peek()).toBe(1);
  });

  test("peeking at empty list", () => {
    let list = new SimpleLinkedList();
    expect(list.peek()).toBe(null);
  });

  test("access head element", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    let head = list.head();
    expect(head instanceof Element).toBe(true);
    expect(head.datum()).toBe(1);
    expect(head.isTail()).toBe(true);
  });

  test("items are stacked", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    list.push(2);

    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(2);
    expect(list.head().next().datum()).toBe(1);
  });

  test("push 10 items", () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(10);
  });

  test("pop one item", () => {
    let list = new SimpleLinkedList();
    list.push(1);

    expect(list.pop()).toBe(1);
    expect(list.size()).toBe(0);
  });

  test("popping frenzy", () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    for (let count = 1; count <= 6; count++) {
      list.pop();
    }

    expect(list.size()).toBe(4);
    expect(list.peek()).toBe(4);
  });

  test("from a: empty array", () => {
    let list = SimpleLinkedList.fromArray([]);

    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test("from a: null", () => {
    let list = SimpleLinkedList.fromArray(null);
    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test("from a: 2 element array", () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(1);
    expect(list.head().next().datum()).toBe(2);
  });

  test("from a: 10 item array", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(arr);
    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(1);
    expect(list.head().next().next().next().next()
      .next().next().next().next().next().datum()).toBe(10);
  });

  test("to a: empty list", () => {
    let list = new SimpleLinkedList();
    expect(list.toArray()).toEqual([]);
  });

  test("to a: of 1 element list ", () => {
    let list = SimpleLinkedList.fromArray([1]).toArray();
    expect(list).toEqual([1]);
  });

  test("to a: of a 2 element list", () => {
    let list = SimpleLinkedList.fromArray([1, 2]).toArray();
    expect(list).toEqual([1, 2]);
  });

  test("reverse 2 element list", () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    // reversedList and list need not be the same object
    let reversedList = list.reverse();

    expect(reversedList.peek()).toBe(2);
    expect(reversedList.head().next().datum()).toBe(1);
    expect(reversedList.head().next().isTail()).toBe(true);
  });

  test("reverse 10 element list", () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data);
    expect(data.reverse()).toEqual(list.reverse().toArray());
  });

  test("roundtrip 10 element array", () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data).toArray();
    expect(list).toEqual(data);
  });
});