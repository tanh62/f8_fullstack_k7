//B2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flatArray(arr) {
    return arr.reduce((acc, cur) {
        if (Array.isArray(cur)) {
            return acc.concat(flatArray(cur));
        }
        return acc.concat(cur);
    }, []);
}
var output = flatArray(arr);
console.log(output);
//B3
var arr = [
    ["a", 1, true],
    ["b", 2, false],
];
var resultReduce = arr[0].reduce((acc, _, i) => {
    acc.push(arr.map((subArr) => subArr[i]));
    return acc;
}, []);

console.log(resultReduce);
