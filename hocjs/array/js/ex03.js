var users = ["an", "hoàng", "dũng", "tâm"];
//Sort() : sắp xếp mảng theo thứ tự tăng dần
//Sắp xếp theo ký tự: a, b, c
/*
Lưu ý :
//a: phần tử sau
//b: phần tử trước
// nếu hàm này trả về giá trị âm ==> tự động đổi chỗ
*/
users.sort();
console.log(users);

var numbers = [5, 1, 2, 100, 10];
numbers.sort(function (a, b) {
    //sắp xếp phâng tử trước
    //phần tử trước bé hơn phần tử sau
    // cần xử lý: nếu phần tử trước  > phần tử sau ==> đổi chỗ
    console.log(`trước = ${b}, sau = ${a}`);
    if (b > a) {
        return -1000000;
    }
});
console.log(numbers);
//sắp xếp bài toán nổi bọt

var users = [
    "Tạ Hoàng An",
    "Lưu Anh QUân",
    "Lê Đức Nam",
    "Đặng Ngọc Sơn",
    "Trần Công Lực",
];
// sắp xếp mảng sau theo thứ tự tăng dần (theo tên)
var getFirstName = function (fullname) {
    return fullname.split(" ").slice(-1).join();
};
users.sort(function (a, b) {                         //
    if (getFirstName(a) < getFirstName(b)) {
        return -1;
    }
})
console.log(users);





//Vòng lặp
var users = ['item1', 'item2', 'item3', 'item4'];
//forEach(callback): duyệt từng phần tử của mảng
/*
Callback có 3 tham số
- value
- index
- array : mảng ban đầu
*/
var result = users.forEach(function (value, index) {
    console.log((value, index));
});
console.log(result);


//map(callback)
/*
-duyệt qua từng phần tử của mảng ban đầu
-trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
-giá trị từng phần tử của mảng mới là return của callback
*/
users.map(function (value, index) {
    console.log(value, index);
    //return 1;
    return `${index + 1} - ${value}`;
});
console.log(newArr);


//filter(callback)
/*
-duyệt qua phần tử mảng ban đầu
-trả về một mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban dầu nếu callback return về truthy
*/
var newArr = users.filter(function (value, index) {
    console.log(value, index);
    if (index > 1) {
        return true;
    }
});
console.log(newArr);

//Bài tập
var customers = [
    [
        ["customers 1", "customer1@gmail.com", 32]
        ["customers 2", "customer2@gmail.com", 28]
        ["customers 3", "customer3@gmail.com", 31]
        ["customers 4", "customer4@gmail.com", 29]

    ]
];
console.log(customers);
// xoá khách hàng có email là: customer2@gmail.com
customers = customers.filter(function (customers) {
    return !customers.includes("customer2@gmail.com")
});
console.log(customers);


// tăng tuổi của khách hàng có email ustomer2@gmail.com tăng thêm 2 tuổi (dùng map)
customers = customers.map(function (customer) {
    if (customer.includes("customer2@gmail.com")) {
        customer[2] += 2;
    }
    return customers;
});
console.log(customers);



var data [];
function addData(value, status) {
    var addItem = function (item) {
        if (!data.includes(itewm)) {
            data.push(item);
        }
    };
    var removeItem(value, status) {
        data = data.filter(function (_item) {
            return Item !== _item;
        });
    };
    if (status) {
        addItem(value);
    } else {
        removeItem(value);

    }
}

addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);
/*
['An']
Giải thích:
Nếu status = true ==> thêm value vào mảng data ( kiểm tra trùng)
Nếu status = false ==> xoá value

*/


