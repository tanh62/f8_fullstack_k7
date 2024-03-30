# làm thế nào để thiết kế web tương thích với các thiết bị?
-Dùng adaptive : tạo ra 1 giao diện khác dngf chng dữ liệu với bản desktop
=> dựa vào thiết bị để chuyển giao diện
-Dùng responsive : sử dụng css để ẩn / hiện cá thanhf phần ở các kích thước màn hình khác nha
=> dựa vào kích thươcs màn hình để thay đổi giao diện
# responsive

-responsive web design (RWD)
-thiết kế web đáp ứng
-sử dụng kích thước màn hình để thay đổi giao diện


## breakpoint 

-điểm kích thước màn hình ( chiều rộng) mà tại đó giao diện sẽ thay đỏi 
-không có breakpoint cố định / chuẩn cho các dự án
-chỉ có breakpoint phổ biến
-mẹo để tìm ra các breakpoint phổ biến: tham khảo các css framework

các breakpoint phổ biến 


-576px
-768px
-992px
-1200px
-1400px

## media queries 

at-rule CSS

```css
@media all|screen|print and (min-width: value1) and (max-width: value2) {
    selector CSS
}
```

### Cách 1: Desktop first 
```css
@media screen and (max-width: 1399px) {
    Selector CSS
}
@media screen and (max-width: 1199px) {
    Selector CSS
}
@media screen and (max-width: 991px) {
    Selector CSS
}
@media screen and (max-width: 767px) {
    Selector CSS
}
@media screen and (max-width: 575px) {
    Selector CSS
}
```


### Cách 2: mobile first

```css
@media screen and (min-width:576px) {
    Selector CSS
}
@media screen and (min-width:768px) {
    Selector CSS
}
@media screen and (min-width:992px) {
    Selector CSS
}
@media screen and (min-width:1200px) {
    Selector CSS
}
@media screen and (min-width:1400px) {
    Selector CSS
}
```


