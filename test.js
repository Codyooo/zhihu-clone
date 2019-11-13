const a = [1, 2, [3, 4]];

const flatten = arr =>
  arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );

flatten(a);
