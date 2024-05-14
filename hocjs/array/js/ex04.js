9: 48
// var numbers = [1, 2, 5, 7, 9];
// //some(callback)
// /*
// -duyệt qua từng phần tử của mảng ban đầu
// -trả về giá trị true / false
// -trả về true khi số có ít nhất 1 lần return truthy ở callback
// */

// var result = numbers.some(function (value, index) {
//     console.log(value, index);
//     return value % 2 === 0;
// });
// console.log(result);


// //every(callback)==> ngược lại so với some(tất cả đều đúng)
// var numbers = [1, 3, 2, 5, 7, 9];
// var result = numbers.every(function (value) {
//     return value % 2 === 0;
// });
// console.log(result);



// //find(callback)
// /*
// -điều kiện guống fulter
// - trả về phần tử đầu tiên tìm được

// */
// var numbers = [1, 3, 2, 5, 7, 9];
// var result1 = numbers.filter(function (value, index) {

//     return numbers > 2;
// });
// console.log(result1);
// var result1 = numbers.find(function (value, index) {

//     return numbers > 2;
// });
// console.log(result2);


//findLast() ==> tìm phần tử cuối cùng


//findIndex(callback) ==> tìm index đầu tiên

//findLastIndex(callback)==> tìm index cuối cùng

var users = [
    ["A", "A"],
    ["B", "B"],
    ["C", "C"],
    ["D", "D"],
]
console.log(users);
//yêu cầu 1 : tìm index của  ["B", "B"] trong mảng users
var index = users.indexOf(["B", "B"]);
console.log(index);
var index = users.findIndex(function (users)) {
    return users.join() === arr.join();
}
console.log(index);


var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
//[1, 2]

//tìm hiểu vòng lặp reduce







