
// Bai 1: 
function sumCaculator(...args) {
    let sum = 0;
    for (const x of args) {
        if (!isNaN(x)) {
            sum += x;
        } else {
            console.log("Tồn tại phần tử không phải là số");
            return 0;
        }
    }
    return sum;
}

var sum = sumCaculator(1, 2, "4x", 3, 4, 5);
var sum1 = sumCaculator(1, 2);
console.log(sum);
console.log(sum1);
// Bai 2: 

Number.prototype.getCurrency = function (unit) {
    if (!+this) {
        return "Dữ liệu không hợp lệ";
    }
    var price;
    if (unit === "$") {
        price = this.toLocaleString("us", {
            style: "currency",
            currency: "USD",
        });
    } else {
        console.log("Đơn vị chưa có trong danh sách");
        return 0;

    }
    return price;
};
var price1 = 10000000000;
var price2 = 500000;
console.log(typeof price1);
console.log(price1.getCurrency("d"));
console.log(price2.getCurrency("$"));
// Bài 3: 
Array.prototype.push2 = function (...args) {
    for (var i = 0; i < args.length; i++) {
        this[this.length] = args[i];
    }
    return this;
};
var arrayB3 = [1, 2, 3, 4];
arrayB3.push2(6, 7, 8, 9);
console.log(arrayB3);
// Bài 4:
Array.prototype.filter2 = function (callback) {
    var array = [];
    var index = 0;
    this.forEach((element) => {
        if (callback(element, index)) {
            array.push(element);
        }
        index++;
    });
    return array;
};
var arrayB4 = [1, 3, 5, 6, 6, 9];
var result = arrayB4.filter2(function (item, index) {
    if (index === 4) {
        return true;
    }
});
console.log(result);
//Bài 5:
