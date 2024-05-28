var person1 = {
    name: "Hoàng An",
    email: "hoangan@gmail.com",
    age: 32,
    getInfo: function () {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
        };
    },
};
console.log(person1);
console.log(person1.getInfo());


//Cấu trúc của object
//- có những thuộc tính nào
//- có những phương thức nào?
//GIẢI PHÁP: tạo 1 function constructor -->Định nghĩa cấu trúc của object

//Một số nguyên tắc của Function constructor:
/*
-Tên hàm phải là danh từ
-Đặt tên theo quy tắc PascalCase (ký tywh đầu của mỗi từ sẽ viết hoá)
VÍ DỤ : UserService, UserCourse, ResetPasswordService,...
*/

function Person(name, email, age) {
    //thuộc tính 
    this.name = name;
    this.email = email;
    this.age = age;
    this.a = "học js";
    //phương thức
    this, getInfo = function () {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
        };
    };
}
// Person.prototype.message = " Learn JS"
// //Tạo object từ constructor
// var person1 = new Person(" Hoàng An 1", "hoangan@gmail,com", 32);
// console.log(person1);
// var person2 = new Person(" Hoàng An 2", "hoangan2@gmail,com", 33);
// console.log(person2);
// console.log(person2.message);
console.log(p);

// //Kiểm tra 1 object được tạo từ hàm tạo nào?
// console.log(person1.constructor.name);

// var users = ["User 1", "User 2", "User 3"];
// if (users && users.constructor.name === "Array") {
//     console.log("đây là mảng");
// }



//Thuộc tính tĩnh , phương thức tĩnh
/*
-không phụ thuộc vào object
- truy cập trực tiếp từ constructor (Hàm tạo)
Ví dụ: Array.isArray(), Object.keys(), Object.values(),...
*/

Person.message = "Hello ae F8"; //static property


//static method
Person.getMessage = function () {
    return "Học JS không khó"
};

Person.something = function () {
    console.log("something");
    console.log(new this().a);

}
Person.something();
// var person1 = new Person(" Hoàng An 1", "hoangan@gmail,com", 32);
// console.log(person1.constructor.message);

// console.log(Person.message);

// lưu ý : this trong phương thức thường là object
//       : this trong phương thức tĩnh là constructor

/*
tổng quan :
1.protopype
2.từ khoá this
3.function constructor
4. Bind, call, apply
5. Kế thừa constructor
*/



