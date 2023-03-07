// import { datas } from "./datas.js";
// console.log(datas);

// localStorage.setItem("foo", false);
// localStorage.setItem("bar", 1);
// sessionStorage.setItem("userInfor", "{}");
// localStorage.setItem("password", "1234567890");

// console.log(localStorage.getItem("foo"));
// console.log(localStorage.getItem("bar"));

// const userName = sessionStorage.getItem("userName");
// console.log({ userName });

// const data = { name: "Alice", age: 17 };

// localStorage.setItem("data", JSON.stringify(data));
// console.log(JSON.stringify(data));
// console.log(typeof JSON.stringify(data));
// console.log(JSON.parse(localStorage.getItem("data")));

// console.log("cong viec 1");
// const timer = setTimeout(function () {
//   console.log("cong viec 2");
// }, 3000);
// clearTimeout(timer);

// console.log("cong viec 3");
// js la ngon ngu single thread - tuc la tai 1 thoi diem chi lam dung 1 viec.
// Web APIs (setTimeout, setInterval, fetch...)
// Tim hieu them: đồng bộ và xử lý bất đồng bộ (promises, async/await, callback)

// setInterval(function () {
//   console.log("Xin loi moi nguoi!!!");
// }, 3000);

//////////

/**
 * 1995: LiveScript ra đời
 * AJAX -> ES3 -> ES5 ->
 * 2015: ECMAScript 6 ra đời
 */

// setTimeout(() => {
//   console.log("Xin chao mọi nguoi sau 3s");
// }, 3000);

// Tìm hiểu về từ khoá this

// const userName = "Hoangnm";
// const address = "HN";

// console.log(
//   `Xin chao moi người, mình tên là ${userName}, minh đền từ ${address}, rat vui được đồng hành cùng mọi người!`
// );

// Spread & Rest
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(10);
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

const arr3 = [...arr1, ...arr2];
// const myObject = {..obj1, ...obj2}
console.log(arr3);

console.log(arr1, arr2, arr3);

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
sum(1, 2, 3, 4, 5); // 15

const myCar = {
  name: "Outlander",
  brand: "Mitsu",
  color: "red",
  price: "1000000",
};

// const name = myCar.name
// const name = myCar.name
// const name = myCar.name

const { name, brand, color } = myCar;

console.log(name);

const coordinate = [0, 1, 1];
const [x, y, z] = coordinate;
coordinate[-2] = 10;
console.log(coordinate[-2]);
console.log(coordinate);

console.log(typeof null);
