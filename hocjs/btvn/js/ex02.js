//B1
var arrOne = [4, 2, 6, 7, 1];
var max = arrOne[0];
var min = arrOne[0];
var maxIndex = 0;
var minIndex = 0;
for (var i = 0; i < arrOne.length; i++) {
    if (max < arrOne[i]) {
        max = arrOne[i];
        maxIndex = i;
    }
}
for (var i = 0; i < arrOne.length; i++) {
    if (min > arrOne[i]) {
        min = arrOne[i];
        minIndex = i;
    }
}
console.log(`số lớn nhất trong mảng là ${max} và vị trí số đó là ${maxIndex}`);
console.log(`số nhỏ nhất trong mảng là ${min} và vị trí số đó là ${minIndex}`);


//B2 
var arrTwo = [1, 2, 4, 6, 7, 8];
var a = 0;
var totalNumbers = arrTwo.reduce(function (total, number) {
    var check = true;
    if (number === 1 || number <= 0) {
        return 0;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            check = false;
            return total;
        }
    }
    if (check) {
        a++;
        return total + number;
    }
}, 0);
if (a === 0) {
    console.log(`No prime`);
}
else {
    console.log(`Trung bình cộng các số nguyên tố là: ${totalNumbers / a}`);
}

//B3

var arrThird = [0, 0, 2, 5, 6, 7, 7];
var newArr = new Set(arrThird);
console.log(newArr);


//B4
var arrFour = [1, 4, 3, 7, 5];
var arrangeArr = arrFour.sort(function (a, b) {
    return a - b;
});
console.log(`Mảng sau khi sắp xếp là ${arrangeArr}`);



