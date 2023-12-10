function deepCopy(origin) {
  // null, string, number, boolean, undefined...
  if (origin === null || typeof origin !== "object") {
    return origin;
  }

  //Date
  if (origin instanceof Date) {
    return new Date(origin.getTime());
  }

  //Array
  if (origin instanceof Array) {
    return origin.reduce((acc, cur) => {
      acc.push(deepCopy(cur));

      return acc;
    }, []);
  }

  //Object(Date,Array 제외)
  if (origin instanceof Object) {
    //Map
    if (origin instanceof Map) {
      const copyMap = new Map();

      for (const [key, value] of origin) {
        copyMap.set(deepCopy(key), deepCopy(value));
      }

      return copyMap;
    }

    //Set
    if (origin instanceof Set) {
      const copySet = new Set();

      for (const value of origin) {
        copySet.add(deepCopy(value));
      }

      return copySet;
    }

    return Object.keys(origin).reduce((acc, cur) => {
      acc[cur] = deepCopy(origin[cur]);

      return acc;
    }, {});
  }
}

module.exports = deepCopy;
