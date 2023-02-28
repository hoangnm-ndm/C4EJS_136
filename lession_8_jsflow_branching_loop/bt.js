/**
 * ### Bài 1

Viết chương trình in ra các số từ 1 đến n

### Bài 2

Viết chương trình in ra màn hình các số từ n đến 1

### Bài 3

Viết chương trình in ra màn hình các số chia hết cho 5 trong khoảng từ 5 đến n

### Bài 4

Viết chương trình nhập vào số nguyên dương n. Và đếm xem n có bao nhiêu ước số
Note: Ước của một số là những số mà số ấy chia hết.
ex: ước của 6 là 1, 2, 3, 6 -> 6 có 4 ứơc số.

### Bài 5

Số hoàn hảo. Số hoàn hảo là số mà tổng các ước của nó bằng chính nó (trừ chính nó). Viết chương trình nhập vào 1 số và kiểm tra xem đó có phải số hoàn hảo hay không?


*/

// Bai 1:
// for (x = 0; x < 100; ) {
//   x++;
//   console.log("Gia tri cua x: ", x);
// }

// Bai 2:
// for (i = 100; i > 0; i--) {
//   console.log(i);
// }

// Bai 3:
// Viết chương trình in ra màn hình các số chia hết cho 5 trong khoảng từ 5 đến n
// let n = 71;
// for (i = 1; i < n; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

function KiemTraChiaHet5(number) {
  // khoi lenh
  for (i = 1; i < number; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}

KiemTraChiaHet5(20);
KiemTraChiaHet5(71);
KiemTraChiaHet5(100);

/**
 * Bai 4:
 * Viết chương trình nhập vào số nguyên dương n. Và đếm xem n có bao nhiêu ước số
Note: Ước của một số là những số mà số ấy chia hết.
ex: ước của 6 là 1, 2, 3, 6 -> 6 có 4 ứơc số.
 */
function UocCuaSo(number) {
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

UocCuaSo(10);

console.log("Bài tập 4: ");
function Uoc(Number) {
  let dem = 0; // khoi tao mot bien dem có giá trị ban đầu = 0.
  for (i = 1; i <= Number; i++) {
    if (Number % i == 0) {
      console.log(i);
      dem++;
    }
  }
  console.log("Số ước: " + dem);
}

function DemSoUoc(Number) {
  let dem = 0; // khoi tao mot bien dem có giá trị ban đầu = 0.
  for (i = 1; i <= Number; i++) {
    if (Number % i == 0) {
      console.log(i);
      dem++;
    }
  }
  return dem;
}

// Uoc(100);
console.log(`So uoc cua 50 la: `, DemSoUoc(50));

/**
 * Bài 5
Số hoàn hảo. Số hoàn hảo là số mà tổng các ước của nó bằng chính nó (trừ chính nó). Viết chương trình nhập vào 1 số và kiểm tra xem đó có phải số hoàn hảo hay không?
 */

// Bai cua DangLe
// function soHoanHao(number) {
//   dem = 0; // Sum
//   for (let i = 0; i > number; i++) {
//     if (number % i === 0) {
//       dem += i;
//     }
//   }
//   if (dem === number) {
//     console.log(number, " là số hoàn hảo");
//   }
// }

// soHoanHao(12);

// Bai cua Luong Tai

function Timsohoanhao(Number) {
  let tong = 0;
  for (i = 1; i < Number; i++) {
    if (Number % i === 0) {
      tong = tong + i;
      console.log(i);
    }
  }
  if ((tong === Number) & (Number !== 0)) {
    console.log(Number + " là số hoàn hảo");
  } else {
    console.log(Number + " ko là số hoàn hảo");
  }
}

Timsohoanhao(6);

// Bai cua LeChiNguyen
function SoHoanHao(Number) {
  let tongcuauoc = 0;
  for (i = 0; i < Number; i++) {
    if (Number % i == 0) {
      tongcuauoc += i;
    }
  }
  if (tongcuauoc === Number) {
    console.log(Number + " la so hoan hao");
  } else {
    console.log(Number + " Khong phai la so hoan hao");
  }
}
SoHoanHao(-6);

/**
 * 1. Test tất cả các case (cả những trường hợp đúng và trường hợp sai, trường hợp input không chính xác)
 */

//BT 6:
// Right-angled triangle

// Nhập vào một số n và in ra màn hình theo định dạng sau:

// rightAngledTriangle(4);

function rightAngledTriangle(number) {
  let myString = "";
  for (let i = 0; i < number; i++) {
    myString += "@@";
    // myString = myString + '#'
    console.log(myString);
  }
}

rightAngledTriangle(4);
