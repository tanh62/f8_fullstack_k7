console.dir(document);
console.dir(document.body);
console.dir(document.head);
document.title = "Hello";

//Tạo Element Node --> truy cập vào thẻ Html để trả về object
var title = document.getElementById("title")
console.log(title);

var titleList = document.getElementsByClassName("title");
console.log(titleList);

var titleList = document.getElementsByTagName("h2");
console.log(titleList);

var title = document.querySelector('#title');
console.log(title);

var titleList = document.querySelectorAll("#title");
console.log(titleList);
Array.from(titleList).map(function (item) {
    console.log(item);
});


//DOM HTML