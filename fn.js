function deepCopy(origin) {
  const tag = toString.call(origin);

  switch (tag) {
    case "[object Date]":
      return new Date(origin.getTime());

    case "[object Array]":
      return origin.reduce((acc, cur) => {
        acc.push(deepCopy(cur));
        return acc;
      }, []);

    case "[object Map]":
      const newMap = new Map();
      for (const [key, value] of origin) {
        newMap.set(deepCopy(key), deepCopy(value));
      }
      return newMap;

    case "[object Set]":
      const newSet = new Set();
      for (const value of origin) {
        newSet.add(deepCopy(value));
      }
      return newSet;

    case "[object Object]":
      return Object.keys(origin).reduce((acc, cur) => {
        acc[cur] = deepCopy(origin[cur]);
        return acc;
      }, {});

    default:
      return origin;
  }
}

module.exports = deepCopy;
