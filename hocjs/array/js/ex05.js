//Reduce (callback, innitalValue)
/*
callback có 4 tham số
-prevValue
-currentValue
-index
-array --> mảng ban đầu


initialValue: giá trị khởi tạo

Cách hoạt động


1. Không có initalValue
-vòng lặp sẽ chạy từ phần tử thuws2 cho đến hết
-prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng
-currentValue là các phần tử của mảng qua mỗi lần lặp
-prevValue của ;ần lặp sau sẽ là return của lần lặp trước
-Giá trị của vòng lặp reduce sẽ là lần return cuối cùng


2.Có initalValue
-vòng lặp sẽ chạy từ đầu
-prevValue của lần lặp đầu tiên chính là initalValue
-currentValue là các phần tử của mảng qua mỗi lần lặp
-Giá trị của vòng lặp reduce sẽ là lần return cuối cùng.
-prevValue của lần lặp sau sẽ là return của lần lặp trước
*/

var numbers = [5, 10, 15, 20, 25, 30];
var reduce = numbers.reduce(function (prev, current, index) {
    console.log(`prev = ${prev}`, `current = ${current}`, `index = ${index}`);
    return current;
});

// console.log(result);


var total = numbers.reduce(function (prev, current) {
    return prev + current;

}, 0);
console.log(total);


// var numbers = [2, 9, 5, 1, -5];
// //tìm phần tử lớn nhất dùng reduce

// var max = numbers.reduce(function (prev, current) {
//     if (pre < current) {
//         return current;
//     }
//     return prev;
// });
// console.log(max);
// var users = [
//     "An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"
// ];
// //xoá phần tử trùng trong mảng users
// //yêu cầu : dùng reduce 
// var newUsers = users.reduce(function (prev, current) {
//     if (prev.includes(current)) {
//         prev.push(current);
//     }
//     return prev;
// }, []);
// console.log(newUsers);

// var arr1 = [5, 2, 1, 6, 9];
// var arr2 = [2, 1, 6]
// //tìm phần tử khác nhau giữa 2 mảng ( có trong mảng 1 nhưng không có trong mảng 2)
// var diffArr = arr1.reduce(function (prev, current) {
//     if (!arr2.includes(current)) {
//         prev.push(current);
//     }
//     return prev;
// }[]);
// console.log(diffArr);


var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];
//yêu cầu : làm phẳn numbers
//điều kiện : dùng reduce , không dùng hàm flat
function flatArray(arr) {
    return arr.reduce((prev, current) {
        return prev.concat(Array.isArray(current) ? flatArray(current) : current);
    }, []);
};
var newArr = flatArray(numbers);
console.log(newArr);




var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var size = 2;
//chunk array với size tương ứng
//output: [[1,2]], [3,4], [5,6], [7,8], [9]]
// var chunkArr = numbers.reduce(
//     //kiểm tra số lượng phần tử của mảng con cuối cùng
//     if (prev[prev.length - 1].length < size) {
//     //thêm phần tử vào mảng con
//     prev[prev.length - 1].push(current);
// } else {
//     //ngược lại, thêm 1 mảng mới ( thêm đoạn mới)
//     prev.push([current])
// }
// return prev;
// },
// [[]]
// );
// console.log(chunkArr);


var chunkArr2 = numbers.reduce(function (prev, _, index) {
    if (index % size === 0) {
        var subArr = numbers.slice(index, index + size);
        prev.push(subArr);
    }
    return prev;
}, []);
console.log(chunkArr2);
