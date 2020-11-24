
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

//Viết hàm tạo mã màu HEX ngẫu nhiên. VD hex() => “fea34f”


//Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: “hello world” => “Hello World”

/* function capitalize(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(capitalize('cộng hòa Xã hội chủ nghĩa việt nam')); */

//Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD “Hello World” => “hello-world”

/* function paramaterize(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return 
}

console.log(paramaterize('Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam')); */

//Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: “Hello     world   !   ” => “Hello world !”

function removeSpaces(str) {
  let arr = str.split(" ");
  return arr.join(" ");
}

console.log(removeSpaces('Hello     world   !   '));