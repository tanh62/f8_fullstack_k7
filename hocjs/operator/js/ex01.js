//biểu thức = toán thử và toán hạng


//s = a + b * c ( s,a,b,c là toán hạng   ---   "=", "+", "*" laf toán tử )


//1.Toán tử số học 
/* 
+,-,*,/
%  ---> chia lấy dư
** ---> lũy thừa
++ ---> tăng lên 1 đơn vị
-- ---> giảm đi 1 đơn vị
*/




// var a = 10;
// var b = 3;                // lũy thừa a^b
// var c = a ** b;
// console.log(c);

// var a = 10;
// var b = 2;           //phép chia
// var c = a/b ;
// console.log(c);

var a = 1;
var b;
// a++;                   // tăng lên 1 đơn vị
// a--;
var b = a++;
console.log(a);
console.log(b);

var count = 1;
var total = count++ + ++count + count++
// console.log(total)



//2. Toán tử gán
// var a = 10;
// a += 10;
//a -=10;
// a*=10;
// a/=10;
// a %= 10;
// a **= 10;
// console.log(a);



//3. Toán tử so sánh 
/*
>, <, >=, <=, ==, ===, !=, !==,
==> luôn trả về kiểu dữ liệu logic (boolean): true ,false 
lưu ý : "== " là so sánh bằng nhưng chỉ so sánh giá trị
        "===" so sánh bằng cả giá trị vaf kiểu dữ liệu
        "!=" so sánh khác nhưng chỉ so sánh giá trị
        "!==" so sánh khacs kiểu dữ liệu và giá trị
 
*/


// var a = 10;
// var check = a != 10;
// console.log(check);




// 4.Toán tử lý luận (kết hợp)
/* 
&& --> kết hợp and
|| --> kết hợp or
! --> kết họp not

thứ tự uu tiên: ngoặc tròn --> and --> or --> not
*/

var a = 10;
// var check = (a >= 5 && a <= 15);
var check = a < 0 || (a >= 5 && a <= 15)
console.log(check);




//5. toán tử 3 ngôi
//cú pháp : dieukien ? giatridung : giatrisai
// var a = 10;
// var b = a >= 10 ? "f8" : "thaianh";
// console.log(b);

// var a = 10;
// var total = 5 + 10 + a >= 10 ? 10 : 5 + 2;
// console.log(total)




//6. toán tử nullish (??)
//cú pháp: bien ?? giatri
//cách hoạt động: nếu biến !== underfind và bien !== null lấy bien, ngược laiij lấy giá trị
var x = 10;
// var result = x ?? "f8";
var result = x !== null && x !== undefined ? x : "f8";
console.log(result);

//viết lại toán tử nullish bằng toán tử 3 ngôi





