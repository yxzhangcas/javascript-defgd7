{
    let uint8 = {
        [Symbol.hasInstance](x) {
            return Number.isInteger(x) && x >= 0 && x <= 255;
        }
    };
    console.log(128 instanceof uint8);
    console.log(256 instanceof uint8);
    console.log(Math.PI instanceof uint8);
    console.log(Object.getOwnPropertyNames(uint8));
    console.log(Object.getOwnPropertySymbols(uint8));
}

{
    console.log({}.toString());

    console.log(Object.prototype.toString.call([]));
    console.log(Object.prototype.toString.call(/./));
    console.log(Object.prototype.toString.call(()=>{}));
    console.log(Object.prototype.toString.call(""));
    console.log(Object.prototype.toString.call(0));
    console.log(Object.prototype.toString.call(false));
}

{
    function classOf(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
    }
    console.log(classOf(null));
    console.log(classOf(undefined));
    console.log(classOf(1));
    console.log(classOf(10n**100n));
    console.log(classOf(""));
    console.log(classOf(false));
    console.log(classOf(Symbol()));
    console.log(classOf({}));
    console.log(classOf([]));
    console.log(classOf(/./));
    console.log(classOf(()=>{}));
    console.log(classOf(new Map()));
    console.log(classOf(new Set()));
    console.log(classOf(new Date()));

    console.log(typeof(null));
    console.log(typeof(undefined));
    console.log(typeof(1));
    console.log(typeof(10n**100n));
    console.log(typeof(""));
    console.log(typeof(false));
    console.log(typeof(Symbol()));
    console.log(typeof({}));
    console.log(typeof([]));
    console.log(typeof(/./));
    console.log(typeof(()=>{}));
    console.log(typeof(new Map()));
    console.log(typeof(new Set()));
    console.log(typeof(new Date()));

    class Range {
        get [Symbol.toStringTag]() {
            return "Range";
        }
    }
    let r = new Range(1, 10);
    console.log(Object.prototype.toString.call(r));
    console.log(classOf(r));
    console.log(typeof(r));
}

{
    class EZArray extends Array {
        get first() {return this[0];}
        get last() {return this[this.length-1];}
    }
    let e = new EZArray(1,2,3);
    let f = e.map(x => x * x);
    console.log(e.last);
    console.log(f.last);

    EZArray[Symbol.species] = Array;        // 修改无效
    let g = e.map(x => x * x);
    console.log(g.last);

    Object.defineProperty(EZArray, Symbol.species, {value: Array});
    let h = e.map(x => x * x);
    console.log(h.last);                    // undefined
}

{
    let arrayLike = {
        length: 1,
        0: 1,
        [Symbol.isConcatSpreadable]: true
    };
    console.log([].concat(arrayLike));
    arrayLike[Symbol.isConcatSpreadable] = false;
    console.log([].concat(arrayLike));
    arrayLike[Symbol.isConcatSpreadable] = true;
    console.log([].concat(arrayLike));
    class NonSpreadableArray extends Array {
        get [Symbol.isConcatSpreadable]() { return false; }
    }
    let a = new NonSpreadableArray(1,2,3);
    console.log([].concat(a))
}

{
    class Glob {
        constructor(glob) {
            this.glob = glob;
            let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");
            this.regexp = new RegExp(`^${regexpText}$`, "u");
        }
        toString() { return this.glob; }
        [Symbol.search](s) { return s.search(this.regexp); }
        [Symbol.match](s) { return s.match(this.regexp); }
        [Symbol.replace](s, replacement) { return s.replace(this.regexp, replacement); }
    }
    let pattern = new Glob("docs/*.txt");
    console.log("docs/js.txt".search(pattern));
    console.log("docs/js.html".search(pattern));
    let match = "docs/js.txt".match(pattern);
    console.log(match[0]);
    console.log(match[1]);
    console.log(match.index);
    console.log("docs/js.txt".replace(pattern, "web/$1.html"));
}

{
    let newArrayMethods = Object.keys(Array.prototype[Symbol.unscopables]);
}