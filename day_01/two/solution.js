const { getInput } = require("../../utils");

const input = getInput()
  .split("\n")
  .map(Number);

const seen = new Map();
let frequency = 0;

while (true) {
  for (let i = 0; i < input.length; i++) {
    frequency += input[i];

    if (seen.has(frequency)) {
      console.log(frequency);
      return;
    } else {
      seen.set(frequency, true);
    }
  }
}
