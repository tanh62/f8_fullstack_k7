//Vòng lăpj while : lặp với số lần lặp không xác định trước
/*
while (dieukien){
    câu lệnh
}
*/
// var i = 1;
// var s = 0;
// while (i <= 10) {
//     s += i;
//     i++;
// }
// console.log(s);

// //
// var n = 0;
// var count = 0;
//lấy n/2, khi nào không chia hết thì dừng lại--> trả về số lượng phép chia (số lần chạy)
// while (n % 2 === 0) {
//     n /= 2;
//     count++;
// }
// console.log(count);


//vòng lặp do while: chạy với số lần lặp không xác định trước
// var a = 10;
// do {
//     console.log(a);
// } while (a < 0);
//từ khóa break --> dừng vòng lặp tại thời điểm ta mong muốn (không cần vòng lặp chạy xong)



//từ khóa continue --> bỏ qua lần lặp để chạy lần lặp tiếp theo
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    //     if (i == 5) {
    //         break;
    //    }
}