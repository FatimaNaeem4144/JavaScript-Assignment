// *******************CH 35...38**********************
         // Question No 1
// function todayDate(){
//     var now = new Date();
//     document.write(now);

// }
// todayDate();

         // Question No 2
// function name(){
//     var firstName = prompt("Enter first name");
//     var lastName = prompt("Enter last name");
//     alert("Welcome "+ firstName + " " + lastName);
// }
// name();

         // Question No 3
// function sum(){
//     var firstNo = +prompt("Enter first number");
//     var secondNo = +prompt("Enter second number");
//     alert("The sum of " + firstNo +" and "+ secondNo+ " is " +(firstNo+secondNo));
// }
// sum();

         // Question No 4
// function calculator(){
//     var firstNo = +prompt("Enter first number");
//     var secondNo = +prompt("Enter second number");
//     var operator = prompt("Enter desired operator");
//     if(operator == '+'){
//         alert(firstNo+secondNo);
//     }
//     if(operator == '-'){
//         alert(firstNo-secondNo);
//     }
//     if(operator == '*'){
//         alert(firstNo*secondNo);
//     }
//     if(operator == '/'){
//         alert(firstNo/secondNo);
//     }
// }
// calculator();

         // Question No 5
// function squared(){
//     var firstNo = +prompt("Enter number you want to get square");
//     alert("The square of " + firstNo +" is " +(firstNo*firstNo));
// }
// squared();

         // Question No 6
// function factorial(num){
//     if(num===0){
//         return 1;
//     }
//     else{
//         return num*factorial(num-1);
//     }
// }9
// var number = +prompt("Enter factorial number:");
// var result = factorial(number);
// document.write("The factorial of " + number +" is " + result);

         // Question No 7
// function counting(start,end){
//     var numbers = [];
//     for(var i=start;i<=end;i++){
//         numbers.push(i);
//     }
//     return numbers;
// }
// var start = +prompt("Enter first input:");
// var end = +prompt("Enter last input:");
// var result = counting(start,end);
// document.write(result);

         // Question No 8
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }

//   var baseSquare = calculateSquare(base);
//   var perpendicularSquare = calculateSquare(perpendicular);
//   var hypotenuseSquare = baseSquare + perpendicularSquare;
//   var hypotenuse = Math.sqrt(hypotenuseSquare);

//   return hypotenuse.toFixed(3);
// }
// var base = +prompt("Enter base");
// var perpendicular = +prompt("Enter perpendicular");
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// alert(hypotenuse);


         // Question No 9
// function area(width, height){
//     var area = width * height;
//   return area;
// }
// // arguments as values
// var width = 10;
// var height = 18;
// var result = area(width, height);
// document.write("Area by arguments as values: " + result);

// arguments as variables
// function area(){
//   var width = arguments[0];
//   var height = arguments[1];
//   var area = width * height;
//   return area;
// }
// var width = 10;
// var height = 18;
// var result = area(width, height);
// document.write("Area by arguments as variables: " + result);

         // Question No 10
// function isPalindrome(str) {
//   var cleanStr = "";
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
    
//     if (/[a-z0-9]/.test(char)) {
//       cleanStr += char;
//     }
//   }
  
//   var reversedStr = cleanStr.split("").reverse().join("");
//   return cleanStr === reversedStr;
// }
// var inputString = prompt("Enter word to check if it's a palindrome:");
// var result = isPalindrome(inputString);
// alert(result);

         // Question No 11
// function convert(string){
//   var words= string.split(" ");
//   for (var i = 0; i < words.length; i++) {
//   var firstLetter = words[i].charAt(0).toUpperCase();
//   var capitalizedWord = firstLetter + words[i].substring(1);
//   words[i] = capitalizedWord;
//   }
//   var result = words.join(" ");
//   return result;
// }
// var inputString = prompt("Enter string:");
// var output = convert(inputString);
// alert(output);

         // Question No 12
// function findLongestWord() {
//   var str = prompt("Enter a string:");
//   var words = str.split(" ");
//   var longestWord = "";

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// var longestWord = findLongestWord();
// alert(longestWord);

         // Question No 13
// function countOccurrences(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// const string = prompt("Enter a string");
// const letter = prompt("Enter letter: ");
// const occurrences = countOccurrences(string, letter);
// alert("The letter '" + letter + "' occurs " + occurrences + " times in the string.");

         // Question No 14

// ***************CALCULATING CIRCUMFERENCE*****************
// function circumference(radius){
//   var circum = 2*Math.PI*radius;
//   document.write("The circumference is "+ circum.toFixed(3));
// }
// var radius = +prompt("Enter radius to calculate circumference:");
// circumference(radius);

// ***************CALCULATING AREA*****************
// function calcArea(radius){
//   var area = Math.PI*radius*radius;
//   document.write("The area is "+ area.toFixed(3));
// }
// var radius = +prompt("Enter radius to calculate area:");
// calcArea(radius);


