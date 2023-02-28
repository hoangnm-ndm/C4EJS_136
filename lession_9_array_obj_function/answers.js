/**
 * Cho danh sách products như trong file data.js:
 * 1. In ra danh sách các sản phẩm có price >=50
 * 2. In ra danh sách các sản phẩm có đánh giá từ 4 trở lên. (dựa vào giá trị "rate")
 * 
 * BTVN: 
 * 3. In ra danh sách các sản phẩm thuộc category: "women's clothing",
 * 4. In ra danh sách các category (mảng categories không được trùng nhau)
 *    ex: categories = [ "men's clothing", "women's clothing", "jewelery"]
 * 5. Đếm xem có bao nhiêu sản phẩm thuộc từng loại categories.
 *    ex:
 *    products_by_type = [
        {
          "men's clothing": 10,
        },
        {
          "women's clothing": 4,
        },
        {
          jewelery: 5,
        },
      ];

 */

import products from "./data.js";
// BT 1:
// Cach 1: console.log ra luon
// Tao mot mang rong -> tim phan tu phu hop roi push vao mang -> return ra mang
function lonHon50(arr) {
  let lengthArr = arr.length;
  let tempArr = [];
  for (let i = 0; i < lengthArr; i++) {
    if (arr[i].price >= 50) {
      // console.log(arr[i]);
      tempArr.push(arr[i]);
      // console.log(arr[i]);
    }
  }
  return tempArr;
}

console.log(
  "danh sach nhung san pham co gia lon hon 50$ la: ",
  lonHon50(products)
);

// BT 2:
// Cach 1: console.log ra luon
// Tao mot mang rong -> tim phan tu phu hop roi push vao mang -> return ra mang
function bigger4star(arr) {
  let lengthArr = arr.length;
  let tempArr = [];
  for (let i = 0; i < lengthArr; i++) {
    if (arr[i].rating.rate >= 4) {
      // console.log(arr[i]);
      tempArr.push(arr[i]);
      // console.log(arr[i]);
    }
  }
  return tempArr;
}
