//Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
var sokm = 130;
var tiencuoc = 0;

if (sokm <= 1) {
    tiencuoc = sokm * 15000;
} else if (sokm <= 5) {
    tiencuoc = 15000 + (sokm - 1) * 13500;
} else {
    tiencuoc = 15000 + 4 * 13500 + (sokm - 5) * 11000;
}

if (sokm > 120) {
    tiencuoc *= 0.9;
}
console.log('Tổng tiền cho ' + sokm + ' km là: ' + tiencuoc + ' đồng');
//Bài 2: Tính tiền điện
var sodien = 400;
var sotien = 0;

if (sodien <= 50) {
    console.log(sotien = sodien * 1678);
} else if (sodien <= 100) {
    console.log(sotien = 50 * 1678 + (sodien - 50) * 1734);
} else if (sodien <= 200) {
    console.log(sotien = 50 * 1678 + 50 * 1734 + (sodien - 100) * 2014);
} else if (sodien <= 300) {
    console.log(sotien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (sodien - 200) * 2536);
} else if (sodien <= 400) {
    console.log(sotien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (sodien - 300) * 2834);
} else {
    console.log(sotien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (sodien - 400) * 2927);
}

console.log('Số điện bạn đã tiêu thụ là: ' + sodien + ' và số tiền bạn phải đóng là: ' + sotien + ' đồng');

//Bài 3
var n = 5;
var S = 0;

for (var i = 1; i <= n; i++) {
    S += i * (i + 1);
}
console.log('Giá trị của S là: ' + S);
//Bài 4
var number = -19;
var prime = true;

if (number <= 1) {
    prime = false;
} else {
    for (var i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
}
if (prime && number > 1) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không phải là số nguyên tố.");
}
//Bài 5
var N = 7;
var number = 1;
var line = 0;
for (var i = 1; i <= N; i++) {

    for (var j = 0; j < i; j++) {
        line += number + ' ';
        number++;
    }
    console.log(line);
}
//Bài 7
for (var i = 1; i <= 10; i++) {
    console.log(`Bảng cửu chương của ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('');
}