console.log(Array.prototype);


var users = ["User 1", "User 2", "User 3 ", " User 4", "User 2"];
//1. at(index) ==> lấy phần tử mảng theo index
//console.log(users.at(0));

//2.concat(ar1, arr2, arr3,... ) ==> nối mảng
console.log(users.concat([1, 2, 3], [4, 5, 6]));

//3.fill(value) ==> thay thế tất cả các phần tử trong mảng thành 1 giá trị
users.fill(0);
console.log(users);


//4. indexOf(value) ==> tìm phần tử trong mảng và trả về index đầu tiên
console.log(users.indexOf("users 2"));

//5.lastIndexOf(value) ==> tìm phần tử trong mảng trả về index cuối cùng
console.log(users.indexOf("users 2"));

//6. includes(value) ==> tìm phần tử trong mảng và trả về true / false
// console.log(users, includes("User 3"));

// //7. slice(start, end) ==> cắt mảng từ index đến end -1
// //console.log(users.slice(1, 2));
// console.log(users.slice(-2));


//8. push(value1, value2, value3) ==> thêm phần tử vào cuối mảng và thay đổi mảng ban đầu
// giá trị của hàm push là tổng số lượng phần tử của cả mảng sau khi thêm
var count = users.push(1, 2, 3, "A", "B", "C")
console.log(count);
console.log(users);

//9.unshift(value1, value2, value3) ==> thêm phần tử đầu mảng và thay đổi ban đầu
// giá trị của hàm unshift là tổng lượng phần tử của cả mảng sau khi thêm
var count = users.push(1, 2, 3, "A", "B", "C")
console.log(count);
console.log(users);



//10. Pop() --> xoá aphaanf tử cuối mảng và trả về giá trị phần tử vừa xoá (thay đổi mảng ban đầu)

var value = users.shift();
console.log(value);
console.log(users);


//12. Reverse() ==> đảo ngược mảng
var newArr = users.reverse();
console.log(newArr);
console.log(users);

//13.join() ==> nối các phần tử mảng thành chuỗi
// console.log(users.join(""));

var fullname = "Dương Thái Anh";
//lấy tên
var firstName = fullname.split(" ").slice(-1).join();
console.log(firstName);
