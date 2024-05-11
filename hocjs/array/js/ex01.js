// //Khai báo mảng 
// var myArray = [1, 5, 3, "hello f8", true, false, null, undefined];



// //Kiểm tra số lượng phần tử
// console.log(myArray.length);

// //Kiểm tra 1 biến có phải là mảng không
// if (Array.isArray(myArray)) {
//     console.log("Đây là mảng");

// } else {
//     console.log("Đây không phải mảng");
// }

// //thêm phần tử mới
// //cú pháp : tenbienmang[indexmoi ] = giatri
// myArray(myArray.length) = "Anh"

// //sửa phần tử ==> xác định được index
// myArray[3] = "hello f8";

// //Duyệt mảng (đọc mảng)
// //console.log(myArray[0]);
// // for (var i = 0; i < myArray.length; i++) {
// //     console.log(myArray);
// // }
// // for (var index in myArray) {
// //     console.log(index, myArray[index]);
// // }

// // for (var value of myArray) {
// //     console.log(value);
// // }

// //Xoá phần tử trong mảng ==> xác định được index
// var deleteIndex = 3;
// var newArr = [];
// for (var index in myArray) {
//     if (+index === +deleteIndex) {
//         continue;
//     }
//     newArr[newArr.length] = myArray[index];
// }
// myArray = newArr;
// console.log(newArr);


// //console.log(myArray);


// //Bài tập1 : thêm 1 phần tử bất kì vào đầu mảng 
// var newValue = "Js";
// var newArr = [newValue];
// for (var value of myArray) {
//     newArr[newArr.length] = value;
//}
//console.log(newArr);

// var users = [
//     "Tạ Hoàng An"
//     "Nguyễn Tuấn Anh"
//     "Nguyễn Văn Dũng"
//     "Phạm Văn Hiếu"
// ];
// var keyword = "an"
// //yêu cầu: xoá tất cả phần tử mảng có chứa keyword ( không phân biệt hoa , thường)

// var newUsers = [];
// for (var index in users) {
//     var value = users[index];
//     if (value.toLowerCase().includes(keyword.toLowerCase())) {
//         continue;
//     }
//     newUsers[newUsers.length] = value;
// }

// console.log(NewUsers);


// var numbers = [5, 2, 1, 9, 6];
// var maxIndex
// var max = numbers[0];

// for (var index in numbers) {
//     if (max < numbers[index]) {
//         max = numbers[index];
//         maxIndex = +index;
//     }
// }

// var tmp = numbers[0];
// numbers[0] = max;
// numbers[maxIndex] = tmp;

// console.log(numbers);

var fullname = "tạ hoàng an";
//yêu cầu: chuyển thành họ tên hợp lệ: Tạ Hoàng An 
var fullnameArr = fullname.split(" ");
for (var index in fullnameArr) {
    var word = fullnameArr[index];
    var newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    newName += newWord + "";

}
newName = newName.trimEnd();
console.log(newName);
