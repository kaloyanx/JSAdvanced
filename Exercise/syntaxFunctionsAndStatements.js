function fruit(type, weight, price) {
  console.log(
    `I need $${((price * weight) / 1000).toFixed(2)} to buy ${(
      weight / 1000
    ).toFixed(2)} kilograms ${type}.`
  );
}

function greatestCommonDivisor(a, b) {
  let GCD = a % b;
  while (GCD !== 0) {
    a = b;
    b = GCD;
    GCD = a % b;
  }
  console.log(b);
}

function sameNumbers(integer) {
  let arr = integer.toString().split("");
  let sum = 0;
  let answer = true;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    if (arr[0] !== arr[i]) answer = false;
  }
  console.log(answer);
  console.log(sum);
}

function previousDay(year, month, day) {
  let yesterday = new Date(year, month - 1, day - 1);
  console.log(`${year}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`);
}

function timeToWalk(steps, stride, speed) {
  let hours = 0,
    minutes = 0,
    seconds = 0;
  let distance = steps * stride;
  let breaktime = Math.floor(distance / 500);
  let timeWalking = (distance / speed) * 3.6 + breaktime;
  minutes = Math.floor(timeWalking / 60);
  seconds = Math.floor(timeWalking % 60);
  hours = Math.floor(timeWalking / 3600);
  hours < 10 ? (hours = `0${hours}`) : hours;
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  console.log(`${hours}:${minutes}:${seconds}`);
}

function roadRadar(speed, area) {
  let limit = 0;
  let status = "";
  switch (area) {
    case "motorway":
      limit = 130;
      break;
    case "interstate":
      limit = 90;
      break;
    case "city":
      limit = 50;
      break;
    case "residential":
      limit = 20;
      break;
  }
  if (speed <= limit) {
    return console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (speed - limit <= 20) {
    status = "speeding";
  } else if (speed - limit <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }
  console.log(
    `The speed is ${
      speed - limit
    } km/h faster than the allowed speed of ${limit} - ${status}`
  );
}

function cookingByNumbers(...arr) {
  let num = Number(arr.shift());
  for (el of arr) {
    switch (el) {
      case "chop":
        num /= 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num++;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num *= 0.8;
        console.log(num.toFixed(1));
        break;
    }
  }
}

function validityChecker(x1, y1, x2, y2) {
  Number.isInteger(Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2)))
    ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  Number.isInteger(Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2)))
    ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
    ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

function wordsUppercase(text) {
  return text
    .split(/[^a-zA-Z0-9]+/)
    .join(" ")
    .trim()
    .split(" ")
    .map((x) => x.toUpperCase())
    .join(", ");
}
