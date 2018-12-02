const { getInput } = require("../../utils");

const input = getInput()
  .split("\n")
  .map(string => string.split(""));

const seen = {
  two: 0,
  three: 0
};

input.forEach(row => {
  const map = new Map();

  row.forEach(letter => {
    if (map.has(letter)) {
      const count = map.get(letter);
      map.set(letter, count + 1);
    } else {
      map.set(letter, 1);
    }
  });

  const values = [...map.values()];

  if (values.includes(2)) {
    seen.two++;
  }
  if (values.includes(3)) {
    seen.three++;
  }
});

const result = seen.two * seen.three;

console.log(result);
