/*
vòng lặp :
- cú pháp trong lập trình
- cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định


2 loại vòng lặp
-vòng lặp với số lần xác định trước
==>for
-vòng lặp với số lần không xác định trước
==> while, do while
*/



//vòng lặp for 
/* 
for (initial; condition; step) {
    code
}
*/

// for (var i = 1; i <= 10; i++) {
//     console.log(`lan lap thu: ${i}`);  //
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(`lan lap thu: ${i}`);
// }

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log(`i = ${1} - j = ${j}`);
    }
}

//S = 1 + 1*2 + 1*2*3 + ... + 1*2*3 .. n*
var n = 5;
var total = 0;
var tmp = 1;

for (var i = 1; i <= n; i++) {
    tmp *= i;
    total += tmp;
}
console.log(total)