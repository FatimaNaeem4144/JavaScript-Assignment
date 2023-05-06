// *******************CH 6**********************
         // Question No 1
// let num = +prompt("Enter a number: ");
// let num1 = ++num;
// let num2 = num++;
// let num3 = --num;
// let num4 = num--;
// document.write("Result: <br> The value of a is: " + num + "<br> .......................................................<br>");
// document.write ("<br> The value of ++a is: " + num1 + "<br> Now the value of a is: " + num1 );
// document.write (" <br><br> The value of a++ is: " + num2 + "<br> Now the value of a is: " + ++num2 );
// document.write (" <br><br> The value of --a is: " + num3 + "<br> Now the value of a is: " +num3);
// document.write (" <br><br> The value of a-- is: " + num4 + "<br> Now the value of a is: " + --num4);

         // Question No 2
// var a = 2, b = 1;
// var a1 = --a;
// var b1 = --b;
// var b2 = ++b;
// var b3 = b--;
// var result = a1 - b1 + b2 + b3;
// document.write("--a is " + (a1));
// document.write("<br>--a - --b is " + (a1 - b1));
// document.write("<br>--a - --b + ++b is " + (a1 - b1 + b2));
// document.write("<br>--a - --b + ++b + b-- is " + result);

         // Question No 3
// let name = prompt("Enter Your Name:");
// alert("Welcome " + name);

         // Question No  5
let table = +prompt("Enter table number:");
let i = 10;
document.write("Table of " + table + "<br>");
if(table != null ){
    for(let i=1; i<=10 ; i++){
     document.write("<br>" + table + "x" + i + "=" + (table*i) + "<br>");
} }
else{
    document.write("<br>5" + "x" + i + "=" + (5*i) );
}