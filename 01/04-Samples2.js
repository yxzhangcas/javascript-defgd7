// [关系操作符]
let x = 2, y = 3;
undefined
x === y                 // ===
false
x !== y                 // !==
true
x < y
true
x <= y
true
x > y
false
x >= y
false
"two" === "three"
false
"two" > "three"
true
false === (x > y)
true
(x === 2) && (y === 3)
true
(x > 3) || (y < 3)
false
!(x === y)
true

// [函数]
function plus1(x) {                 // 函数
    return x + 1;
}
undefined
plus1(y)
4
let square = function(x) {          // 函数变量
    return x * x;
}
undefined
square(plus1(y))
16
6
const plus2 = x => x + 2;           // 箭头函数
undefined
const square2 = x => x * x;
undefined
plus2(y);
5
square(plus2(y))
25

// [对象方法]
let a = [];
undefined
a.push(1, 2, 3);                    // 插入元素
3
a
(3) [1, 2, 3]
a.reverse();                        // 反序排列
(3) [3, 2, 1]
points.dist = function() {                  // 创建对象方法
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};
points.dist();                              // 执行对象方法
1.4142135623730951

// [控制结构]
function abs(x) {                           // if else
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
undefined
abs(-10) === abs(10)
true
function sum(array) {                       // foreach (x of array)
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
undefined
let primes = [2, 3, 5, 7, 11];
undefined
sum(primes);
28
function factorial(n) {                     // while
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
undefined
factorial(4);
24
function factorial2(n) {                    // fori
    let i, product = 1;
    for (i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
}
undefined
factorial2(5)
120

// [对象]
class Point {
    constructor(x, y) {                     // 无需声明成员变量？
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
undefined
let p = new Point(1, 1);
undefined
p.distance();
1.4142135623730951