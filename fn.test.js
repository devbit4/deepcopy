const deepCopy = require("./fn");

describe("deepCopy function", () => {
  test("Date형 테스트", () => {
    const original = new Date(20231217);

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("Map형 테스트", () => {
    const original = new Map([["string", { object: "object" }]]);

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("Set형 테스트", () => {
    const original = new Set(["string", 1]);

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("Array형 테스트", () => {
    const original = ["string", 1, undefined, null, Symbol("symbol")];

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("Object형 테스트", () => {
    const original = {
      a: "string",
      b: 1,
      c: undefined,
      d: null,
      e: new Date(20230101),
      f: Symbol("symbol"),
    };

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("nested Object형 테스트", () => {
    const original = {
      a: {
        string: "string",
        number: 1,
        date: new Date(20230101),
        symbol: Symbol("symbol"),
      },
    };

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });

  test("null형 테스트", () => {
    const original = null;

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });

  test("string형 테스트", () => {
    const original = "string";

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });

  test("Symbol형 테스트", () => {
    const original = Symbol("symbol");

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });

  test("WeakMap형 테스트", () => {
    const original = new WeakMap([[{ object: "object" }, "string"]]);

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });
});
