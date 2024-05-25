// var user = {
//     name: "Hoàng An",
//     email: "hoangan@gmail.com",
//     getInfo: function () {
//         console.log(this);
//         // var _this = this;
//         //     return {
//         //         age: 32,
//         //         getName: function () {
//         //             return this.name
//         //         },
//         //     };
//          },
//     };
//     var name = (user.getInfo().getName.bind(user)());
//     console.log(name);


function something(name, email) {
    console.log(name, email);
    console.log(this.courseName);
    console.log(this.coursePrice);
}
var obj = {
    courseName: "Fullstack",
    coursePrice: 12000,
};
// something.call(obj, "Tanh", "tanh@gmail.com");

var arr = ["Tannh", "tanh@gmail.com"];
something.apply(obj, arr);



function Person() {
    this.name = "Tanh";
    this.email = "tanh@gmail.com";
    this.getName = function () {
        return this.name;
    };
    this.getEmail = function () {
        return this.email;
    }
}
function User() {
    Person.call(this);
    this.getInfo = function () {
        console.log(this.getName());
        console.log(this.getEmail());
    };
}
var user = new User();
user.getInfo();



//func1 ==> func2=> func3