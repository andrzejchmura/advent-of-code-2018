const { getInput } = require("../../utils");

const input = getInput().split("\n");

let currentGuard;
let sleptAt;

const guards = new Map();

input.forEach(line => {
  const activityMatch = RegExp(/.+ \d+\:(\d+)\] (.+)/).exec(line);
  const guardMatch = RegExp(/Guard \#(\d+)/).exec(line);

  const minute = Number(activityMatch[1]);
  const action = activityMatch[2];

  if (guardMatch) {
    currentGuard = Number(guardMatch[1]);

    if (!guards.has(currentGuard)) {
      guards.set(currentGuard, {
        minutes: {},
        minutesAsleep: 0
      });
    }
  } else {
    if (RegExp(/falls asleep/).test(action)) {
      sleptAt = minute;
    } else {
      const duration = minute - sleptAt;
      const current = guards.get(currentGuard);

      guards.set(currentGuard, {
        minutes: current.minutes,
        minutesAsleep: current.minutesAsleep + duration
      });
    }
  }

  console.log(guards);
});
