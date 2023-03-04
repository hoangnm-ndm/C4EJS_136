console.log(document);
const headingElement = document.getElementById("heading-lession");
console.log(document.getElementsByClassName("heading-lession"));
console.log(document.getElementsByTagName("h2"));
const item3 = document.querySelector("ol > li.item.item-3");
console.log(document.querySelectorAll("ol > li.item.item-1 "));

// getter
console.log(item3.title);

// setter

console.log(headingElement);
headingElement.href = "https://link.com";
console.log(headingElement.href);

const todoList = ["Homework", "Jogging", "Shopping"];

const ul = document.createElement("ul");

for (let i = 0; i < todoList.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = todoList[i];
  ul.appendChild(li);
}

headingElement.appendChild(ul);

headingElement.style.color = "red";

const myBtn = document.getElementById("myBtn");
function sayHello() {
  console.log("hello");
}
myBtn.addEventListener("click", sayHello);

const myInput = document.getElementById("myInput");
myInput.addEventListener("change", function () {
  console.log("input changed");
});

const p = document.getElementById("myP");
const div = document.getElementById("myDiv");

div.addEventListener("click", function () {
  console.log("div clicked");
});

p.addEventListener("click", function () {
  console.log("p clicked");
});
