// *******************CH 26...34**********************
         // Question No 1
// let userInput = +prompt("Enter positive integer:");
// document.write("number: "+ userInput);
// document.write("<br>round off value: "+ Math.round(userInput));
// document.write("<br>floor value: "+ Math.floor(userInput));
// document.write("<br>ceil value: "+ Math.ceil(userInput));

         // Question No 2
// let userInput = +prompt("Enter negative integer:");
// document.write("number: "+ userInput);
// document.write("<br>round off value: "+ Math.round(userInput));
// document.write("<br>floor value: "+ Math.floor(userInput));
// document.write("<br>ceil value: "+ Math.ceil(userInput));

         // Question No 3
// let userInput = +prompt("Enter integer:");
// document.write("The absolute value of "+ userInput + " is " + Math.abs(userInput));

         // Question No 4
// let randomNum = Math.random();
// let improvedNum = (randomNum * 6)+1;
// let num = Math.floor(improvedNum)
// document.write("random dice value: "+ num);

         // Question No 5
// let randomNum = Math.random();
// let improvedNum = (randomNum * 2)+1;
// let num = Math.floor(improvedNum)
// document.write(num+"<br>");
// if(num=="2"){
//     document.write("random coin value: Heads")
// }
// else{
//     document.write("random coin value: Tails")
// }

         // Question No 6
// let randomNum = Math.random();
// let improvedNum = (randomNum * 100)+1;
// let num = Math.floor(improvedNum)
// document.write("random number between 1 and 100: "+ num);

         // Question No 7
// let weight = prompt("Enter your weight in kilograms:");
// document.write("The weight of user is "+ weight);

         // Question No 8
// let randomNum = Math.random();
// let improvedNum = (randomNum * 10)+1;
// let num = Math.floor(improvedNum);
// let userInput = +prompt("Enter a number between 1 and 10");
// if(userInput==num){
//     alert("Congratulations! ")
// }
// else{
//     alert("Try again")
// }

//****************** DATE METHODS ********************
         // Question No 1
// let today = new Date;
// document.write(today);

         // Question No 2
// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let today = new Date();
// let monthNumber = today.getMonth();
// let monthName = months[monthNumber];
// document.write("Current month: " + monthName);

         // Question No 3
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let today = new Date();
// let theDay = today.getDay();
// alert("Today is " + dayNames[theDay]);

         // Question No 4
// let today = new Date();
// let day = today.getDay();
// if(day==1 || day==2){
//     alert("It's a fun day");
// }
// else{
//     alert("Not a fun day");
// }

         // Question No 5
// let today = new Date();
// let date = today.getDate();
// if(date<=15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

         // Question No 6
// let today = new Date();
// document.write("Current date: "+ today);
// let milliseconds = today.getTime();
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+ milliseconds);
// let minutes = (today.getTime() / 1000) / 60;
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutes);


         // Question No 7
// let today = new Date();
// let hours = today.getHours();
// if(hours<11){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

         // Question No 8
// let laterdate = new Date(2023, 12, 0);
// document.write("Later date: "+laterdate);

         // Question No 9
// let currentDate = new Date();
// let ramadanDAte = new Date(2022,4,3);
// let date = currentDate.getTime()-ramadanDAte.getTime();
// let daysPassed = Math.floor(date / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan,2022");

         // Question No 10
// let referenceDate = new Date();
// let beginningOf2023 = new Date(2023, 0, 1);
// let timeDiff = referenceDate.getTime() - beginningOf2023.getTime();
// let secondsElapsed = Math.floor(timeDiff / 1000);
// document.write("On reference date "+ referenceDate + ", "+ secondsElapsed+" seconds had passed since beginning of 2023");

         // Question No 11
// let today = new Date();
// document.write("Current Date: " + today);
// let currentHours = today.getHours();
// let updatedDate = new Date(today.setHours(currentHours - 1));
// document.write("<br>1 hour ago,it was "+updatedDate);

         // Question No 12
// let today = new Date();
// document.write("Current date: "+ today);
// let year = today.getFullYear();
// let updatedyear = new Date(today.setFullYear(year- 100));
// document.write("<br>100 years back, it was "+ updatedyear);

         // Question No 13
// let today = new Date();
// let year = today.getFullYear();
// let age = prompt("Enter your age");
// document.write("Your age is "+ age);
// document.write("<br>Your birth year is "+ (year-age));

         // Question No 14
// let units = 410;
// let charges =16;
// let latePayment = 350;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>ABC Customer</b>");
// document.write("<br>Month: <b>February</b>");
// document.write("<br>Number of units: <b>" + units + "</b><br>");
// document.write("Charges per unit: <b>"+ charges+ "</b>");
// let netAmount = (units*charges);
// document.write("<br><br>Net Amount Payable(Within Due Date): <b>" + netAmount + "</b>");
// document.write("<br>Late payment surcharge: <b>"+ latePayment+"</b>");
// document.write("<br>Gross Amount Payable(after Due Date): <b>"+(latePayment+netAmount)+"</b>");