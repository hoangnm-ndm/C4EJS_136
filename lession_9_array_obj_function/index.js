const yellow = "#232345";
const red = "#788992";
const colors = [
  "red",
  "blue",
  "#000000",
  "#ffffff",
  "0934934",
  "violet",
  123455,
  null,
  undefined,
];
console.log(typeof colors[7]);

console.log(typeof colors);

console.log(Array.isArray(red));
console.log("do dai cua mang colors la: ", colors.length);

const myInfors = [
  "Hoangnm",
  30,
  ["suon xao chua ngot", "muop dang ruoc", "coffee", "tao meo"],
];

const boards = [
  [" ", "X", " "],
  ["X", "O", "O"],
  [" ", "X", "O"],
];

const users = ["hoang", "nguyen", "minh anh"];
console.log(users);
console.log(users.push("anh thu")); // Làm thay đổi mảng và trả về độ dài mới của mảng.
console.log(users.pop()); // Làm thay đổi mảng và trả về phần tử bị xoá.
console.log(users.shift()); // Làm thay đổi mảng và trả về phần tử bị xoá.
console.log(users.unshift("dangle")); // Làm thay đổi mảng và trả về độ dài mới của mảng.
console.log(users);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]

// const arr = ["a", "c", "b"];
// arr.sort((a, b) => b - a);
// console.log(arr);

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 2, 7)); // tìm phần tử có index = 1 và xoá đi 2 phần tử, sau đó thêm một phần tử mới có value = 7.
// splice trả về mảng con bị cắt và thay đổi mảng ban đầu
console.log(arr); // [1, 7, 4, 5, 6]

const arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4.slice(2, 4)); // slice() lấy ra mảng con và không thay đổi mảng ban đầu.
console.log(arr4);

const product = {
  product_id: 12345667890,
  title: "tivi samsung 55 inch ultra HD",
  "sale price": 12000000,
  "sale-price": 1234567,
  salePrice: 1234567,
};

console.log(Object.keys(product).length); //tricks for length of obj

console.log(product.title);

const student = {
  name: "Alice",
  address: {
    street: "Nguyen Chi Thanh",
    streetNo: 70,
  },
};

const student2 = {
  name: "Alice",
  address: {
    street: "Nguyen Chi Thanh",
    streetNo: 70,
  },
  points: [9, 10, 9, 8, 2, 5],
};

const products = [
  {
    product_id: 12345667890,
    title: "tivi samsung 55 inch ultra HD",
    "sale price": 12000000,
    "sale-price": 1234567,
    salePrice: 1234567,
  },
  {
    product_id: 12345667891,
    title: "tivi lg 55 inch ultra HD",
    "sale price": 12000000,
    "sale-price": 1234567,
    salePrice: 1234567,
  },
  {
    product_id: 12345667890,
    title: "tivi samsung 55 inch ultra HD",
    "sale price": 12000000,
    "sale-price": 1234567,
    salePrice: 1234567,
  },
  {
    product_id: 12345667890,
    title: "tivi samsung 55 inch ultra HD",
    "sale price": 12000000,
    "sale-price": 1234567,
    salePrice: 1234567,
  },
];

const x = { name: "Alice" };
const y = { age: 20 };
const z = Object.assign(x, y);
console.log(z);

/**
 * 1. Có bao nhiêu cách khai báo một array
 * 2. Có bao nhiêu cách khai báo một object
 * 3. Kiểu dữ liệu  tham chiếu và tham trị
 */

// const myObj = { name, address };
/**
 * -> Du lieu kieu tham chieu: array, object
 */

// Declaration Function - function có tên.
/**
 * 1. Function chỉ thực hiện một nhiệm vụ cụ thể
 * 2. Function có tính tái sử dụng cao.
 * 3. Function tạo ra block scope.
 * 4. Declaration Function có hỗ trợ hoisting
 */

console.log(tinh_tong(2, 10));

function tinh_tong(a, b) {
  return a + b;
}

// Declaration Function được hoisting

console.log(tinh_tong(2, 11));
console.log(tinh_tong(2, 3));
console.log(tinh_tong("nguyen", "hoang"));

function sayHello() {
  // Block of code
  console.log("Hello");
  console.log("World");
  // Hàm này không trả về -> return undefined
  return;
  console.log("something");
}

console.log(sayHello());

/**
 * 1. Array
 *  - Khai bao 1 array
 *  - Độ dài của array: length
 *  - Các phương thức của array.
 *  - Kiểm tra xem 1 biến có phải là kiểu array hay không ? Array.isArray()
 * 2. Object
 *  - Khai báo 1 object
 *  - Gộp object
 *  - Lưu ý về đặt tên keys trong object
 *  - Tips check độ dài của object
 *  - Truy xuất một value object
 *  - Những phương thức của object
 * 3. Function
 *  - Có hoisting
 *  - Có tham số hoặc không
 *  - Từ khoá return
 *  - Cách gọi function.
 */
