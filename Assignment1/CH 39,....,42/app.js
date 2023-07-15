// *******************CH 39...42**********************
         // Question No 1
// function power(a, b){
//     let result = 1;
//     for(let i=0;i<b;i++){
//         result *= a;
//     }
//     return result;
// }
// var base = +prompt("Enter base value: ");
// var exponent = +prompt("Enter exponent value: ");
// var result = power(base,exponent);
// alert(base + " raised to the power of "+ exponent+ " is "+ result);

         // Question No 2
// function leapYear(){
//     if(year % 4===0){
//         alert("It's a leap year")
//     }
//     else{
//         alert("It's not a leap year")
//     }
// }
// var year = +prompt("Enter year:");
// var leap = leapYear();

         // Question No 3
// function area1(a,b,c){
//     var s= (a+b+c)/2;
//     return (s*(s-a)*(s - b)*(s - c));
// }
// const a = +prompt("Enter side of length a:");
// const b = +prompt("Enter side of length b:");
// const c = +prompt("Enter side of length c:");
// result= area1(a,b,c);
// alert("The area of triangle is "+ result);

         // Question No 4
// function average(a,b,c){
//     return (a+b+c)/3;
// }
// function percentage(avg){
//     return (avg*100)/100;
// }

// const a = +prompt("Enter marks of subjest 1:");
// const b = +prompt("Enter marks of subjest 2:");
// const c = +prompt("Enter marks of subjest 3:");
// const avg = average(a,b,c);
// const result = percentage(avg);
// alert("The percentage is " +result + "%.");

         // Question No 5
// function indexOf(string,char){
//     for (var i=0;i<string.length; i++){
//         if(string[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }

// const string = prompt("Enter string:");
// const char = prompt("Enter character to find:");
// const index = indexOf(string,char);
// alert("The index of "+ char + " is " + index);

         // Question No 6
// function deleteVowels(sentence) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     const char = sentence[i].toLowerCase();
//     if (!vowels.includes(char)) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// const sentence = prompt("Enter string to delete vowels: ");
// const result = deleteVowels(sentence);
// alert("Result: " + result);

         // Question No 7
// function countVowels(text) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     const currentChar = text[i].toLowerCase();
//     const nextChar = text[i + 1].toLowerCase();
//     switch (currentChar) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         if (vowels.includes(nextChar)) {
//           count++;
//         }
//         break;
//     }
//   }
//   return count;
// }
// const text = prompt("Enter string: ");
// const occurrenceCount = countVowels(text);
// alert("Number of occurrences:"+ occurrenceCount);

         // Question No 8
// function meters(km) {
//   return km * 1000;
// }
// function feet(km) {
//   return km * 3280.84;
// }
// function inches(km) {
//   return km * 39370.08;
// }
// function centimeters(km) {
//   return km * 100000;
// }
// const km = parseFloat(prompt("Enter distance between two cities (in km):"));
// const distanceInMeters = meters(km);
// document.write("Distance in meters:"+ distanceInMeters);
// const distanceInFeet = feet(km);
// document.write("<br>Distance in feet:"+ distanceInFeet);
// const distanceInInches = inches(km);
// document.write("<br>Distance in inches:"+ distanceInInches);
// const distanceInCentimeters = centimeters(km);
// document.write("<br>Distance in centimeters:"+ distanceInCentimeters);

         // Question No 9
// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40; 
//   const overtimeRate = 12; 

//   if (hoursWorked <= regularHours) {
//     return 0;
//   } else {
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
// }
// const hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
// const overtimePay = calculateOvertimePay(hoursWorked);
// alert("Overtime pay: Rs."+ overtimePay.toFixed(2));

         // Question No 10
function calculateCurrencyNotes(amountInHundreds) {
  const note100 = 100;
  const note50 = 50;
  const note10 = 10;
  const count100 = Math.floor(amountInHundreds);
  const remainingAmount = amountInHundreds - count100;
  const count50 = Math.floor(remainingAmount / (note50 / note100));
  const remainingAmountAfter50s = remainingAmount - (count50 * (note50 / note100));
  const count10 = Math.floor(remainingAmountAfter50s / (note10 / note100));
  return {
    note100: count100,
    note50: count50,
    note10: count10
  };
}
const amountInHundreds = parseInt(prompt("Enter amount to withdraw!!:"));
const currencyNotes = calculateCurrencyNotes(amountInHundreds);
document.write("Number of 100s: "+ currencyNotes.note100);
document.write("<br>Number of 50s: "+ currencyNotes.note50);
document.write("<br>Number of 10s: "+ currencyNotes.note10);
