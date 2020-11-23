
/* function double(obj) {
  for (var x in obj) {
    if (typeof (obj[x]) === "number") {
      obj[x] = obj[x] * obj[x];
      console.log(obj[x]); 
    }
  }
}  

let test = {
  age: 30,
  address: 50,
  place: "HN" 
}

double(test); */


/* function copy(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
}

let obj1 = {
  name: "Duc",
  age: 27,
};

let obj2 = {};

copy(obj2, obj1);

console.log(obj1, obj2);

obj2["age"] = 28;
console.log(obj1, obj2);

obj1["age"] = 30;
console.log(obj1, obj2); */

/* let user = {
  name: "Duc",
  age: 27,
  home: "HN",
  hi() {console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi, den tu ${this.home}`)},
  getKey() {
    for (let key in this) {
      if (typeof this[key] != "function") {
        console.log(key);
      } else {
        console.log(`${key}()`);
      }
    }
  },
  getValues() {
    for (let key in this) {
      if (typeof this[key] != "object" && typeof this[key] != "function") {
        console.log(this[key]);
      }  
    }
  }
};


user.getKey();
user.hi();
user.getValues(); */

/* function Player(name, level, baseDamage) {
  this.name = name;
  this.level = level;
  this.baseDamage = baseDamage;

  this.attack = function () {
    return this.baseDamage * this.level;
  }
};

let a = new Player("duc", 40, 50);
console.log(a.attack());

let b = new Player("vn", 450, 10);
console.log(b.attack()); */

/* function cut(str, end) {
  return str.slice(0, end+1);
};

console.log(cut("abcd", 2)); */

/* function shortHand(str) {
  var last = str.lastIndexOf(" ");
  return str.slice(0, last + 2) + "."
}

console.log(shortHand("Duc Nguyen")); */

/* function email(str) {
  var last = str.lastIndexOf("@");
  return str.slice(0, 3) + "..." + str.slice(last);
}

console.log(email("Duc Nguyen@gmail.com")); */

let arr = [0, 2, 4, 6];

function funcArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}
console.log(funcArr(arr));

function funcArr2(arr) {
  let sum2 = 0;
  let result;
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }
  result = sum2/arr.length;
  return result;
}
console.log(funcArr2(arr));

function funcArr3(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return "not found"
}
console.log(funcArr3(arr, 4));

