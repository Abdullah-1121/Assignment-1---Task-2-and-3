console.log('Assignment1 : Task 2');
// Scenario 1: Sum numbers
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(34, 54));
//Scenario 2: Check Even or Odd
function checkEvenOrOdd(number3) {
    if (number3 % 2 == 0) {
        return `${number3} is even`;
    }
    else if (number3 % 2 != 0) {
        return `${number3} is odd`;
    }
    else {
        return 'Invalid Input';
    }
}
console.log(checkEvenOrOdd(7));
function calculateArea(length, width) {
    let sol = length * width;
    return `Area of Rectangle = ${sol}`;
}
console.log(calculateArea(34, 56));
// Scenario 3 
// Reversing string
function reverseString(str3) {
    // to reverse it we have to convert it into array first for this we use split() method
    let Arrstr = str3.split('');
    // now reversing the array
    let RevArr = Arrstr.reverse();
    // this returns reverse order of a array now we have to convert this array into string using join() method
    let Revstr = RevArr.join('');
    console.log(Revstr);
}
reverseString('gnirts a gnisrever');
// Scenario : converting celsius to fahrenheit
function convertCelsiusToFahrenheit(temprature) {
    let fahrenheitTemp;
    if (temprature > 0) {
        fahrenheitTemp = (temprature * 9 / 5) + 32;
        console.log(fahrenheitTemp);
    }
    else {
        console.log('invalid Input');
    }
}
convertCelsiusToFahrenheit(3455);
// TASK 3
// Modifying Arrays
//push: Add new elements to the end of the array.
let array = ['C++', 'Java', 'Python', 'Javascript', 'Ruby'];
console.log(array);
// using push() method
array.push('typescript'); // it will adds the 'typescript' at the end of this array.
console.log(array);
//Using pop: Remove the last element from the array.
array.pop();
console.log(array);
// using shift: Remove the first element from the array.
array.shift(); // it will remove first element of array
console.log(array);
// Using unshift : Add new elements at the begining of array
array.unshift('C#');
console.log(array);
//- **Scenario 2 - Subarray Creation:**
// - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
//     -splice`**: Create a subarray by removing elements from the original array.
//     - **`slice`**: Create a subarray without modifying the original array.
array.splice(2, 1); // it means it will remove 1 element which is on index 2 (python)
console.log(array);
let newarr = array.slice();
console.log(newarr);
export {};
