// *******************CH 9,10,11**********************
        // Question No 1
// const city = prompt("Enter City name:");
// if (city == "karachi"){
//     alert("Welcome to City Of Lights.");
// }
// else{
//     alert("Welcome to " + city);
// }

        // Question No 2
// const gender1 = prompt("Enter your Gender:");
// if (gender1 == "male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Ma'am");
// }

        // Question No 3
// const userColor = prompt("Enter traffic signal color:");
// if (userColor == "red"){
//          alert("Must stop");
// }
// else if (userColor == "yellow"){
//         alert("Ready to move");
// }
// else if (userColor == "green"){
//         alert("Move now");
// }
// else{
//         alert("This isn't a traffic signal color")
// }

        // Question No 4
// const fuel = +prompt("Enter remaining fuel in car(in litres)");
// if (fuel <= 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else{
//     document.write("No need of refill")
// }
/*
        // Question No 5
// **************A*************
var a = 4;
if (++a === 5){
        alert("given condition for variable a is true");
   }

// **************B*************
var b = 82;
if (b++ === 83){
        alert("given condition for variable b is true");
}   
// **************C*************
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// **************D*************
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// **************E*************
if (true){
   alert("True");
  }
if (false){
   alert("False");
   }
// **************F*************
if("car" < "cat"){
    alert("car is smaller than cat");
    }   
*/
        // Question No 6
// const sub1 = +prompt("Enter sub1 marks:");
// const sub2 = +prompt("Enter sub2 marks:");
// const sub3 = +prompt("Enter sub3 marks:");
// const totalMarks = +prompt("Enter total marks:");
// const obtainedMarks = sub1+sub2+sub3;
// const percentage = (obtainedMarks*100)/totalMarks;
// document.write("<h2>MARKS SHEET</h2>");
// document.write("<br>Total marks: " + totalMarks);
// document.write("<br>Marks obtained: " + obtainedMarks);
// document.write("<br>Percentage: " + percentage + "%");
// if (percentage >= 80){
//     document.write("<br>Grade: A1")
//     document.write("<br>Remarks: Excellent");
// }
// else if (percentage >= 70 && percentage <= 80){
//     document.write("<br>Grade: A")
//     document.write("<br>Remarks: Good");
// }
// else if (percentage >= 60 && percentage <= 70){
//     document.write("<br>Grade: B")
//     document.write("<br>Remarks: You need to improve");
// }
// else{
//     document.write("<br>Grade: Fail")
//     document.write("<br>Remarks: Sorry");
// }

        // Question No 7
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber);
// const userInput = +prompt("Guess the secret number:");
// if(userInput==secretNumber){
//         alert("Bingo! Correct answer");
// }
// else if (userInput + 1 === secretNumber){
//         alert("Close enough to the correct answer");
// }
// else{
//         alert("Wrong answer");
// }

        // Question No 8
// const num1 = +prompt("Enter the number to check if it is divisible by 3 or not");
// if((num1%3)==0){
//         alert(num1 + " is divisible by 3.")
// }
// else{
//         alert(num1 + " is not divisible by 3.")
// }

        // Question No 9
// const num1 = +prompt("Enter number to check whether it is even or odd");
// if((num1%2)==0){
//         alert(num1 + " is even");
// }
// else{
//         alert(num1 + " is odd");
// }

        // Question No 10
// const temperature = +prompt("Enter the temperature:");
// if(temperature>=40){
//         alert("It is too hot outside");
// }
// else if(temperature>=30 && temperature<=40){
//         alert("The Weather today is Normal");
// }
// else if(temperature>=20 && temperature<=30){
//         alert("Today's Weather is cool");
// }
// else{
//         alert("OMG! Today's weather is so Cool");
// }

        // Question No 11
// const num1 = +prompt("Enter first number:");
// const num2 = +prompt("Enter second number:");
// const oper = prompt("Enter operator:");
// if(oper == "+"){
//         alert("The addition of " + num1 + " and " +num2 + " is " + (num1+num2));
// }
// else if(oper == "-"){
//         alert("The subtraction of " + num1 + " and " +num2 + " is " + (num1-num2));
// }
// else if(oper == "*"){
//         alert("The multiplication of " + num1 + " and " +num2 + " is " + (num1*num2));
// }
// else if(oper == "/"){
//         alert("The division of " + num1 + " and " +num2 + " is " + (num1/num2));
// }
// else{
//         alert("Error! the operator is wrong")
// }