var gender;

console.log("Chao ca lop!");

// console.log(userName);
console.log(gender);

{
  {
    {
      {
        {
          console.log(gender);
          // day la mot khoi lenh.
          // block scope
          // const userName = "HoangNM";
          let age = 30;
          var gender = "male"; // khai báo bằng từ khoá "var" cho biến có phạm vi toàn cục (global scope)
        }
      }
    }
  }
}

// console.log(userName);
// console.log(age);
console.log(gender);

/**
 * Khai báo với var thì cho biến có phạm vi toàn cục, và có hoisting
 * Khai báo với let, const thì cho biến có phạm vi khối - block scope, và không hỗ trợ hoisting
 */

let thoiTiet = "dep troi";

if (thoiTiet === "dep troi") {
  /* block of code */
  console.log("nghi hoc di choi");
} else if (thoiTiet === "mua") {
  console.log("van di choi nhung mang theo ao mua!!!");
} else {
  console.log("o nha hoc!!!");
}
let myNumber = 10;
if (myNumber > 100) {
  console.log("so cua ban lon hon 100");
} else {
  console.log("so cua ban khong lon hon 100");
  // co the nho hon, khong the so sanh dk!!!
}

/**
 * If quan tâm đến tính đúng sai hơn là các case.
 * If else không nên sử dụng với nhiều hơn 4 trường hợp
 * If có 3 cách dùng:
 * 1. if
 * 2. if - else
 * 3. if - else if (n) - else
 */

switch (thoiTiet) {
  case "dep troi":
    console.log("di choi bong ro!");
    console.log("di choi da bong!");
    break;
  case "mua":
    console.log("di choi va mang theo ao mua!");
    break;
  case "mua":
    console.log("di choi va mang theo ao mua!");
    break;
  case "mua":
    console.log("di choi va mang theo ao mua!");
    break;
  case "mua":
    console.log("di choi va mang theo ao mua!");
    break;
  default:
    console.log("phai di hoc thoi, ko nghi dk!!!");
}

/**
 * Switch case cần biết trước kết quả của một số trường hợp.
 * Switch viết code ngắn hơn khi có nhiều trường hợp rẽ nhánh khác nhau.
 */

for (let i = 0; ; ) {
  if (i > 5) {
    break;
  }
  /* block of code */
  i++;
  console.log("gia tri cua i: ", i);
}

/**
 *  for (khao bao 1 bien dem; dieu kien de thoat khoi vong lap; buoc nhay cua vong lap) {
      code trong vong lap
    }
    For áp dụng khi chúng ta lặp mà đoán biết trước được điểm dừng
    Flow trong vòng lặp for:
    1. Khới tạo một biến đếm có gía trị ban đầu
    2. Kiểm tra điều kiện
    3. Đúng -> Thực hiện khối lệnh
    4. Áp dụng bước nhảy
    5. Quay lại bước số 2
 * 
 */

let i = 0;
while (i < 10) {
  // chua can biet thuc hien nhung cong viec gi,
  //  phai code ngay buoc nhay va dieu kien truoc de vong lap khong roi vao vo tan!!! ^.^
  console.log(i);
  // i + 5;
  // nhung thao tac, cau lenh se lam thay doi gia tri cua bien dem
  i++; // buoc nhay tao ra mot dieu kien ma khong biet truoc diem dung
}
