function printAnArrayWithDelimiter(arr, delimiter) {
  console.log(arr.join(delimiter));
}

function printEveryNthElement(arr, n) {
  let res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr[i]);
  }
  return res;
}

function addAndRemoveElements(arr) {
  let res = [],
    n = 1;
  for (el of arr) {
    if (el === "add") {
      res.push(n);
    } else {
      res.pop();
    }
    n++;
  }
  res[0] !== undefined ? console.log(res.join("\n")) : console.log("Empty");
}

function rotateArray(arr, n) {
  let counter = 0,
    res = arr;
  while (counter < n) {
    let temp = res.pop();
    res.unshift(temp);
    counter++;
  }
  console.log(arr.join(" "));
}

function extractIncreasingSubsetFromArray(arr) {
  let res = [];
  arr.reduce((acc, el) => {
    if (acc <= el) {
      res.push(el);
      return el;
    } else {
      return acc;
    }
  }, Number.MIN_SAFE_INTEGER);
  return res;
}

function listOfNames(arr) {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

function sortingNumbers(arr) {
  let res = [],
    counter = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < counter; ) {
    res.push(arr.shift());
    i++;
    if (i >= counter) break;
    res.push(arr.pop());
    i++;
  }
  return res;
}

function sortAnArrayByTwoCriteria(arr) {
  return arr
    .sort((a, b) =>
      a.length - b.length == 0 ? a.localeCompare(b) : a.length - b.length
    )
    .join("\n");
}

function magicMatrices(arr) {
  let bench = arr[0].reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (current !== bench) {
      return false;
    }
    current = 0;
    for (el of arr) {
      current += el[i];
    }
    if (current !== bench) {
      return false;
    }
  }
  return true;
}

function tikTacToe(arr) {
  function checker(check) {
    if (
      check[0][0] == check[1][1] &&
      check[0][0] == check[2][2] &&
      check[0][0] !== false
    ) {
      return true;
    }
    if (
      check[0][2] == check[1][1] &&
      check[0][2] == check[2][0] &&
      check[0][2] !== false
    ) {
      return true;
    }
    for (let i = 0; i < 3; i++) {
      if (
        check[i][0] == check[i][1] &&
        check[i][0] == check[i][2] &&
        check[i][0] !== false
      ) {
        return true;
      }
      if (
        check[0][i] == check[1][i] &&
        check[0][i] == check[2][i] &&
        check[0][i] !== false
      ) {
        return true;
      }
    }
    return;
  }

  let board = [
    [false, false, false],

    [false, false, false],

    [false, false, false],
  ];
  let turn = "X",
    k = 0;
  for (instruction of arr) {
    k % 2 === 0 ? (turn = "X") : (turn = "O");
    let [x, y] = instruction.split(" ");
    if (board[x][y] !== false) {
      console.log("This place is already taken. Please choose another!");
      console.log(x + y);
      continue;
    } else {
      board[x][y] = turn;
      k++;
    }
    if (checker(board)) {
      return (
        console.log(`Player ${turn} wins!`),
        board.forEach((row) => console.log(row.join("\t")))
      );
    }
    if (k == 9) {
      return (
        console.log("The game ended! Nobody wins :("),
        board.forEach((row) => console.log(row.join("\t")))
      );
    }
  }
  console.log("The game ended! Nobody wins :(");
  board.forEach((row) => console.log(row.join("\t")));
}

function diagonalAttack(arr) {
  let matrix = [];
  arr.forEach((x) => matrix.push(x.split(" ").map(Number)));
  let mainDiag = 0,
    secondDiag = 0,
    firstIndex = 0,
    secondIndex = matrix[0].length - 1,
    copyOfMain = [],
    copyOfSecond = [];
  matrix.forEach((row) => {
    mainDiag += row[firstIndex];
    copyOfMain.push(row[firstIndex++]);
    secondDiag += row[secondIndex];
    copyOfSecond.push(row[secondIndex--]);
  });
  if (mainDiag !== secondDiag) {
    matrix.forEach((x) => console.log(x.join(" ")));
  } else {
    matrix.forEach((x) => x.fill(mainDiag));
    firstIndex = 0;
    secondIndex = matrix[0].length - 1;
    matrix.forEach((row) => {
      row[firstIndex] = copyOfMain[firstIndex];
      row[secondIndex--] = copyOfSecond[firstIndex++];
    });
    matrix.forEach((x) => console.log(x.join(" ")));
  }
}
