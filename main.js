'use strict'

// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
//NUMBER 1: Display Current Date
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
//Display Current Time
// console.logCopy = console.log.bind(console);

// console.log = function(data)
// {
//   var timestamp = '[' + Date.now() + ']';
//   this.logCopy(timestamp, data);
// };

// console.log(new Time)

// const displayTime = () => {
//   const currentTime = getTime()

//   document.getElementById("display-element").innerHTML = currentTime
// }


// Write a JavaScript program to convert a number to a string.
//NUMBER 2
// const MyInt1 = 7;
// String MyString1 = Interger.toString(MyInt1);

// console.log(MyString1);


// Write a JavaScript program to convert a string to the number.
//NUMBER 3
console.log("input:", someString){
console.log("type of input: ", typeof someString)
const number = '22714'

console.log(parseInt(number, 10) + 1);

console.log("type of converted:", typeof num);
console.log("converted:", num);
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
//NUMBER 5
//I tested in Repl.it and the sum came back correct, 33
function sumOfTwoNumbers(a, b){
  const sum = a + b;

  return sum
}

sumOfTwoNumbers(10, 23)


// Write a JavaScript program that runs only when 2 things are true.
//NUMBER 6
//In the Conditionals prework video, I didn't understand why he changed his inputs to  if (inputX && inputY); Why did he have to do that in order for the function to work?
const input1 = 200 //truthy
const input2 = 10 //truthy

const myFunc = (input1, input) => {
  if (input1 && input2){
    return true
  } else {
    return false
    }
  }

  myFunc(input1, input2)

// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
