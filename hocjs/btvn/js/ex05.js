// bài 1
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    if (errors.hasOwnProperty(field)) {
        const errorGroup = errors[field];
        for (const errorType in errorGroup) {
            if (errorGroup.hasOwnProperty(errorType)) {
                return errorGroup[errorType];
            }
        }
    }
    return "";
}

console.log(getError("name"));
console.log(getError("email"));
console.log(getError("password"));
//B2

//B3:
function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}
var data = [];
function handelRegister(name, password, email) {
    if (!name || !password || !email) {
        return console.log("Xin hãy nhập đủ thông tin");
    }
    var newData = new User(name, password, email);
    newData.role = "user";
    data.push(newData);
    return data;
}
var dataRegister = handelRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
var dataRegister = handelRegister(
    "Nguyen Van B",
    "123456",
    "nguyenvanb@email.com"
);
function handleLogin(email, password) {
    for (var element of data) {
        if (element["email"] === email && element["password"] === password)
            return element;
    }
}
console.log(data);
console.log(handleLogin("nguyenvana@email.com", "123456"));
console.log(handleLogin("nguyenvana@email.com", "12345678"));

