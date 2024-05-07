//Hàm là gì?
/*
-Là cú pháp trong lập tình giúp tách cá đoạn chương trình con thành lớp để tái sử dụng
-thể hiện là một chức năng ( động từ)
-đặt tên hàm theo quy tắc camelCase và sử dụng động từ
ví dụ: sum, getTotal, setMessage, getMessage, showUsers, makeMenu, bulidMenuTree,....
---Cú pháp:
Định nghĩa hàm : function tenham(..){
    Nội dung hàm
}
==> Tham số: arameters
funtion tenham(thamso1, thamso2, thamso3,...)
-gọi hàm
tenham(..)
tenham(doiso1, doiso2, doiso3,...)
==>Đối số: arguments

hàm có từ khoá return  --> hàm có giá trị trả về 
Khi từ khoá return được gọi --> các đoạn code bên dưới return không hoạt đông 


Biến toàn cục, : sử dụng phạm vị ngoài hàm
biến cục bộ: sử dụng ở phạm vị trong hàm

Trên thực tế: trong một hàm có thể gọi 1 hàm khác

Hàm ẩn danh (hàm không tên, anonymous function)
function(){
    Nội dung hàm
}
Lưu ý: hàm ẩn danh sẽ không gọi và định nghĩa được ( trừ khi gán vào một biến hoặc đưa vào tham số hàm khác )
*/

// function showMessage(msg, type = "error") {
//     console.log('Hoc JS khong kho');
//     console.log(msg);
//     return 2;
// }
// var a = showMessage('f8', 'success');//Lời gọi hàm chủ động
// console.log(a);
// function division(a, b) {
//     if (b !== 0) {
//         return a / b;                    //gọi hàm
//     }    
//     return "không tính được";
// }
// console.log(division(10, 2));
// console.log(division(10, 0));



//
// var a = 0;

// function getNumber() {
//     return a;
// }
// function setNumber(value) {
//     a = value;
// }
// setNumber(10);
// console.log(getNumber());

// function sum(a, b) {
//     var total = a + b;
//     return total;
// }
// console.log(sum(10, 20))

// function sum(a, b) {
//     return a + b;
// }
// function showResult() {
//     var total = sum(10, 20);
//     console.log(total);
// }
// showResult();

//expression function
var showMessage = function () {
    console.log('học lập trình không có');
}
showMessage();

//declaration function
// function showNumber() {
//     console.log('number');
// }
// showNumber();

// var getTotal = function sum(a, b) {
//     return a + b;
// };
// console.log(getTotal(10, 20));


// function sum(a, b) {
//     return a + b;;
// }
// var getTotal = sum;
// console.log(getTotal(10, 20));
// console.log(sum(10, 20));


//callback function
// function display(callback) {
//     console.log('display');
//     // a();
//     typeof callback === 'function' && callback();
// }
// // display(function () {
// //     console.log('hello f8');

// // })
// function handleLog() {
//     console.log('hello ');

// }
// display(handleLog);


//setTimeout()---> delay quá trình thực thi câu lệnh

/*
setTimeout(callback, time, args)
*/

// setTimeout(function () {

//     console.log('hello f8 ');

// }, 5000)
// function max() {
//     console.log(arguments);
// }
// max(5, 20, 15, 20, 25, 30);

//rest paramerter
function max2(a, b, ...rest) {
    console.log((a, b));
    console.log(rest);
}
max2(5, 10, 15, 20, 25, 30)