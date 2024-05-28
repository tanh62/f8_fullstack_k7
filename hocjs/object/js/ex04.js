console.dir(Object);

var user = {
    name: "Tanh",
    email: "tanh@gmail.com"

};
console.log(user);
var user2 = Object.create(null);
user2.name = "Tanh"
user2.email = "tanh@gmail.com"
console.log(user2);

//Object.create còn tác dụng kế thừa prototype

//Tham chiếu
var a = {
    name: "Tanh",
    email: "tanh@gmail.com"
};

// var b = a;
//Shallow copy
var b = Object.assign({}, a); //Cách 1
var b = { ...a } // Cách 2
//Deep copy
var b = JSON.parse(JSON.stringify(a));
b.name = "Tanh";
console.log(a);
console.log(b);

var user = [
    {
        name: "User 1",
        email: "User1@gmail.com"
    }

    {
        name: "User 2",
        email: "User2@gmail.com"
    }

    {
        name: "User 3",
        email: "User3@gmail.com"
    }

    {
        name: "User4",
        email: "User4@gmail.com"
    }

]
//yêu cầu : sửa tên
var user = user.find(function (user) {
    return user.email === email;
}):
    user.name = "user 2 update"
document.write(<table width="100%" border="1">



    <thead>
        <tr>
            <th width="5%">Stt</th>
            <th>Tên</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Hoàng An</td>
            <td>an@gmail.com</td>
        </tr>
    </tbody>
</table>);




/*
1.String
2.Number
3.BigInt
4.Boolean
5.Symbol
6.underfind
7.null
8.object
*/