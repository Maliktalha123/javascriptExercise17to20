/*
// ********** Chapter # 5
// 1
var addition = 3 + 5;
document.write("Sum of 3 and 5 is " + addition);
// 2
var substract = 25 - 5;
var multiply = 25 * 5;
var divide = 25 / 5;
var modules = 25 % 5;
document.write(
  "  <br/>Substraction of 25 and 5 is " +
    substract +
    " <br/>Multiplication of 25 and 5 is " +
    multiply +
    " <br/>Divide of 25 and 5 is " +
    divide +
    "<br/>Modules of 25 and 5 is " +
    modules
);
// 3
var value;
document.write("<br/>Value after Varible declaration is "+value)
value = 7;
document.write("<br/>Inital value is "+ value)
value++;
document.write("<br/>Value after Increment is : "+value);
value = value +7;
document.write("<br/>Value after addition is : "+ value);
value--;
document.write("<br/>Value after decreement is : "+ value)
value = value %3;
document.write("<br/>The remionder is : "+ value)

// 4
var ticketPrice = 600;
 var totalPrice = ticketPrice*5;
 document.write("Total cost to buy 5 tickets to a movie is "+totalPrice+"PKR");

 // 5
 var multipliedNumber = +prompt("Give me any Number");
 document.write(`<h2>Table of ${multipliedNumber} 
<br/>${multipliedNumber} x 1 = ${multipliedNumber * 1}
<br/>${multipliedNumber} x 2 = ${multipliedNumber * 2}
<br/>${multipliedNumber} x 3 = ${multipliedNumber * 3}
<br/>${multipliedNumber} x 4 = ${multipliedNumber * 4}
<br/>${multipliedNumber} x 5 = ${multipliedNumber * 5}
<br/>${multipliedNumber} x 6 = ${multipliedNumber * 6}
<br/>${multipliedNumber} x 7 = ${multipliedNumber * 7}
<br/>${multipliedNumber} x 8 = ${multipliedNumber * 8}
<br/>${multipliedNumber} x 9 = ${multipliedNumber * 9}
<br/>${multipliedNumber} x 10 = ${multipliedNumber * 10}
</h2>`);
// 6
// 7
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 =7;
var shippingCharges =100;
document.write(`<h1>Shopping Charges</h1> <br/> 
price of item 1 is ${priceOfItem1} <br/>Quantity of item 1 is ${quantityOfItem1} <br/> price of item 2 is ${priceOfItem2}<br/>Quantity of item 2 is ${quantityOfItem2}<br/>Shipping Charges ${shippingCharges}<br/><br/>Total cost of your order is ${(priceOfItem1 *quantityOfItem1)+(priceOfItem2*quantityOfItem2+shippingCharges)}`)

// 8
var totalMarks = 980;
var obtainedMarks = 804;
document.write(`<h1>Marks Sheet </h1><br/>Total Marks : ${totalMarks} <br/>Obtaind Marks : ${obtainedMarks}<br/>Percentage : ${obtainedMarks/totalMarks*100}%`)


// 9
var currencyExchange= (10*104.80)+(25*28);
document.write(`<h1>Currency in PKR</h1><br/>Total Currency in PKR : ${currencyExchange}`)

// 10
var question10 = 10;
var operation = (((question10 +5)*10)/2);
document.write(`<br/>${operation}`)

// 11
var currentYear = 2024;
var yearOfBirth = 2007;
document.write(
  `<h1>Age Calculator</h1><br/>Currnet Year : ${currentYear}<br/>Birth year : ${yearOfBirth}<br/>Your age is ${
    currentYear - yearOfBirth
  }`
);

// 12
var faviouriteSnack = "Chocolate Chip";
var currentAge = 17;
var maximumAge =70;
var amountPerDay = 5;
document.write(`<h1>The Lifetime Supply Calculator</h1><br/>Favourite Snack : ${faviouriteSnack}<br/>Current Age ${currentAge}<br/>Estimated MAximum Age : ${maximumAge}<br/>Amount of Snacks per Day : ${amountPerDay}<br/><h2>You will need ${(((70-17)*365)*5)} ${faviouriteSnack} to last you until the ripe old age of ${maximumAge}</h2>`)

// ********* Chapter # 6
// 1
var a = +prompt("Enter The Value of a in  number");

document.write(
  `The Value of a is : ${a} <br/><br/> ............................... <br/><br/>The value of ++a is : ${++a} <br/>  Now the value of a is : ${a} <br/><br/>The Value of a++ is ${a++}<br/>Now the value of a is ${a}<br/><br/>The value of --a is ${--a}<br/>Now the value of a is ${a}<br/><br/>The value of a-- is ${a--}<br/>Now the value of a is ${a}`
  );
  
  */

  // 2  


  // 3
  var geetUserInput = prompt("Enter Your Name");
  alert(`Hello MR.${geetUserInput}, Welcome to our store`)

  // 5
  var userNum = prompt("")