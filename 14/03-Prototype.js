console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(() => {}));

{
    let p = {x: 1};
    let o = Object.create(p);
    console.log(p.isPrototypeOf(o));
    console.log(Object.prototype.isPrototypeOf(p));
    console.log(Object.prototype.isPrototypeOf(o));
}

{
    let o = {x: 1};
    let p = {y: 2};
    console.log(o.x);
    console.log(o.y);
    Object.setPrototypeOf(o, p);
    console.log(o.x);
    console.log(o.y);
    let a = [1,2,3];
    console.log(a.join);
    Object.setPrototypeOf(a, p);
    console.log(a.join);
}

{
    let p = {z: 3};
    let o = {
        x: 1,
        y: 2,
        __proto__: p
    };
    console.log(o.z);
}