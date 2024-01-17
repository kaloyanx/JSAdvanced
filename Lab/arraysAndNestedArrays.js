function evenPositionElement(arr) {
let answer = '';
    for (let i = 0; i < arr.length; i+=2) {
        answer += arr[i];
        answer += ' ';
}
console.log(answer.trim());
}

function lastKNumberSequence(n, k) {
let arr = [1];
for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = arr.length - 1; j >= arr.length - k; j--) {
        console.log(j);
       if (typeof arr[j] == 'number')
       {
        sum += arr[j]
        };
}
arr.push(sum);
}
console.log(arr);
}
lastKNumberSequence(8, 2); 
