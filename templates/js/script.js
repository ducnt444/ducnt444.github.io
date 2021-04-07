let arr1 = [
  {"id":1,"name":"Nguyễn Trung Đức","gender":"Nam","birthday":"19/05/1993","phone":"039-749-6263","email":"test","password":"123"},
  {"id":2,"name":"Clerc Sawkins","gender":"Nữ","birthday":"17/04/1994","phone":"242-176-3329","email":"csawkins1@hud.gov","password":"9rM6fDllAQOk"},
  {"id":3,"name":"Joye Barkly","gender":"Nữ","birthday":"09/01/1979","phone":"587-196-3478","email":"jbarkly2@oakley.com","password":"TT6g3GT"},
  {"id":4,"name":"Charlie Hodgets","gender":"Nam","birthday":"19/03/1996","phone":"868-465-6388","email":"chodgets3@bandcamp.com","password":"PDJ79T"},
  {"id":5,"name":"Starla Maypother","gender":"Nữ","birthday":"01/03/1979","phone":"456-938-5176","email":"smaypother4@mail.ru","password":"hWwici7iaE"}
]

let arr2 = [1, "abc", "34", 99, "def"]

//1. Chuyển mảng -> string, ngăn cách tùy ý
console.log("Base aray: " + arr2)

console.log(_.last([1, "abc", "34", 99, "def"]))
console.log(_.chunk([1, "abc", null], 2))
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))