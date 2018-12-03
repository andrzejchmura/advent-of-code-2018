const { getInput } = require("../../utils");

const input = getInput().split("\n");

const claims = new Map();
const overlaps = new Set();

input.forEach(line => {
  const raw = RegExp(/(\d+) @ (\d+),(\d+)\: (\d+)x(\d+)/).exec(line);

  const id = Number(raw[1]);
  const x = Number(raw[2]);
  const y = Number(raw[3]);
  const width = Number(raw[4]);
  const height = Number(raw[5]);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const key = `${x + i}x${y + j}`;

      if (claims.has(key)) {
        claims.set(key, [...claims.get(key), id]);

        if (claims.get(key).length > 1) {
          overlaps.add(key);
        }
      } else {
        claims.set(key, [id]);
      }
    }
  }
});

console.log(overlaps.size);
