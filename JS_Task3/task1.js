//task 1

document.querySelector("#elzero");
document.querySelector(".element");
document.querySelector("[name='js']");
document.querySelector("div");
document.querySelectorAll("#elzero")[0];
document.querySelectorAll(".element")[0];
document.querySelectorAll("[name='js']")[0];
document.querySelectorAll("div")[0];
document.getElementById("elzero");
document.getElementsByClassName("element")[0];
document.getElementsByTagName("div")[0];
document.getElementsByName("js")[0];
document.body.firstElementChild;
document.body.children[0];
document.childNodes[1].lastElementChild.firstElementChild; 

//task 2


let myImages = document.querySelectorAll("img");
for (let i = 0; i < myImages.length; i++) {
  myImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myImages[i].alt = "Elzero Logo";
}

//task 3


let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");
input.oninput = function () {
  let dollarValue = input.value;
  let egpTotal = (dollarValue * 15.6).toFixed(2);
  result.innerHTML = `{${dollarValue || 0}} USD Dollar = {${egpTotal}} Egyptian Pound`;
};


//task 4


let elementOne = document.querySelector(".one");
let elementTwo = document.querySelector(".two");
let tempText = elementOne.innerHTML;
let tempTitle = elementOne.getAttribute("title");
elementOne.innerHTML = elementTwo.innerHTML;
elementOne.setAttribute("title", elementTwo.getAttribute("title"));
elementTwo.innerHTML = `${tempText} ${elementTwo.attributes.length + 1}`;
elementTwo.setAttribute("title", tempTitle);


// task 5


let images = document.querySelectorAll("img");
images.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.alt = "Old";
  } else {
    img.setAttribute("alt", "Elzero New");
  }
});



// Task  2


let header = document.createElement("header");
let content = document.createElement("div");
let footer = document.createElement("footer");


let logo = document.createElement("div");
logo.textContent = "Elzero";
logo.style.cssText = "font-weight: bold; color: #23a96e; font-size: 26px;";

let menu = document.createElement("ul");
let menuItems = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < menuItems.length; i++) {
  let li = document.createElement("li");
  li.textContent = menuItems[i];
  li.style.cssText = "display: inline-block; margin-left: 15px; color: #666; cursor: pointer;";
  menu.appendChild(li);
}

header.appendChild(logo);
header.appendChild(menu);
header.style.cssText = "display: flex; padding: 20px; background-color: white; justify-content: space-between; align-items: center;";

content.style.cssText = "display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; background-color: #ececec; min-height: calc(100vh - 142px); box-sizing: border-box;";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.style.cssText = "padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 6px; text-align: center; color: #888;";
  
  let span = document.createElement("span");
  span.textContent = i;
  span.style.cssText = "font-size: 40px; color: black; display: block; margin-bottom: 10px; font-weight: normal;";
  
  product.appendChild(span);
  product.append("Product");
  content.appendChild(product);
}

document.body.style.cssText = "margin: 0; font-family: Tahoma, Arial;";
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);


// Task 3 

// task 1

let userInput = prompt("Print Number From – To", "5-20");
let numsArray = userInput.split("-");
let num1 = parseInt(numsArray[0]);
let num2 = parseInt(numsArray[1]);
let start = num1 < num2 ? num1 : num2;
let end = num1 > num2 ? num1 : num2;
for (let i = start; i <= end; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}

// task 2


function createPopup() {
  let popup = document.createElement("div");
  popup.className = "popup-box";
  let h2 = document.createElement("h2");
  h2.textContent = "Welcome";
  
  let p = document.createElement("p");
  p.textContent = "Welcome To Elzero Web School";
  let closeBtn = document.createElement("span");
  closeBtn.textContent = "x";
  closeBtn.className = "close-btn";
  closeBtn.onclick = function () {
    popup.remove();
  };
  popup.appendChild(closeBtn);
  popup.appendChild(h2);
  popup.appendChild(p);
  document.body.appendChild(popup);
}
setTimeout(createPopup, 5000);


// task 3


let counterDiv = document.createElement("div");
counterDiv.textContent = "10";
document.body.appendChild(counterDiv);
let handler = setInterval(function () {
  counterDiv.textContent -= 1;
  if (counterDiv.textContent === "0") {
    clearInterval(handler);
  }
}, 1000);


