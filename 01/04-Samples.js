// [注释]

// [变量]
let x;                  // let关键字
undefined
x = 0;                  // 赋值
0
x                       // 求值
0
x = 1;                  // 整数
1
x = 0.01;               // 小数
0.01
x = "hello world";      // 双引号
'hello world'
x = 'JavaScript';       // 单引号
'JavaScript'
x = true;               // 布尔值
true
x = false;              // 布尔值
false
x = null;               // null
null
x = undefined;          // undefined
undefined

// [对象]
let book = {
    topic: "JavaScript",
    edition: 7
};
undefined
book.topic;                     // .访问
'JavaScript'
book["edition"];                // []访问
7
book.author = "Flanagan";       // .添加
'Flanagan'
book.contents = {};             // 添加空对象
{}
book.contents?.ch01?.sec1       // ?.条件式
undefined

// [数组]
let primes = [2, 3, 5, 7];      // 创建数组
undefined
primes[0];                      // 第一个元素
2
primes.length;                  // 元素数量
4
primes[primes.length - 1];      // 最后一个元素
7
primes[4] = 9;                  // 添加新元素
9
primes[4] = 11;                 // 修改元素
11
let empty = [];                 // 创建空数组
undefined
empty.length;                   // 空数组长度
0
primes;                         // 新数组
(5) [2, 3, 5, 7, 11]

// [数组&对象]
let points = [                  // 包含两个元素的数组
    {x: 0, y: 0},               // 每个元素都是对象
    {x: 1, y: 1}
];
undefined
let data = {                    // 包含2个属性的对象
    trial1: [[1,2], [3,4]],     // 每个属性都是数组，数组的元素也是数组
    trial2: [[2,3], [4,5]]
};
undefined

// [算数操作符]
3+2
5
3-2
1
3*2
6
3/2                             // 非整除，自动升级为浮点
1.5
points[1].x - points[0].x
1
"3" + "2"                       // 字符串拼接
'32'
let count = 0;
undefined
count++;                        // 先返回当前值，再进行自增
0
count
1
count--;                        // 先返回当前值，再进行自减
1
count
0
count += 2;
2
count *= 3;
6
count
6