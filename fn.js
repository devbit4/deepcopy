function deepCopy(origin) {
  const typeArr = [
    {
      type: Date,
      fn: () => {
        return new Date(origin.getTime());
      },
    },
    {
      type: Array,
      fn: () => {
        return origin.reduce((acc, cur) => {
          acc.push(deepCopy(cur));
          return acc;
        }, []);
      },
    },
    {
      type: Map,
      fn: () => {
        const copyMap = new Map();
        for (const [key, value] of origin) {
          copyMap.set(deepCopy(key), deepCopy(value));
        }
        return copyMap;
      },
    },
    {
      type: Set,
      fn: () => {
        const copySet = new Set();
        for (const value of origin) {
          copySet.add(deepCopy(value));
        }
        return copySet;
      },
    },
    {
      type: WeakMap,
      fn: () => {
        return origin;
      },
    },
    {
      type: Object,
      fn: () => {
        return Object.keys(origin).reduce((acc, cur) => {
          acc[cur] = deepCopy(origin[cur]);
          return acc;
        }, {});
      },
    },
  ];

  for (let { type, fn } of typeArr) {
    if (origin instanceof type) return fn();
  }
  return origin;
}

module.exports = deepCopy;
