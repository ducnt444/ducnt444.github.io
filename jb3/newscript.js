
//Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100

/* let a = +prompt("Nhập một số, từ 0 - 100", "");
if (isNaN(a) || a < 0 || a > 100) {
  alert(`Sai dữ kiện`);
} else if (a % 3 == 0 && a % 5 == 0) {
  alert("FizzBuzz");
} else if (a % 3 == 0) {
  alert("Fizz");
} else if (a % 5 == 0) {
  alert("Buzz");
} else {
  alert("BuzzFizz");
} */

//Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000

/* let result = 0;
for (let i = 15; i < 1001; i+=15) {
  if (i % 3 == 0 && i % 5 == 0) {
    result += i;
  }
}
console.log(result); */

// Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không

/* let a = +prompt(`Nhập một số`, "");

/* for (let i = 2; i < a; i++) {
  if (a % i == 0) {
    console.log(`${a} không phải là số nguyên tố`);
  }
}
 */

/* if (isNaN(a)) {
  console.log(`Sai dữ kiện`);
} else {
    loop1: for (let i = 2; i < a; i++) {
      if ( a % i !== 0) {
        console.log(`${a} không phải là số nguyên tố`);
        break loop1;
      }
    }
} */

//Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)

/* for (let i = 10; i >= 1; i--) {
  let s = "";
    for (let j = 1; j <= 10; j++) {
      s += String(i * j).padStart(4);
    }
    console.log(s);
  } */
  
//Viết chương trình cho phép nhập vào một số, in ra số đầu tiên và cuối cùng của số đó (VD: 12345 => 15)

/* let a = +prompt(`Nhập một số tối thiểu có 3 chữ số`, "");

if (isNaN(a) || a < 100) {
  console.log(`Sai dữ kiện`);
} else {
  let original = a;
  let last = a % 10;
  let first;
  while (a >= 10) {
    a /= 10;
  }
  if (1 < a && a < 2) {
    first = 1;
  } else if (2 < a && a < 3) {
    first = 2;
  } else if (2 < a && a < 3) {
    first = 2;
  } else if (3 < a && a < 4) {
    first = 3;
  } else if (4 < a && a < 5) {
    first = 4;
  } else if (5 < a && a < 6) {
    first = 5;
  } else if (6 < a && a < 7) {
    first = 6;
  } else if (7 < a && a < 8) {
    first = 7;
  } else if (8 < a && a < 9) {
    first = 8;
  } else if (9 < a) {
    first = 9;
  }
  console.log(`Số đầu tiên và cuối cùng của ${original} là ${first} và ${last}`)
}  */

// Viết chương trình cho phép nhập một số, kiểm tra xem số đó có phải là số Palindrome hay không (Số Palindrome là số đối xứng) (VD: 141 => true, 123 => false)

//Viết chương trình cho phép nhập một số, tính giai thừa của số đó
/* 
let a = +prompt(`Nhập một số`, "");
let x = a
let y = a
if (a === 0 || a === 1) {
  console.log(`${a}! = 1`)
} else if (isNaN(a)) {
  console.log(`${a} không phải là số`)
} else {
  while (y > 1) {
    y--;
    x *= y;
  }
  console.log(`${a}! = ${x}`);
}
 */

//Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Armstrong hay không (Số Armstrong là số bằng tổng lập phương của tất cả các chữ số của nó) (VD: 371 = 3*3 + 7*3 + 1*3 => true, 123 != 1*3 + 2*3 + 3*3 => false)

//Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Perfect hay không (Số n là số Perfect nếu n bằng tổng tất cả các số từ 1 đến n / 2) (VD: 6 = 1 + 2 + 3 => true)

//Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Strong hay không (Số Strong là số bằng tổng giai thừa các chữ số của nó) (VD: 145 = 1! + 4! + 5! => true)

//Viết chương trình cho phép nhập một số n, in ra dãy số Fibonacci trong khoảng từ 0 đến n (Dãy Fibonacci có số bắt đầu là 0, 1 hoặc 1, 1 và các số sau có tổng bằng 2 số trước đó cộng lại)

/* let nStart = +prompt(`Chọn số khởi đầu chuỗi Fibonacci (0 hoặc 1)`, "0");
let nLength = +prompt(`Chọn độ dài chuỗi Fibonacci`, "");

if (isNaN(nStart) || isNaN(nLength)) {
  console.log(`Nhập sai dữ kiện`);
} else if (nStart == 0) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= nLength; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
} else if (nStart == 1) {
  let a = 1;
  let b = 1;
  let c;
  for (let i = 1; i <= nLength; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
} */

//Viết chương trình cho phép nhập 2 số, tìm bội chung nhỏ nhất của 2 số đó

/* let a = +prompt(`Chọn số đầu tiên`, "0");
let b = +prompt(`Chọn độ thứ hai`, "");

if (isNaN(a) || isNaN(b)) {
  console.log(`Nhập sai dữ kiện`);
} else {
  loop1: for (let i = 1; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      console.log(`Bội chung nhỏ nhát của ${a} và ${b} là ${i}`);
      break loop1;
    }
  }
} */

//Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

/* let n = prompt(`Nhập một số`, "");

for (let i = 1; i <= n; i++) {
  var a = String(n);
  for (let j = 1; j < n; j++) {
    a += " " + String(n);
  }
  console.log(a);
} */

//Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)


//Hàm

// Viết hàm tính lập phương của một số

/* let a = +prompt(`Nhập một số`, "");

function pow3(a) {
  return console.log(`Lập phương của ${a} = ${a * a * a});
}
pow3(a);
 */

//Viết hàm tìm chu vi, diện tích hình tròn

function circle(radius) {
  return console.log(`Chu vi hình tròn là ${radius * 2 * 3.1416}`) 
}
circle(5);

function circleArea(radius) {
  return console.log(`Diện tích hình tròn là ${radius * radius * 3.1416}`) 
}
circleArea(5);


//Viết hàm tìm số lớn nhất giữa 2 số

//Viết hàm kiểm tra số Prime

//Viết hàm kiểm tra số Armstrong

//Viết hàm kiểm tra số Perfect

//Viết hàm kiểm tra số Strong

//Viết hàm kiểm tra số Palindrome

//Viết hàm tính số Fibonacci

//Viết hàm tính giai thừa