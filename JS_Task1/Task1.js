// TASK 1

// task 1
var Number_One = 10 ;
var Number_Two = 20 ;


console.log( Number_One + Number_Two);
console.log(typeof ( Number_One + Number_Two)); 
console.log(`${Number_One}${Number_Two}`);
console.log(typeof `${Number_One}${Number_Two}`); 

console.log(Number_Two + "\n" + Number_One);

console.log(`${Number_Two}${Number_One}`);

// task 2
console.log(Task1.innerHTML);
console.log(typeof Task1);

// task 3
console.log("`I'm In" + "\n" + "\\\\" + "\n" + "Love \\ \"\"\" '''" + "\n" + "++ With ++" + "\n" + "\\\"\"\"\\\"\"\"" + "\n" + "\"\"JavaScript\"\"``");

// task 4
let a = 21;
let b = 20;

console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_");

// TASK 2

//task 1

console.log(10 * 20 % 15 % 3 * 190 * 10 % 400); 

// task 2

let num = 3;

console.log(num + num);

console.log(num + true + true + true); 

console.log(num * (true + true)); 

console.log(num + +true + +true + +true);

console.log((num * num) - num);

console.log((num * num) - num);

// task 3

let number = "10";

console.log(+number + +number);

console.log(+number * (true + true));

console.log((+number * +number) / (+number / (true + true)));

console.log(Number(number) + Number(number));

// task 4

let points = 10;

points += (true + true + true); 
console.log(points);

points -= (true + true + true + true + true);
console.log(points);

// TASK 3

// task 1
console.log(10 ** 5); 
console.log(Math.pow(10, 5)); 
console.log(1e5); 
console.log(1000 * 100); 
console.log(1000000 / 10); 
console.log(150000 - 50000); 
console.log(Math.floor(100000.9)); 
console.log(Math.ceil(99999.1)); 
console.log(Math.round(100000.4)); 
console.log(+"100000");

// task 2
console.log(Math.abs(Number.MIN_SAFE_INTEGER));

// task 3
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// task 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar));
console.log(+parseFloat(myVar).toFixed(2)); 

// task 5
let number2 = 10;
console.log(Number.isInteger(number2) + Number.isInteger(number2)); 

// task 6
let flt = 10.4;

console.log(Math.floor(flt)); 
console.log(Math.round(flt)); 
console.log(Math.trunc(flt));
console.log(parseInt(flt)); 
console.log(Math.ceil(flt - true)); 

// task 7
console.log(Math.floor(Math.random() * 5));

// TASK 4

// task 1
let userName = "Elzero";

console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase()); 
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase()); 
console.log(userName.split("")[0].toLowerCase()); 
console.log(userName[0].toLowerCase().repeat(3)); 

// task 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";


console.log(word.toLowerCase().includes(letterZ.toLowerCase()));
console.log(word.startsWith(letterE.toUpperCase())); 
console.log(word.endsWith(letterO.toLowerCase())); 

// TASK 5

// task 1
console.log(100 == "100"); 
console.log(100 < 1000); 
console.log(110 > 100 > 10 < 20); 
console.log(-10 == "-10"); 
console.log(! -50 == ! +"-40"); 
console.log(typeof 10 === typeof -"-40"); 
console.log(typeof "10" !== typeof 10); 
console.log(20 > false);

// task 2
let number1 = 10;
let number3 = 20;

console.log(number1 < number3); 
console.log(number3 > number1); 
console.log(number1 != number3); 
console.log(number1 !== number3); 
console.log(!(number1 == number3));
console.log(typeof number1 === typeof number3);

// task 3
let d = 20;
let e = 30;
let c = 10;

console.log(d < e && d > c || a < e);
console.log(d < e && d > c); 
console.log(!(d > e) && !(d == e) && !(d < c) && !(d == c));

// TASK 6

// task 1
let number4 = 9;

if (number4 < 10) {
  console.log(`00${number4}`);
} else if (number4 > 10 && number4 < 100) {
  console.log(`0${number4}`);
} else if (number4 >= 100) {
  console.log(`${number4}`);
}

// task 2
let number5 = 9;
let str = "9";
let str2 = "20";

if (number5 == str) {
  console.log(`${number5} Is The Same Value As ${str}`);
}
if (number5 == str && number5 !== str) {
  console.log(`${number5} Is The Same Value As ${str} But Not The Same Type`);
}
if (number5 !== str2) {
  console.log(`${number5} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (typeof str === typeof str2 && str != str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

// task 3
let numb1 = 10;
let numb2 = 30;
let numb3 = "30";

if (numb3 > numb1 && typeof numb3 != typeof numb2) {
  console.log(`${numb3} Is Larger Than ${numb1} And Type string Not The Same Type As number`);
} 
if (numb3 > numb1 && numb3 == numb2 && typeof numb3 != typeof numb2) {
  console.log(`${numb3} Is Larger Than ${numb1} And Value Is The Same As ${numb2} And Type string Not The Same Type As number`);
} 
if (numb3 !== numb1 && typeof numb3 != typeof numb2) {
  console.log(`${numb3} Value And Type Is Not The Same As ${numb1} And Type Is Not The Same As ${numb2}`);
}

// task 4
let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}
if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// TASK 7

// task 1
let day = "   friday  ";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}

// TASK 8

// task 1
let start1 = 10;
let end1 = 100;
let exclude = 40;

for (let i = start1; i <= end1; i += start1) {
  if (i === exclude) {
    continue; 
  }
  console.log(i);
}

// task 2
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= stop; i--) {
  if (i < start2) {
    console.log(`0${i}`);
  } else {
    console.log(`${i}`);
  }
}

// task 3
let start3 = 1;
let end = 6;
let breaker = 2;

for (let i = start3; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}

// task 4
let index1 = 10;
let jump = 2;

for (;;) {
  console.log(index1);
  index1 -= jump;
  if (index1 === jump) {
    break;
  }
}

// task 5
let friendss = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let ccounter = letter.length; 

for (let i = +false; i < friendss.length; i++) {
  if (friendss[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${ccounter++} => ${friendss[i]}`);
}

// task 6
let start4 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start4; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);

// task 7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = mix.indexOf(mix[start + true]); i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}

// TASK 9

// task 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0; 

while (index < friends.length) {
  if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
    console.log(`${++counter} => ${friends[index]}`);
    
  }
  index++;
}

// TASK 10

// task 1
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// task 2
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation === "add" || operation === undefined) {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
}

// task 3
function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 4} Weeks`);
    console.log(`${theAge * 12 * 30} Days`);
    console.log(`${theAge * 12 * 30 * 24} Hours`);
    console.log(`${theAge * 12 * 30 * 24 * 60} Minutes`);
    console.log(`${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);
  }
}

// task 4
function checkStatus(a, b, c) {
  let name, age, status;
  [a, b, c].forEach(arg => {
    if (typeof arg === "string") name = arg;
    else if (typeof arg === "number") age = arg;
    else if (typeof arg === "boolean") status = arg;
  });
  let message = status ? "You Are Available For Hire" : "You Are Not Available For Hire";
  console.log(`Hello ${name}, Your Age Is ${age}, ${message}`);
}

// task 5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}

// task 6
function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }
    result *= Math.trunc(numbers[i]);
  }
  console.log(result);
}

// TASK 11

// task 1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let names = zName.split(" ");
    return `${names[0]} ${names[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); 
}

// task 2
let itsMe = () => `Iam A Normal Function`;
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// task 3
let checker = (zName) => (status) => (salary) => 
  status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// task 4
function specialMix(...data) {
  let result = 0;
  let allStringsCount = 0;
  for (let i = 0; i < data.length; i++) {
    let val = parseInt(data[i]);
    if (!isNaN(val)) {
      result += val;
    } else {
      allStringsCount++;
    }
  }
  if (allStringsCount === data.length) {
    return "All Is Strings";
  }
  return result;
}
