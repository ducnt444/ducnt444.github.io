
/* let arrTest = [3, 14, 12, 0, 5, 1314]

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach( arrTest, (each) => console.log(each * each) ); */

/* let obj = [
  { name: "Duc", age: 27, place: "HN" },
  { name: "Duc2", age: 28, place: "HN2" },
  { name: "Duc3", age: 31, place: "HN" },
];

function filter(arr, conditionCallback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (conditionCallback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log( filter(obj, (each) => each.age > 30) ); */

let num = [4, 9, 16, 25];

function map(arr, everyCallback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    everyCallback(arr[i]);
    result.push( everyCallback(arr[i]) );
  }
  return result;
}

console.log( map( num, (each) => Math.sqrt(each) ) );

function reduce(arr, reducerCallback, initialValue) {
  let last = initialValue === undefined ? arr[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
    last = reducerCallback(last, arr[i], i, arr)
  }
  return last;
}

console.log( reduce( num, (last, value) => last += value ) );

let a = new Date();

function isValidDate(value) {
  return new Date(value).toString() != "Invalid Date"
}

function dayConverter(day) {
  let weekday = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  return weekday[a.getDay()];
}
console.log(dayConverter(a));

function yesterday(today) {
  return newDate(Date.now() - 86400000)
}

console.log(yesterday(a));