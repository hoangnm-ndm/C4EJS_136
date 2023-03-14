/**
 * Callback: Hàm gọi lại.
 * Khi chúng ta truyền một hàm vào làm tham số của hàm khác, ta gọi tham số đó là callback
 */

/**
 * array.map()
 * 1. Nhận vào đối số là một function.
 * 2. Không làm thay đổi mảng gốc.
 * 3. Có trả về một mảng mới
 */
const arr = [1, 2, 3];
const arr2 = arr.map(function (item) {
  return item * 2;
});
console.log(arr2); // [2, 4, 6]
console.log(arr); // [1, 2, 3]

/**
 * array.forEach()
 * 1. Nhận vào đối số là một function.
 * 2. Không làm thay đổi mảng gốc
 * 3. Khôn trả về mà chỉ duyệt qua từng phần tử của mảng
 */
const newArray = arr.forEach((item) => item * 2);
console.log("newArray: ", newArray);

/**
 * arr.filter()
 * 1. Nhận vào đối số là một function
 * 2. Không làm thay đổi mảng gốc
 * 3. Luôn trả về một mảng (khi không có phần tử thoả mãn thì trả về mảng rỗng.)
 */
const diemCuoiKy = [3, 4, 5, 6, 2, 6, 8, 9, 10];

const diemCao = diemCuoiKy.filter((diem) => diem > 100);
console.log(diemCao);

/**
 * arr.find()
 * 1. Dung de tim kiem
 * 2. Nhưng chỉ trả ra 1 item đầu tiên thoả mãn điều kiện
 * 3. Khi không có item thoả mãn điều kiện -> trả về undefined
 */
const diemCao2 = diemCuoiKy.find((diem) => diem > 100);
console.log(diemCao2);
