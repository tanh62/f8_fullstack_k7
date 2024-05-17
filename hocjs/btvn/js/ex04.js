// baì 1: tìm số nguyên tố liền tiếp gần nhất
function isPrime(n) {
    if (n <= 1) {
        return false;
    } else {
        for (var i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
function symmetricalBumber(n) {
    var reverse = n.toString().split("").reverse().join("");
    if (n.toString().includes(reverse)) {
        return true;
    }
    return false;
}
function nextPrime(n) {
    var i = n;
    while (isPrime(i) === false || symmetricalBumber(i) === false) {
        i++;
    }
    return i;
}
var n = 45;
console.log(`Số nguyên tố gần nhất của ${n} là :${nextPrime(n)}`);

//Bài 3:
function findMixInteger(array) {
    var i = 1;
    while (array.includes(i)) {
        i++;
    }
    return i;
}
var numbs = [7, 8, 9, 11, 12];

console.log(
    `So nguyen duong nho nhat trong mang khong cos trong  ${numbs} la ${findMixInteger(
        numbs
    )}`
);