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
 * Viết chương trình nhập vào số nguyên dương n. Và đếm xem n có bao nhiêu ước số
Note: Ước của một số là những số mà số ấy chia hết.
ex: ước của 6 là 1, 2, 3, 6 -> 6 có 4 ứơc số.
 */
