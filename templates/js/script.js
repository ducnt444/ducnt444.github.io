/* --------------------------------------------------
Mảng 
-------------------------------------------------- */
let arr1 = [
  {
    id: 1,
    name: "Nguyễn Trung Đức",
    gender: "Nam",
    birthday: "19/05/1993",
    phone: "039-749-6263",
    email: "test",
    password: "123",
  },
  {
    id: 2,
    name: "Clerc Sawkins",
    gender: "Nữ",
    birthday: "17/04/1994",
    phone: "242-176-3329",
    email: "csawkins1@hud.gov",
    password: "9rM6fDllAQOk",
  },
  {
    id: 3,
    name: "Joye Barkly",
    gender: "Nữ",
    birthday: "09/01/1979",
    phone: "587-196-3478",
    email: "jbarkly2@oakley.com",
    password: "TT6g3GT",
  },
  {
    id: 4,
    name: "Charlie Hodgets",
    gender: "Nam",
    birthday: "19/03/1996",
    phone: "868-465-6388",
    email: "chodgets3@bandcamp.com",
    password: "PDJ79T",
  },
  {
    id: 5,
    name: "Nguyễn Trung Đức",
    gender: "Nữ",
    birthday: "01/03/1979",
    phone: "456-938-5176",
    email: "smaypother4@mail.ru",
    password: "hWwici7iaE",
  },
];

//1. Chuyển mảng -> string, ngăn cách tùy ý
let arr2 = [1, "abc", "34", 99, "def"];
/* console.log("Join: " + _.join(arr2, "-")); */

//2. Lấy item cuối cùng của mảng
/* console.log("Last: " + _.last(arr2)); */

//3. Tách 1 mảng thành các mảng nhỏ có tối đa n phần tử từ mảng gốc
/* console.log(_.chunk(arr2, 4)); */

//4. MODIFY Ghi đè lên các phần tử (start -> before end) 
let fillArr = ["cb", 1, null, "opd", undefined]
/* console.log(_.fill(fillArr, 2)); */

//5. Tìm (index của) item đầu tiên trong mảng phù hợp điều kiện 
/* console.log("Index of first item has 'name' == 'Nguyễn Trung Đức' in arr1: " + _.findIndex(arr1, (array) => {
  return array.name == "Nguyễn Trung Đức"
})); */

//Bỏ đi n item, tính từ index [0]
let arrDrop = ["abc", 2, "def", true];
/* console.log(_.drop(arrDrop, 2));
 */

//Bỏ đi n item, tính từ index [.length-1]]
let arrDropRight = ["abc", 2, "def", true]
/* console.log(_.dropRight(arrDropRight, 2));
 */
//Bỏ đi các giá trị falsey: false, null, 0, "", undefined, NaN 
let falseyArr = [0, 1, null, undefined, "abc", "", true, false, NaN]
/* console.log(_.compact(falseyArr)) */

//Nối thêm items vào array
let concatArr = ["ac", 1, 0]
/* console.log(_.concat(concatArr, [2, 4, "à"]))
console.log(_.concat(concatArr, 1, 9))
 */
//Tìm ra các items array A có mà array B không có
let arrayA = [1, "ac", true, 0]
let arrayB = [5, "acd", true, 0]
/* console.log(_.difference(arrayA, arrayB)); */

let arrayC = [1, 3, 4.3, 4.4, 4.6];
let arrayD = [4, 6];
/* console.log(_.difference(arrayC, arrayD));
console.log(_.differenceBy(arrayC, arrayD, Math.floor)) */

let arrayE = [
  {name: "Nguyễn Trung Đức", age: 28},
  {name: "Nguyễn Trung A", age: 28},
  {name: "Nguyễn Trung B", age: 15},
  {name: "Nguyễn Trung C", age: 18},
]

let arrayF = [
  {name: "Nguyễn Trung Đức", age: 20},
  {name: "Nguyễn Trung A", age: 21},
  {name: "Nguyễn Trung Đức", age: 30},
  {name: "Nguyễn Trung C", age: 18},
]

/* console.log(_.differenceBy(arrayE, arrayF, "age")) //các object ở arrayE có .age unique mà arrayF không có
 */
let arrayG = [
  {name: "John", age: "30"},
  {name: "Walker", age: "35"},
  {name: "ABD", age: "25"}
];

let arrayH = [
  {name: "James", age: "19"},
  {name: "OP", age: "90"},
  {name: "Walker", age: "35"}
];

/* console.log(_.differenceWith(arrayG, arrayH, _.isEqual))// Các object unique ở array G mà arrayH không có */