
//let name = prompt("Tên bạn là gì", "")
//let dob = prompt("Ngày sinh của bạn", "");
//let gender = prompt("Giới tính của bạn", "");
//let place = prompt("Nơi ở của bạn", "");

//confirm(`Xin hãy xác nhận: Bạn là ${name}, sinh ngày ${dob}, giới tính ${gender}, sống tại ${place}`);
/*
let a = 1, b = (a * 2) / 2, c = (a-- + b++), d = "-0";

console.log(a - b - c - d);
console.log(a + b - c + d);
console.log(a++ - b++/c * d);
console.log(--a + -b/c -d);
console.log(d - --a - ++b * c);
console.log(a++ + -d-- + --c - b++);
console.log(a-- + b++ - --c - ++d);
*/

/*
let a = prompt("Nhập tuổi", "");
alert(a % 2 === 0 ? `${a} là số chẵn` : `${a} là số lẻ`);
*/

let season = +prompt("Nhập tháng","");
switch (season) {
  case 12:
  case 1:
  case 2:
    alert(`Mùa đông`);
    break;
  case 3:
  case 4:
  case 5:
    alert(`Mùa xuân`);
    break;
  case 6:
  case 7:
  case 8:
    alert(`Mùa hè`);
    break;
  case 9:
  case 10:
  case 11:
    alert(`Mùa thu`);
    break;
  default:
    alert(`Sai rùi`)
}



