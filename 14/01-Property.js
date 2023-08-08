
console.log(`>> Object.getOwnPropertyDescriptor({x : 1}, "x")`);
console.log(Object.getOwnPropertyDescriptor({x : 1}, "x"));

const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    }
}
console.log(`>> Object.getOwnPropertyDescriptor(random, "octet")`);
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

console.log(`>> Object.getOwnPropertyDescriptor({}, "x")`);
console.log(Object.getOwnPropertyDescriptor({}, "x"));

console.log(`>> Object.getOwnPropertyDescriptor({}, "toString")`);
console.log(Object.getOwnPropertyDescriptor({}, "toString"));

let o = {}
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});
console.log(`>> o.x`);
console.log(o.x);
console.log(`>> Object.keys(o)`);
console.log(Object.keys(o));

Object.defineProperty(o, "x", {
    writable: false
});
o.x = 2;        // 修改无效
console.log(`>> o.x`);
console.log(o.x);

Object.defineProperty(o, "x", {
    value: 2    // 可以配置
});
console.log(`>> o.x`);
console.log(o.x);

Object.defineProperty(o, "x", {     // x必须引号
    get: function() {
        return 0;
    }
});
console.log(`>> o.x`);
console.log(o.x);

let p = Object.defineProperties({}, {
    "x": {                          // 有无引号均可
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    y: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    r: {
        get() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: true,
        configurable: true
    }
});
console.log(`>> p.r`);
console.log(p.r);