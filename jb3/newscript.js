
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

let a = +prompt(`Nhập một số`, "");
let x = a
let y = a
if (a === 0)
while (y <= a && y > 0) {
  x *= (y-1);
}
console.log(x);