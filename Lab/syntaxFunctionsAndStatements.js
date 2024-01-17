function echoFunction(input) { 
console.log(`${input.length}\n${input} `)
}
function stringLength(...strInArr) {
    let sum = 0;
    for ( const i in strInArr ) {
        sum += strInArr[i].length;
    }
    console.log(`${sum}\n${Math.floor(sum/(strInArr.length))}`);
}
function larestNumber(...numbers) {
    console.log(`The larest number is ${Math.max(...numbers)}`);
}

function circleArea(radius) {
    typeof radius === 'number' ? console.log((Math.PI*radius*radius).toFixed(2)) : console.log('We can not calculate the circle area, because we receive a string.');
}

function mathOperations(num1, num2, operation){
    switch (operation) {
        case '+': return console.log(num1 + num2);
        case '-': return console.log(num1 - num2);
        case '*': return console.log(num1 * num2);
        case '/': return console.log(num1 / num2);
        case '%': return console.log(num1 % num2);
        case '**': return console.log(Math.pow(num1, num2));
    }
}

function sumOfNumbers(n, m){
    let res = 0;
    for (let i = Number(n); i <=Number(m); i++) {
        res+= i;
    }
    console.log(res);
}

function dayOfWeek(day){
    switch (day) {
        case 'Monday': return console.log('1');
        case 'Tuesday': return console.log('2'); 
        case 'Wednesday': return console.log('3'); 
        case 'Thursday': return console.log('4'); 
        case 'Friday': return console.log('5'); 
        case 'Saturday': return console.log('6'); 
        case 'Sunday': return console.log('7'); 
        default: return console.log('error');
    }
}

function daysInMonth(month, year) {
    console.log(new Date(year, month, 0).getDate())
}

function squareOfStars(n = 5) {
    for (let i = 0; i < n; i++){
        let result = '';
        for (let j = 0; j < n; j++){
            result += '*';
        }
        console.log(result);
    }
}

function aggragateElements(elements){
    aggragate(elements, 0, (a, b) => a + b);
    aggragate(elements, 0, (a, b) => a + 1 / b);
    aggragate(elements, '', (a, b) => a + b);

    function aggragate(arr, initVal, func){
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}
aggragateElements([1,2,4])