
//Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

/* function CtoF(celsius) {
  if (isNaN(celsius) || celsius === undefined || celsius === null) {
    return `${celsius} không phải là dữ liệu hợp lệ`;
  } else if (celsius < -273.17) {
    return `Giá trị không thể thấp hơn độ không tuyệt đối (-273.17 độ C)`
  }
  return celsius * (9 / 5) + 32
}

console.log(CtoF(-30));
console.log(CtoF(0));
console.log(CtoF(-300));
console.log(CtoF()); */

//Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

/* function secondBiggest(arr) {
  if (arr.length <= 2) {
    return "Độ dài mảng phải lớn hơn 2"
  } else {
    let result = "(Các) Số lớn thứ nhì trong mảng là";
    let min;
    let temp = arr.sort((a, b) => b - a);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] != temp[0]) {
        min = temp[i];  //có thể return min ngay tại đây nếu chỉ cần 1 số
        break;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == min) {
        result += " " + arr[i];
      }
    }
    return result; 
  }
}

let testArray1 = [1, 0]
let testArray2 = [-100, 40, 1, -5, -25, 10, -25, 1, 10, 40, 10]
let testArray3 = [40, -100, -5, 1, 10, -25, 1, -25, 40, 40, 9.5]
console.log(secondBiggest(testArray1));
console.log(secondBiggest(testArray2));
console.log(secondBiggest(testArray3)); */

//Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.

/* function longestString(arr) {
  let temp = arr[0].length;
  let result = "(Các) Chuỗi có độ dài lớn nhất là:";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > temp) {
      temp = arr[i].length;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length == temp) {
      result += " " + arr[i];
    }
  }
  return result;
}

let testArray4 = ["abc", "z", "efgh", "xy", "zyz", "x", "ijkl", "mnop"];
let testArray5 = ["abc", "z", "efgh", "xy", "zyz", "x", "ijkl", "mnoppqrst"];
console.log(longestString(testArray4));
console.log(longestString(testArray5)); */

//Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

/* function stringCheck(string, target) {
  if (string.substr(- target.length) == target) {
    return true;
  } else {
    return false;
  }
}

let testString1 = "abcdef";

let testTarget1 = "def";
let testTarget2 = "ef";
let testTarget3 = "f";
let testTarget4 = "ab";
let testTarget5 = "b";

console.log(stringCheck(testString1, testTarget1))
console.log(stringCheck(testString1, testTarget2))
console.log(stringCheck(testString1, testTarget3))
console.log(stringCheck(testString1, testTarget4))
console.log(stringCheck(testString1, testTarget5))
 */

//Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

/* function dupeChecker(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
  }
  return false;
}
let testArray5 = ["abc", "z", "abc", true, 0, 1, "ijkl"];
let testArray6 = ["abc", "z", false, false, 0, 1, "ijkl"];
let testArray7 = ["abc", "z", 0, true, 0, 1, "ijkl"];
let testArray8 = ["abc", "z", true, 0, 1, "ijkl"];

console.log(dupeChecker(testArray5));
console.log(dupeChecker(testArray6));
console.log(dupeChecker(testArray7));
console.log(dupeChecker(testArray8)); */