// *******************CH 21...25**********************
         // Question No 1
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// firstName = firstName.charAt(0).toUpperCase()+firstName.slice(1);
// lastName = lastName.charAt(0).toUpperCase()+lastName.slice(1);
// var fullName ="Welcome " +  firstName + " " + lastName;
// alert(fullName);

         // Question No 2
// let userInput = prompt("Enter your fav mobile phone model");

// for(var i=0; i<userInput.length;i++){
// if(userInput.slice(i,i+1)===" "){
//     userInput1=userInput[i+1].toUpperCase();
// }
// }

// document.write("My favourite phone is: "+ userInput.charAt(0).toUpperCase()+userInput.slice(1));
// document.write("<br>Length of string: "+ userInput.length);

         // Question No 3
// let string = "Pakistani";
// document.write("String: "+string);
// let index = string.indexOf("n")
// document.write("<br>Index of 'n': "+ index);

       // Question No 4
// let string = "Hello World";
// document.write("String: "+string);
// let index = string.lastIndexOf("l");
// document.write("<br>Last Index of 'l': "+ index);

       // Question No 5
// let string = "Pakistani";
// document.write("String: "+string);
// let index = string[3];
// document.write("<br>Character at index 3: "+ index);

       // Question No 6
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// let fullName = firstName.concat(" ",lastName)
// alert(fullName);

       // Question No 7
// let string = "Hyderabad";
// document.write("City: "+string);
// let string1 = string.replace("Hyder","Islam");
// document.write("<br>After replacement: "+ string1);

       // Question No 8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let msg1 = message.replace(/and/g,"&");
// document.write("Message: "+ message);
// document.write("<br>After replacement: "+ msg1);

        // Question No 9
// let string = "472";
// document.write("Value: "+ string + "<br>Type: "+ typeof string);
// let number = parseInt(string);
// document.write("<br>Value: "+ number + "<br>Type: "+ typeof number);

        // Question No 10
// let userInput = prompt("Enter text:");
// document.write("User input: "+userInput);
// document.write("<br>Upper case: "+ userInput.toUpperCase());

        // Question No 11
// let userInput = prompt("Enter text:");
// document.write("User input: "+userInput);
// let titleCase = userInput.slice(0,1);
// titleCase = titleCase.toUpperCase();
// let titleCase1 = userInput.slice(4,5);
// titleCase1 = titleCase1.toUpperCase();
// document.write("<br>Title case: "+ titleCase+ userInput.slice(1,4) + titleCase1+userInput.slice(5,10));

       // Question No 12
// let num = 35.37;
// document.write("Number: "+ num );
// let string = num.toString();
// document.write("<br>Result: "+ string.replace(".","") );

       // Question No 13
// let userInput= prompt("Enter a username:");
// for (var i = 0; i < userInput.length; i++) {
//   var asciiCode = userInput.charCodeAt(i);
//   if (asciiCode===33 || asciiCode===44 || asciiCode===46 || asciiCode===64) {
//     alert("Please enter a valid username");
//   }
// }

       // Question No 14
// let array = ["cake", "apple pie", "cookie", "chips", "patties"];
// let search = prompt("Welcome to ABC Bakery! What do you want to order?");
// let lowerCase = search.toLowerCase();
// let present = false;
// for(var i=0;i<array.length;i++){
//     if(lowerCase==array[i]){
//         present=true;
//         break;
//     }
// }
// if(present){
//     alert( lowerCase+" is available at " + array.indexOf(lowerCase)+ " in our bakery")
    
// }      
// else{
//     alert("We are sorry "+ lowerCase+" is not available in our bakery")
// } 

       // Question No 15
// let ascii_of_0 = 49;
// let ascii_of_small_a = 97
// let ascii_of_capital_A = 65;
// let userPassword = prompt("Enter password");
// // for length
// let flag=false;
// if(userPassword< 6){
//     flag=true;
// }
// // for numbers
// let count=0;
// for(let i=1;i<userPassword.length;i++){
//     let pass1=userPassword.charCodeAt(i);
//     for(let j=ascii_of_0;j<58;j++){
//         if(pass1===j){
//             count += 1;
//         }
//     }
// }

// // for small alphabets
// let count1=0;
// for(let i=0;i<userPassword.length;i++){
//     let pass1=userPassword.charCodeAt(i);
//     for(let j=ascii_of_small_a;j<123;j++){
//         if(pass1===j){
//             count1 += 1;
//         }
//     }
// }
// // for capital alphabets
// let count2=0;
// for(let i=0;i<userPassword.length;i++){
//     let pass1=userPassword.charCodeAt(i);
//     for(let j=ascii_of_capital_A;j<91;j++){
//         if(pass1===j){
//             count2 += 1;
//         }
//     }
// }
// // for checking index 0
// let count3=0;
// let pass1=userPassword.charCodeAt(0);
// for(let i=ascii_of_0;i<58;i++){
//         if(pass1===i){
//             count3 += 1;
//         }
//     }
// if(flag === true && count === 0 ){
//         prompt("Your password length is smaller than 6 \ndoes not contain number\nenter a new password")
// }
    
// else if(flag === true && count1 === 0 ){
//         prompt("your password length is smaller than 6\ndoes not contain small alphabet\nenter a new password")
// }
    
    
// else if(flag === true && count3>=1){
//         prompt("your password length is smaller than 6 \nfirst index is a number\nenter a new password")
// }  
// else if(count === 0 && count1 === 0 ){
//         prompt("does not contain number \ndoes not contain small alphabet\nenter a new password")
// }
// else if(count === 0 &&  count3>=1){
//         prompt("does not contain number \nfirst index is number\nenter a new password")
// }
// else if( count1 === 0 &&  count3>=1){
//         prompt("does not contain small alphabet \nfirst index is a number\nenter a new password")
// }
// else if(flag === true){
//         prompt("your password' length is smaller than 6\nenter a new password")
// }
// else if( count === 0 ){
//         prompt("does ot contain numbers \nenter a new password")
// }
// else if( count1 === 0){
//         prompt("does not contain small alphabet\nenter a new password")
// }
// else if(count3>=1){
//         prompt("first index is a number\nenter a new password")
// }

       // Question No 16
// let university = "University of Karachi";
// let array = university.split("");
// document.write(array.join("<br>"));
       
       // Question No 17
// let userInput = prompt("Enter text");
// document.write("User input: "+userInput);
// document.write("<br>Last character of input: "+ userInput.charAt(userInput.length- 1));

       // Question No 18
// let string = "The quick brown fox jumps over the lazy dog";

// let word = "the";
// var split = string.split(" ");
// var count = 0;
// for (var i = 0; i < split.length; i++) {
//   if (split[i].toLowerCase() === word.toLowerCase()) {
//     count++;
//   }
// }
// document.write("Text: "+string+"<br>There are " + count + " occurence(s) of word 'the' ")

