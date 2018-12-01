const { getInput } = require("../../utils");

const input = getInput()
  .split("\n")
  .map(Number);

const result = input.reduce((accumulator, current) => accumulator + current, 0);

console.log(result);
