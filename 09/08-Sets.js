class AbstractSet {
    has(x) {
        throw new Error("Abstract Method");
    }
}
class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }
    has(x) {
        return !this.set.has(x);
    }
    toString() {
        return `{x | x not in ${this.set.toString()}}`;
    }
}
class RangeSet extends AbstractSet {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }
    has(x) {
        return x >= this.from && x <= this.to;
    }
    toString() {
        return `{x | ${this.from} <= x <= ${this.to}}`;
    }
}
class AbstractEnumerableSet extends AbstractSet {
    get size() {
        throw new Error("Abstract Method");
    }
    [Symbol.iterator]() {
        throw new Error("Abstract Method");
    }
    isEmpty() {
        return this.size === 0;
    }
    toString() {
        return `{${Array.from(this).join(", ")}}`;
    }
    equals(set) {
        if (!(set instanceof AbstractEnumerableSet)) return false;
        if (this.size !== set.size) return false;
        for (let element of this) {
            if (!set.has(element)) return false;
        }
        return true;
    }
}
class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super();
        this.member = member;
    }
    has(x) {
        return x === this.member;
    }
    get size() {
        return 1;
    }
    *[Symbol.iterator]() {
        yield this.member;
    }
}
