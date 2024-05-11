
var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit consequatur dolore quod magni corrupti`;
var oldPosition = 0;
var position = content.indexOf(" ");

var handleTimer = function () {
    result =
        content.slice(0, oldPosition) +
        `<span style="color: red">${content.slice(
            oldPosition,
            position + 1
        )}</span>` +
        content.slice(position + 1);

    oldPosition = position;
    position = content.indexOf(" ", oldPosition + 1);

    if (position === -1) {
        oldPosition = 0;
        position = content.indexOf(" ");
    }

    document.querySelector(".content").innerHTML = result;
};

window.onload = handleTimer;

setInterval(handleTimer, 500);


var fullname = "tạ hoàng an";

// Chia chuỗi thành một mảng các từ
var words = fullname.split(" ");

// Sử dụng map() để biến đổi mỗi từ trong mảng
var capitalizedWords = words.map(function (word) {
    // Chuyển ký tự đầu tiên của mỗi từ thành chữ hoa, và nối với phần còn lại của từ đã được chuyển thành chữ thường
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

// Nối các từ đã được viết hoa lại thành chuỗi
var capitalizedFullname = capitalizedWords.join(" ");

console.log(capitalizedFullname); // In ra "Tạ Hoàng An"







var fullname = "tạ hoàng an";

// Chia chuỗi thành mảng các từ, chuyển mỗi từ thành chữ hoa ký tự đầu, nối lại thành chuỗi
var capitalizedFullname = fullname.split(" ").map(word =>
    word[0].toUpperCase() + word.slice(1).toLowerCase()
).join(" ");

console.log(capitalizedFullname); // In ra "Tạ Hoàng An"





