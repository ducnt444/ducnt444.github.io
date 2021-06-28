
//Viết hàm tạo một số ngẫu nhiên từ 0 đến n. VD rand(10) => 8

/* let randomUp10 = function(n) {
  return Math.floor( Math.random() * Math.floor(n) );
  //dùng math.random để tạo 1 số ngẫu nhiên từ 0 đến 1, sau đó nhân với n (dùng Math.floor lên n để làm tròn trong trường hợp input không phải là số nguyên). Max của Math.random là 1 nên kq tối đa sẽ là n. Sau đó làm tròn kq trên để láy số nguyên.
}

console.log( randomUp10(15) ); */

//Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác.

/* let convert = function(num, base, target) { 
  //hàm nhận 3 arguments: num = số cần chuyển, base = cơ số ban đầu, target =cơ số chuyển đến
  return parseInt(num.toString(), base).toString(target);
  // 2 bước: dùng ParseInt để xác định cơ số ban đầu của num và dùng toString để chuyển kq thu được sang cơ số mới
  // bước 1.1: do ParseInt chỉ có thể nhận vào 1 string, cần chuyển num sang dạng string với .toString()
  // bước 1.2: ParseInt có tham số thứ hai để xác định cơ số ban đầu của string, cài giá trị ở đây là base
  // bước 1.3: áp ParseInt(num + "", base), sẽ trả về 1 số nguyên
}

console.log(convert(255, 10, 16)); */

//Viết hàm tạo một số ngẫu nhiên trong khoảng từ a -> b. VD rand(10, 100); => 34

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  //Math.random sẽ cho ra 1 số từ 0 đến "gần 1", đem nhân với hiệu 2 số để nhận 1 giá trị trong khoảng đó (Math.random không thể = 1 nên kq sẽ không thể = max). Sau đó + min để trong trường hợp Math.random = 0 thì kq tối thiểu sẽ = min)
}
console.log(rand(13, 15)); */

//Viết hàm tạo mã màu HEX ngẫu nhiên. VD hex() => "fea34f"

console.log((Math.random() * 16581375).toString(16));

//Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: "hello world" => "Hello World"

/* function capitalize(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(capitalize('cộng hòa Xã hội chủ nghĩa việt nam')); */

//Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD "Hello World" => "hello-world"

/* function paramaterize(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return 
}

console.log(paramaterize('Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam')); */

//Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: "Hello     world   !   " => "Hello world !"

/* function removeSpaces(str) {
  let arr = str.split(" ");
  return arr.join(" ");
}

console.log(removeSpaces('Hello     world   !   ')); */

//Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD "aBcD" => "AbCd"



//Viết hàm lặp chuỗi n lần. VD "Hehe", 3 => "HeheHeheHehe"

/* function duplicate(str, n) {
  let copy = str.slice();
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += copy;
  }
  return result;
}

console.log(duplicate("Hehe", 3)); */

//Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD "ac", "b", 1 => "abc"

/* function add(str, whatToAdd, whereToAdd) {
  return str.substring(0, whereToAdd) + whatToAdd + str.substring(whereToAdd);
}

console.log(add("abcde", "f", 5));
 */

//Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD "abcdef", 2 => "ab…";

/* function subString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return `${str} không dài hơn ${maxLength} ký tự`
} 

console.log(subString("abcdef", 6)); */


//Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD "abcaacafgga", "a" => 2

/* function countIt(str, whatToCount) {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == whatToCount) {
      count += 1;
    }
  }
  return count;
}

console.log(countIt("abcaacafgga", "a")); */

//Viết hàm cắt chuỗi theo số từ chỉ định. VD "My name is Ba", 2 => "My name"

/* function cutWord(str, numOfWord) {
  let result = [];
  let arr = str.split(" ");
  for (let i = 0; i <= numOfWord - 1; i++) {
    result.push(arr[i])
  }
  return result.join(" ");
}

console.log(cutWord("My name is Ba", 2)); */

//Viết hàm tạo chuỗi GUID ngẫu nhiên với độ dài 32 ký tự. VD "sfjh2ih4(U#%(kljo423oiir*(#%UIOJ"

/* function GUID32Generator() {
  let result = "";
  let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`.;<>,|\{}[]-=?/_+"
  for (let i = 0; i <= 31; i++) {
    result += list.charAt( Math.floor( Math.random() * list.length ) );
  }
  return result;
}

console.log(GUID32Generator())
 */

//Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: "ad" => "be"

/* function unicodeConverter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    var x = str.charCodeAt(i);
    result += String.fromCharCode(x + 1);
  }
  return result;
}

console.log(unicodeConverter("ad")); */

let arrTest = [0, 2, 9, 5, 7, 2, 5]

//Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

/* function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length
}

console.log(average(arrTest));
 */

//Cho một mảng số, viết hàm tìm index của một số trong mảng

/* function indexFinder(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i
    }
  }
}
console.log(indexFinder(arrTest, 4));
 */

//Viết hàm sao chép một mảng số

/* function arrDuplicator(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i]
  }
  return copy;
}
console.log(arrDuplicator(arrTest)); */

//Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng

/* function biggest(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(biggest(arrTest)); */

//Viết hàm đổi chỗ vị trí 2 phần tử trong mảng

/* function swap(arr, firstItem, secondItem) {
  let x = arr[firstItem];
  let y = arr[secondItem];
  arr[firstItem] = y;
  arr[secondItem] = x;
  return arr;
}
console.log(arrTest);
console.log(swap(arrTest, 1, arrTest.length-2)); */

//Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng

/* let arrTest2 = [0, 1, 2, 3, 4, 5];
function secondBiggest(arr) {
  return arr[arr.length-2];
}
console.log(secondBiggest(arrTest2)); */

//Viết hàm tìm số lần xuất hiện lớn nhất của một phần tử trong mảng



//Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định. VD "Hello", 2 => ["He", "ll", "o"]



//Viết hàm tách một chuỗi thành một mảng các chuỗi con. VD "dog" => ["d", "do", "dog", "og", "g"]



//Cho một mảng số, viết hàm loại bỏ số trùng lặp trong mảng. VD [1,2,2,3] => [1,2,3]

/* function removeDuplicate(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (!copy.includes(arr[i])) {
      copy[i] = arr[i];
    }
  }
  return copy;
}
console.log(removeDuplicate(arrTest)); */


//Viết hàm trả về một mảng lưu dãy số Fibonacci từ 0 -> n. VD 8 => [0, 1, 1, 2, 3, 5, 8, 13]

/* function fibonacciGenerator(length) {
  let result = [0, 1];
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= length -1; i++) {
    result[i] = a + b
    a = b;
    b = result[i];
  }
  return result;
}

console.log(fibonacciGenerator(8)); */

//Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3]



//Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]



//Viết hàm loại bỏ các giá trị "false" khỏi mảng. VD [null, 1, 0, NaN, ""] => [1]

/* function noFalse(arr) {
  let  = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result = arr.splice(i, 1)
    }
  }
  return result;
}

console.log(noFalse([null, 1, 0, NaN, ""])); */

//Viết hàm sắp xếp một mảng số nguyên

function positioned(arr) {
  let result = [];
  result[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] < arr[i]) {
      result.unshift(arr[i])
    } else if (arr[i-1] > arr[i]) {
      result.push(arr[i])
    }
  }
  return result;
}
console.log(arrTest);
console.log(positioned(arrTest));

//Viết hàm sắp xếp một mảng "string"



//Cho một mảng object user [{name: "Ba", age: 28}, {name: "Bon", age: 3}, …] Viết hàm sắp xếp mảng user tăng dần theo age



//Tương tự, viết hàm sắp xếp mảng user theo name.length



//Viết hàm sắp xếp mảng user theo name



//Cho một mảng số, và một số n, tìm trong mảng vị trí 2 phần tử có tổng bằng n, kết quả trả về là một mảng lưu vị trí 2 phần tử, hoặc mảng rỗng nếu không tìm thấy



//Viết hàm lấy một phần tử ngẫu nhiên trong mảng



//Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)



//Viết hàm biến một một mảng 2 chiều thành mảng 1 chiều.
//VD [[1,2,3],[3,4,5] => [1,2,3,3,4,5]



//Viết hàm biến một mảng nhiều chiều (3 hoặc nhiều hơn) thành mảng một chiều


