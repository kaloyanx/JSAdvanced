function evenPositionElement(arr) {
  let answer = "";
  for (let i = 0; i < arr.length; i += 2) {
    answer += arr[i];
    answer += " ";
  }
  console.log(answer.trim());
}

function lastKNumberSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = arr.length - 1; j >= arr.length - k; j--) {
      console.log(j);
      if (typeof arr[j] == "number") {
        sum += arr[j];
      }
    }
    arr.push(sum);
  }
  console.log(arr);
}

function sumFirstLast(arr) {
  return Number(arr.shift()) + Number(arr.pop());
}

function negativePositiveNumbers(arr) {
  let res = [];
  for (el of arr) {
    if (el < 0) {
      res.unshift(el);
    } else {
      res.push(el);
    }
  }
  console.log(res.join("\n"));
}

function smallestTwoNumbers(arr) {
  let res = arr.sort((a, b) => a - b);
  console.log(res.slice(0, 2).join(" "));
}

function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted.slice(Math.floor(sorted.length / 2), sorted.length));
}

function pieceOfPie(arr, target, target1) {
  console.log(arr.slice(arr.indexOf(target), arr.indexOf(target1) + 1));
}

function processOddPosition(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      res.push(arr[i]);
    }
  }
  console.log(
    res
      .reverse()
      .map((a) => a * 2)
      .join(" ")
      .trim()
  );
}

function biggestElement(arr) {
  let res = [];
  for (let el of arr) {
    el.sort((a, b) => b - a);
    res.push(el[0]);
  }
  console.log(res.sort((a, b) => b - a).shift());
}

function diagonalSums(arr) {
  let sumFirstDiag = 0;
  let sumSecondDiag = 0;
  let firstIndex = 0;
  let secondIndex = arr[0].length - 1;
  arr.forEach((array) => {
    sumFirstDiag += array[firstIndex++];
    sumSecondDiag += array[secondIndex--];
  });
  console.log(sumFirstDiag + " " + sumSecondDiag);
}

function equalNeighbors(arr) {
  let counter = 0;
  for (let row = 0; row <= arr.length - 2; row++) {
    let current = arr[row];
    let next = arr[row + 1];
    for (let i = 0; i < current.length; i++) {
      if (current[i] === next[i]) {
        counter += 1;
      }
    }
  }
  console.log(counter);
}
