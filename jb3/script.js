

/* let age = 0; //NaN
while (age <= 16) {
  age = +prompt("Ban tuoi gi?", "");
  if (age < 16) {
    alert("no no no");
  }
} */

/* let age;

do {
  age = +prompt("Nhap tuoi", "");
  if (age <= 16) {
    alert("no no no");
  }
} while (age <= 16); */

/* for (let i = 0, j = 0; i < 10 && j < 5; i++, j++) {
  console.log(i + " " + j);
} */

/* let a = 0;
for (let i = 1; i < 101; i++) {
  a += i;
}
alert(a);  */

/* let a = 0, count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 != 0) {
    a += i;
    count ++;
  }
}
console.log(a / count);
 */

/* for (let i = 3; i < 101; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}  */

let result = 0, count = 0
for (let i = 3; i < 101; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    result += Math.pow(i, 2);
    count++
  }
} 
console.log(result / count)



