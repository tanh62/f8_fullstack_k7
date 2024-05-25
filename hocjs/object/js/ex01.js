//Prototype: object dùng để kế thừa các phương thức, thuộc tính
// Object.prototype.combineValue = function () { }
// var user = {
//     name: "Hoàng An",
//     email: "hoàng anh@gmail.com",
//     combineValue: function () {
//         //nối tất cả các giá trị của key thành 1 mảng
//         // this: đại diện cho objet hiện tại
//         var array = [];
//         object.keys(this).forEach(function (key) {
//             var value = _this[key];
//             if (typeof value !== "function") {
//                 array.push(value);
//             }
//         });
//         return array;
//     },
// };
// console.log(user);
// console.log(user.combineValue());
// console.log(user.message);
// String.prototype.last = function () {
//     return this.split(" ").slice(-1).join();
// };
// var fullname = " hoàng an f8"; // string
// var arr = []; //array
// var age = 32; //number
// var check = false;//boolean
// var getMessage = function() {};
// console.dir(Function);




// var course = {
//     name: "Fullstack",
//     price: 1000
// };


var user = ['user 1', 'user 2', 'user 3', 'user 4'];
Array.prototype.map2 = function (callback) {
    if (typeof callback !== "function") {
        return;
    }
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        var value = this[i];
        var result = callback(value, i);
        newArr[newArr.length] = result;
    }
    return newArr;
};


var newArr = user.map2(function (user, index) {
    return `<h3>${index + 1} - ${user}</h3>`;

});
console.log(newArr);