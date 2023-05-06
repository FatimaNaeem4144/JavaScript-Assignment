// *******************CH 5**********************
         // Question No 1
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// document.write("Addition of " + num1 + " and " + num2 + " is " + (num1+num2));

         // Question No 2
// document.write("<br>Subtraction of " + num1 + " and " + num2 + " is " + (num1-num2));
// document.write("<br>Multiplication of " + num1 + " and " + num2 + " is " + (num1*num2));
// document.write("<br>Division of " + num1 + " and " + num2 + " is " + (num1/num2));
// document.write("<br>Modulus of " + num1 + " and " + num2 + " is " + (num1%num2));

         // Question No 3
// let number;
// document.write("Value after variable declaration is " + number);
// number= prompt("Enter number:");
// document.write("<br>Initial value: " + number);
// document.write("<br>Value after increment is: " + ++number);
// number = 7 + number;
// document.write("<br>Value after addition is: " + number);
// document.write("<br>Value after decrement is: " + --number)
// document.write("<br>The remainder is: " + (3/number));

         // Question No 4
// const ticketPrice = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + (5*ticketPrice) + "PKR");

         // Question No 5
// let table = +prompt("Enter table number:");
// document.write("Table of " + table);
// for(let i=1; i<=10 ; i++){
//     document.write("<br>" + table + "x" + i + "=" + (table*i) + "<br>");
// }

         // Question No 6
// const celsius = +prompt("Enter Celsius temperature to convert it into Fahrenheit:");
// const celsiusToFahrenheit = ((celsius*9/5)+32);
// document.write(celsius + "<sup>o</sup>C is " + celsiusToFahrenheit  + "<sup>o</sup>F<br>");
// const fahrenheit = +prompt("Enter Fahrenheit temperature to convert it into Celsius:");
// const fahrenheitToCelsius = ((fahrenheit-32)*5/9);
// document.write(fahrenheit + "<sup>o</sup>F is " + fahrenheitToCelsius  + "<sup>o</sup>C");

         // Question No 7
// document.write("<h2>Shopping Cart</h2>");
// const priceItem1 = 650;
// const priceItem2 = 100;
// const quantity1 = 3;
// const quantity2 = 7;
// const charges = 100;
// document.write("Price of item 1 is " + priceItem1);
// document.write("<br>Quantity of item 1 is " + quantity1);
// document.write("<br>Price of item 2 is " + priceItem2);
// document.write("<br>Quantity of item 2 is " + quantity2);
// document.write("<br>Shipping Charges " + charges);
// document.write("<br><br>Total cost of your order is " + ((priceItem1*quantity1)+(priceItem2*quantity2) + (charges)));

         // Question No 8
// document.write("<h2>Marks Sheet</h2>");
// const marks = +prompt("Enter the obtained marks:");
// const totalMarks = +prompt("Enter the total marks:");
// const percentage = ((marks*100)/totalMarks);
// document.write("Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + marks);
// document.write("<br>Percentage: " + percentage + "%");

         // Question No 9
// document.write("<h2>Currency in PKR</h2>");
// const usDollars = 10;
// const saudiRiyals = 25;
// const rates = ((usDollars*104.80) + (saudiRiyals*28));
// document.write("Total currency in PKR: " + rates);

         // Question No 10
// const num = +prompt("Enter number:");
// const num1 = num+5;
// const num2 = num1*10;
// const num3 = num2/2;
// document.write("Add 5: " + num1 + "<br>" + "Multiply by 10: " +  num2 + "<br>" + "Divided the result by 2: " + num3 );

         // Question No 11
// document.write("<h2>Age Calculator</h2>");
// const currentYear = 2023;
// const birthYear = +prompt("Enter your birth year:") ;
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>Your age is: " + (currentYear - birthYear));

         // Question No 12
// document.write("<h2>The Geometrizer</h2>");
// const radius = +prompt("Enter radius value:");
// document.write("Radius of a circle is: " + radius);
// document.write("<br>The circumference is: " + (2*3.142*radius));
// document.write("<br>The area is: " + (3.142*(Math.pow(radius,2))));

         // Question No 13
// document.write("<h2>The Lifetime Supple Calculator</h2>");
// const snack = "Chocolate chip";
// const age = 17;
// const maxAge = 65;
// const snackPerDay = 3;
// document.write("Favourite Snack: " + snack);
// document.write("<br>Current Age: " + age);
// document.write("<br>Maximum Estimated Age: " + maxAge);
// document.write("<br>Amount of snacks per day: " + snackPerDay);
// document.write("<br>You will need 150 " + snack + " to last you until the ripe old age of " + maxAge);