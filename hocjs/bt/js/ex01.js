//Bài 1: Hoán vị 2 số
var a = 5;
var b = 3;

[a, b] = [b, a]

console.log(a, b);



//Bài 2: Thực hiện phép toán
var s = -10 + 20 + 5 ** 10 / 2
console.log(s);


//Bài 3: Tìm số lớn nhất
var a = 5;
var b = 10;
var c = 7;

var max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log("Số lớn nhất là:", max);



//Bài 4: Kiểm tra số cùng dấu
var a = 5;
var b = -10;
if (a * b > 0) {
    console.log("Hai số cùng dấu.");
} else if (a * b < 0) {
    console.log("Hai số không cùng dấu.");
}