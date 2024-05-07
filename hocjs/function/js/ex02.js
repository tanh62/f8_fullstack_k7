//setInterval --> lặp đi lặp lại một đoạn chương trình với một khoảng thời gian nhất định
// ví dụ : 1 giây chạy lại  1 lần
// setInterval(function () {
//     console.log('hello ae', ++count);
//     if (count === 5) {
//         clearInterval(id);
//     }
// }, 1000)



//định nghĩa hàm callback có đối số
// function display(callback) {
//     console.log("display");
//     typeof callback === "function" && callback();

// }
// display showLog = function (a) {
//     console.log("hello ae f8", a);
// };
// display(function () {
//     showLog("tanh");
// });

// function display2(callback, ...args) {
//     console.log("display2");
//     typeof callback === "function" && callback
//         (...args); //spread operator
// }
// function showLog2(a, b) {
//     console.log(("hello ae ", a, b));
// }

ưqwewqeqwfsdfsdfsdsdrer

function step1(callback) {
    setTimeout(function () {
        console.log(("bước 1"));
        typeof callback === "function" && callback
            ();
    }, 500)
}
function step2(callback) {
    setTimeout(function () {
        console.log(("bước 2"));
        typeof callback === "function" && callback
            ();
    }, 1500)
}
function step3(callback) {
    setTimeout(function () {
        console.log(("bước 3"));
        typeof callback === "function" && callback
            ();
    }, 1000)
}
step1(function () {
    step2(function () {
        step3();
    });
});
//định nghĩa hàm con
//2. Clouser
//3.
//4.

