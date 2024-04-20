//comment JS


/*
comment nhiều dòng
comment nhiều dòng */

//Khai báo biến: (đặt tên theo quy tắc CamelCase)
var user;
var customer;
var userId, username, email, userEmail;
var course = 'Fullstack Offline';
age = 32;


// Lưu ý : nếu một biến được khai báo nhưg không gán giá trih --> thì giá trị mặc đíngj sẽ là underfined//

console.log(user);
console.log(course);


//Hiển thị nội dung lên trình duyệt
document.write("");

//Dùng DOM (học sau)
document.body.innerHTML = "Học JS";

//lưu ý: nội dung hiển thị lên trình duyệt có thể là thẻ HTML
document.write(course);

// var welcome = "<h2> Khóa học " + course + " Fullstack Offline tại F8</h2>";
// welcome = welcome + "<h3>F8</h3>"

//năm 2015, js có bổ sung cú pháp mới để thay thế dấu nháy đơn và kép
//Backtick : ``
var welcome = `<h2> Khóa học ${course} fullstack tại f8 </h2>
<h3>F8</h3>`

document.write(welcome);

//lưu ý : biến trong JS có 2 cách khai báo khác: let, const --> học sau