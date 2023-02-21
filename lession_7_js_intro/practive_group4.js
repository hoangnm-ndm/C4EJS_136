/**
 * && , ||, ??
 *
 * Hiểu thế nào là falsy, trusthy
 *
 * Falsy:
 * 1. false
 * 2. 0, -0
 * 3. null
 * 4. undefined
 * 5. '', "", `` - string rỗng
 *
 * Trusthy: phần còn lại.
 *
 *
 * '??' - check gía trị null và undefined
 *
 */

let num1 = undefined;
let num2 = 5;
let num3 = 3;

let logic = num1 && num2; // 10 && 5 - tìm duyệt tất cả các giá trị đều true, nếu không gặp false thì lấy vế phải
let logic2 = false || false || num3; // 10 || 5 || 3 - tìm giá trị true, nếu không tìm được gán giá trị cuối cùng cho phép so sánh

console.log(logic);

console.log(num1 ?? num2); //null ?? 5 - trả về kết quả của vế phải nếu vế trái là null hoặc undefined và nguợc lại

/**
 * BT 1:
 * thuc hien phep tinh gan x = 10.
 * tinh y = ++x + --x (21)
 * tinh z = --x + ++x (19)
 * tính t = x++ + --x + --y + y++ (60)
 *
 * BT 2: kiểm tra xem 1 số bất kỳ có phải số chẵn hay không?
 *
 *
 * BT 3: kiểm tra xem một số bất kỳ có phải số chính phương hay không? - là số mà căn bậc 2 của nó là một số nguyên
 * Math.sqrt() - căn bậc 2.
 * isInteger() - kiểm tra xem có phải số nguyên hay không?
 *
 * BT4: Sử dụng phương thức length kiểm tra độ dài của một chuổi bất kỳ.
 */

let x = 10;

let y = ++x + --x; // (10+1) + (11-1) = 21
let z = --x + ++x; // 9 + 10 = 19
let t = x++ + --x + --y + y++; // 10 + (11-1) + (21-1) + 20 = 10 + 10 +20+20 = 60

// Nếu dấu ++, -- đặt trước biến thì thực hiện tăng (giảm) trước, gán sau.
// Nếu dấu ++, -- đặt sau biến thì thực hiện gán trước, tăng(giảm) sau.

console.log({ y });
console.log({ z });
console.log({ t });

let testNumber = 10000;

// BT 2:

if (testNumber % 2 === 0) {
  console.log(`Số ${testNumber} là số chẵn`);
} else {
  console.log(`Số ${testNumber} ko là số chẵn`);
}

// BT 3:
// Math.random()
// Math.floor()
// Math.pi()
let mindX = 16;

if (isInteger(Math.sqrt(mindX)) === true) {
  console.log(`${mindX} la mot so chinh phuong`);
} else {
  console.log(`${mindX} ko la mot so chinh phuong`);
}
