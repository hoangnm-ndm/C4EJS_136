/**
 * 1. Chạy dự án JS đầu tiên
 * 2. Các cách nhúng JS trong HTML
 * 3. Comment : command + /, ctrl + /: comment 1 dòng, nhiều dòng.
 * 4. Biến trong JS: let, const, var(variable)
 *
 * let                     const                       var
 * k khai bao lai dk      khong khai bao lai      co khai bao lai
 * co the gan lai         k the gan lai           co the gan lai
 * ko hoisting            ko hoisting             co hoisting
 *
 * 5. Các kiểu dữ liệu:
 *      Nguyên thuỷ (đơn giản):
 *        1. Number
 *        2. String
 *        3. undefined
 *        4. null
 *        5. boolean
 *
 *      Kiểu phức tạp: học buổi sau. (array, object, symbol....)
 *
 * 6. Các hàm built-in
 * console.log, console.warn, console.error, console.dir, alert, promt, confirm...
 * 7. Toán tử số học:
 * 8. Toán tử so sánh:  &&, ||, !.
 *
 * Tìm hiểu thêm: toán tử "??
 *
 */

// Code JS

let welcome = "Xin chao ca lop MindX cua minh nhe!";

let yourName = "Nguyễn Hoàng",
  age = 31;

let car; // chua biet car la gi
console.log("car:", car);
car = "huyndai"; // da biet gia tri cua car
console.log("car:", car);
let myNumber = 10;

// xu ly chuoi voi template literal (template string - ``)
console.error(`Xin chào mọi người, thầy tên là ${yourName}, thầy ${age} tuổi`);

console.dir({ user: "hoang", age: "18" });

let myBloolean = false;
console.log(myBloolean);

let myNull = null;
var matTroi = "la mot ngoi sao";
var matTroi = "thi toa nang";
console.log(matTroi);
// constant - hang so

//hoisting: tuc la dong lenh khai bao bien duoc dua len tren cung cua khoi.
// console.log(x);
// let x;

let newNumber = 10;
newNumber++; //11
const newNumber_2 = 2;
const result = newNumber % newNumber_2; //phep chia lay du
console.log(result);

// x++, ++x,

// x +=y; // x = x +y

let x = 0;
x += 2; //x = x + 2
console.log(x); // 2

let newNumber3 = 12;
let newNumber5 = "12";
let newNumber4 = "10"; //number
//  string + number = string
console.log(newNumber3 + newNumber5 + newNumber4 + newNumber5);

console.log(newNumber3 !== newNumber5);

let isAuthenticated = true;
console.log(isAuthenticated);

if (!(3 < 5)) {
  // code se chay khi dieu kien dung
  console.log("ket qua phep so sanh la nho hon");
}

// && - toán tử và: la toan tu logic tra ve ket qua true neu cac ve deu tra ve true
// || - toán tử hoặc: la toan tu logic tra ve true neu co it nhat 1 ve tra ve true

let logic1 = false;
let logic2 = true;
let ketqua = logic1 && logic2;

console.log("ketqua: ", ketqua);

/**
 *                       &&             ||
 * true, true           true            true
 * true, false          false          true
 * false, true          false          true
 * false, false         false           false
 */
