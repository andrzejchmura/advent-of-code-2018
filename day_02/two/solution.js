const { getInput } = require("../../utils");

const input = getInput()
  .split("\n")
  .map(string => string.split(""));

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const difference = input[i].reduce((accumulator, current, index) => {
      return accumulator + (current === input[j][index] ? 0 : 1);
    }, 0);

    if (difference === 1) {
      const common = [];

      input[i].forEach((letter, index) => {
        if (letter === input[j][index]) {
          common.push(letter);
        }
      });

      console.log(common);
    }
  }
}
