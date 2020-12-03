

//Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.

function USDtoVND(usd) {
  return `${usd} USD = ${usd * 23000} VND`;
}

/* console.log(USDtoVND(10));
console.log(USDtoVND(100));
console.log(USDtoVND(1000)); */


//Viết hàm tính thể tích hình cầu, tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).

function sphereVolume(radius) {
  return `Thể tích hình cầu có bán kính = ${radius} là ${(4/3) * Math.PI * (Math.pow(radius, 3))}`
}

/* console.log(sphereVolume(10));
console.log(sphereVolume(30)); */


//Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sumBetween(num1, num2) {
  if (num1 == num2) {
    return 0;
  } else {
    let resultArr = [];
    let arr = [num1, num2];
    arr.sort((a, b) => a - b);
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      resultArr.push(i);
    }
    return resultArr.reduce((sum, items) => sum + items);
  }

}

/* console.log(sumBetween(-1, -1))
console.log(sumBetween(5, -1))
console.log(sumBetween(24144124, 655)) */


//Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function sumDivisor(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result += i;
    }
  }
  return result;
}

/* console.log(sumDivisor(100));
console.log(sumDivisor(1));
console.log(sumDivisor(124141));
 */