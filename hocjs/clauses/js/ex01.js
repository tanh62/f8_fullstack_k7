/*
-câu lệnh rẽ nhánh : thực thi 1 đoạn chương trình theo điều kiện nhất định
-điều kiện: dùng biểu thức logic (boolean)
-trong lập trình có 2 câu lệnh rẽ nhánh:
+, if, else
1.câu lệnh if thiếu

if(dieukien) {
    code
}


1.2. câu lệnh if đủ
if (dieukien) {
    code đúng
} else {
    code sai}
}

1.3. câu lệnh if nhiều nhánh 
if (dieukien) {
    code nhánh 1
} else if (dieukien) {
    code nhánh 2
} else if (diekien) {
    code nhánh 3
} else {
    code nhánh 4
}



1.4. câu lệnh if lồng hau 
if (dieukien1) {
    if (dieukien2) {
        code đúng dieukien2
    } else {
        code sai dieukien2
    }
} else {
    code sai dk1
}

+, switch case 
*/

// var number = 15;
// if (number < 0) {
//     console.log('so sieu nho');
// } else if (number >= 0 && number < 5) {
//     console.log("so nho");
// } else if (number >= 5 && number < 10) {
//     console.log(so trung binh);
// } else if (number >= 10 && number < 15) {
//     console.log(so lon);
// }


//bt: tính lương thực nhận của nhân viên sau khi trừ thuế
/*
quy ước 
-lương <= 5tr --> thuế 0%
-lương >5tr và < 15tr ---> thuế 3%
- >=15tr --> thuế 5%
*/
// var salary = 7000000;
// var income, tax;
// if (salary <= 5000000) {
//     console.log(salary);
// } else if (salary > 500000 && salary < 15000000) {
//     console.log(salary - salary * 0.03)
// }



// var saleRate = 5;
// var salePrice = 1000000;
/*
 salePrice = regularPrice - regularPrice * saleRate * 100   */

// var regularPrice = salePrice + (salePrice * saleRate) / 100;
// console.log(regularPrice)



var seconds = 350;
//tìm xem có bao nhiêu phút , bao nhiêu giây
// gợi ý : math.floor( )--> làm tròn xuống và lấy số nguyên
var mins = Math.floor(seconds / 60);
seconds -= mins * 60;
console.log(mins, seconds);


