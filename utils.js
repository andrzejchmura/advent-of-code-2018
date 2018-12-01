const fs = require("fs");

const getInput = () => fs.readFileSync("input.txt", "utf8").trim();

module.exports = { getInput };
