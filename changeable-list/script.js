
function loadDoc() {
  //tạo
  let xhttp = new XMLHttpRequest();
  //code sẽ chạy khi lấy được dữ liệu từ server
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText); 
      let content = "";
      for (let i = 0; i < users.length; i++) {
        content += 
        `<tr>
          <td>${users[i].name}</td>
          <td>${users[i].birthday.substr(-4)}</td>
          <td>${users[i].email}</td>
          <td>${users[i].phone}</td>
          <td>
          <a class="btn btn--edit text-primary" href="details.html">
            <span> <i class="far fa-edit"></i> </span>
            <span class="ml-2">Chỉnh sửa</span>
          </a>
          <span>|</span>
          <button class="btn btn--delete text-danger">
            <span> <i class="fas fa-trash-alt"></i> </span>
            <span class="ml-2">Xóa</span>
          </button>
          </td>
        </tr>`;
      }
      $("tbody").html(content);
    }
  };
  
  //GET từ server
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
}

loadDoc();

