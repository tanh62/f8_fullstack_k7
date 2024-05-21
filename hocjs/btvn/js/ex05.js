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

const returnObjectB3 = function (name, email, password) {
    var object = {};
    object["name"] = name;
    object["email"] = email;
    object["password"] = password;
    return object;
};
var data = [];
const handleRegister = function (name, email, password) {
    if (arguments.length === 3) {
        var user = returnObjectB3(name, email, password);
        user["role"] = "user";
        data.push(user);
    } else {
        console.log("tao User khong thanh cong");
        return 0;
    }
};
const login = function (email, password) {
    var check = data.some(function (item, index) {
        return item["email"] === email && item["password"] === password;
    });
    //   console.log(check);
    if (check) {
        var dataUser = {};
        dataUser = data.find(function (item, index) {
            return item["email"] === email;
        });
        console.log(dataUser);
    } else {
        console.log("Thông tin đăng nhập không hợp lệ");
    }
};
