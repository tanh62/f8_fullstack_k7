// Bai 3
var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
];

function getNestedArr(categories) {
    var result = [];
    categories.forEach(function (element) {
        element["children"] = [];
        if (element["parent"] === 0) {
            result.push(element);
        } else {
            var parentElements = categories.find(function (category) {
                return category["id"];
            });
        }
    });
    return result;
}
console.log(getNestedArr(categories));
// Bài 4
Array.prototype.reduce2 = function (callback, startValue) {
    var current = startValue !== undefined ? startValue : this[0];
    for (var i = 0; i < this.length; i++) {
        current = callback(current, this[i]);
    }
    return current;
};
var arr = [1, 2, 3, 4];
var result = arr.reduce2((pre, current) => {
    return pre + current;
}, 0);
var result2 = arr.reduce2((pre, current) => {
    return pre + current;
});

console.log(result);
console.log(result2);