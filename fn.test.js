const deepCopy = require("./fn");

describe("deepCopy function", () => {
  test("object copy", () => {
    const original = {
      a: 1,
      b: {
        c: "string",
        d: [true, 1, { aa: "bb" }],
        e: new Map([["aa", { bb: "bb" }]]),
      },
      date: new Date(),
      f: new Set(["aa", "bb"]),
      g: undefined,
      h: null,
    };

    const copy = deepCopy(original);

    expect(copy).not.toBe(original);

    expect(copy).toEqual(original);
  });
});
