

/* function isPrime(n) {
  if (n <= 1 || isNaN(n)) {
    console.log(`Sai du kien`);
  } else if (n == 2 || n ==3) {
    return `true`;
  } else {
    for (let i = 2; i <= n/2; i++) {
      if (n % 2 == 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(9)); */

/* let x = (n) => {
  if (n <= 1 || isNaN(n)) {
    return false;
  } 
  for (let i = 2; i <= n/2; i++) {
      if (n % i == 0) {
        return false;
      }
  } 
  return true;
} */

/* console.log(x(9)); */

/* let isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n/2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(9)); */

/* for (let i = 0; i < 5; i++) {
  console.log(i);
}
 */

/* let myDad = {};
myDad.name = "Tho";
myDad.age = 58;


let me = {
  name: "duc",
  age: 27,
  dad: myDad
}

let x = (obj) =>
  console.log(`Ten: ${obj["name"]}, Tuoi: ${obj["age"]} Cha: ${obj["dad"]} `);

x(me);
 */

 


let user = {};
while (true) {
  let key = prompt("nhap key", "");
  if ( key === null || key === "") {
    break;
  }
  let value = prompt("nhap value", "");
  user[key] = value;
}

for (let x in user) {
  console.log(x + ": " + user[x])
}


