//Viết function cho phép nhập vào key và value tương ứng, gán key và value vào một object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng

//Thêm vào bài tập trên, sau khi nhập thông tin của object, in toàn bộ thông tin ra màn hình console

/* function myFunc() {
    let user = {}; 
    let a = prompt(`Nhập key`, "");
    let b = prompt(`Nhập value`, "");
    
    while (a != null && a != "") {
        user[a] = b;
        a = prompt(`Nhập key đi`, "");
        b = prompt(`Nhập value đi`, "");
    }
        
    return console.log(user);
}

myFunc() */


/* console.log("Viết hàm lấy liệt kê toàn bộ key của object");

let me = {
    firstName: "Duc",
    lastName: "Nguyen",
    age: 27,
    home: "HN"
}

function keyListing(obj) {
    for(var key in obj) {
        console.log(key);
    }
}

keyListing(me); */



//Viết hàm nhận 2 tham số, một là object, 2 là key, nếu key có tồn tại thì trả về giá trị của key đó, nếu không, trả về false. Sau đó, in ra màn hình giá trị trả về, nếu không có in ra “Không có ‘key’”.

/* let mee = {
    firstName: "Duc",
    lastName: "Nguyen",
    age: 27,
    home: "HN"
}

let keyChecker = function(obj, key) {
    if (obj[key] != undefined) {
        return obj[key];
    } else {
        return false;
    }
}

let keyShowcase = function
console.log( keyChecker(mee, "firstName") );
console.log( keyChecker(mee, "gái") );
 */

//Viết hàm để xóa một key trong object, hàm sẽ nhận 2 tham số, 1 là object, 2 là key cần xóa, hàm trả về giá trị của key sau khi xóa, hoặc false nếu key không tồn tại. In ra giá trị của key bị xóa, nếu không tồn tại, in ra “Không có key”

let meee = {
    firstName: "Duc",
    lastName: "Nguyen",
    age: 27,
    home: "HN"
}

let keyDeleter = function(obj, delkey) {
    if (obj[delkey] != undefined) {
        var save = obj[delkey];
        console.log(`Giá trị key bị xóa = ${save}`);
        delete obj[delkey];
        return obj;
    } else {
        console.log(`Không có key ${delkey}`);
        return false;
    }
}

console.log( keyDeleter(meee, "firstName") );
console.log( keyDeleter(meee, "gái") );
