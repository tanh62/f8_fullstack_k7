//Number là kiểu dữ liệu nguyên thuỷ
// hàm tạo của number là number
console.dir(Number);

var a = 10;
if (typeof a === "number") {
    console.log("Đây là số");
}


//Ép kiểu dữ liệu về number
var b = "10";
b = Number(b);                // Cách 1
b = +b;                      // cách 2 : dùng dấu cộng
b = parseInt(b);            // Cách 3: ép về số nguyên
b = parseFloat(b);         // ép về số thực
console.log(typeof b, b);

//Kiểm tra 1 số là số nguyên
var a = 10;
if (Number.isInteger(a)) {
    console.log("là số nguyên");
} else {
    console.log("Không phải số nguyên");
}

// Số NaN ( not a number)
var a = 10;
var b = "f8";
var c = a * b;
if (Number.isNaN(c)) {
    console.log("Lỗi tính toán");
}

//Số Infinity: vượt quá khả năng lưu trữ
var a = 10000;
var b = 10000;
var c = a ** b;
var d = 50000 ** 1000;
console.log(c);
console.log(d);
//console.log(C === d); 
if (c === Infinity || c === -Infinity) {
    console.log("Vượt quá khả năng lưu trữ");
}

//toFixed(): lấy chữ số phần thập phân và làm tròn
//var price = 12345.6789;
//console.log(price.toFixed(0));

//console.log(price.toPrecision); // làm tròn từ trái qua phải


var price = 200000000;
console.log(price.toLocaleString("pi"));