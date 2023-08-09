{
    let t = {x:1, y:2};
    let p = new Proxy(t, {});

    console.log(p.x);
    delete p.y;
    console.log(t.y);
    p.z = 3;
    console.log(t.z);
}
{
    function accessTheDatabase() { return 42; }
    let {proxy, revoke} = Proxy.revocable(accessTheDatabase, {});
    console.log(proxy());
    revoke();
    //console.log(proxy());     // TypeError
}
{
    let identity = new Proxy({}, {
        get(o, name, target) { return name; },
        has(o, name) { return true; },
        ownKeys(o) { throw new RangeError("Infinite number of properties"); },
        getOwnPropertyDescriptor(o, name) {
            return {
                value: name,
                enumerable: false,
                writable: false,
                configurable: false
            };
        },
        set(o, name, value, target) { return false; },
        deleteProperty(o, name) { return false; },
        defineProperty(o, name, desc) { return false; },
        isExtensible(o) { return false; },
        getPrototypeOf(o) { return null; },
        setPrototypeOf(o, proto) { return false; },
    });
    console.log(identity.x);
    console.log(identity.toString);
    console.log(identity[0]);
    identity.x = 1;
    console.log(identity.x);
    delete identity.x;
    console.log(identity.x);
    //console.log(Object.keys(identity));
    //for (let p of identity) ;
}

{
    function readOnlyProxy(o) {
        function readonly() { throw new TypeError("Readonly"); }
        return new Proxy(o, {
            set: readonly,
            deleteProperty: readonly,
            defineProperty: readonly,
            setPrototypeOf: readonly,
        });
    }
    let o = {x:1, y:2};
    let p = readOnlyProxy(o);
    console.log(p.x);
    //p.x = 2;
    //delete p.y;
    //p.z = 3;
    //p.__proto__ = {};
}

{
    function loggingProxy(o, objname) {
        const handlers = {
            get(target, property, receiver) {
                console.log(`Handler get(${objname}, ${property.toString()})`);
                let value = Reflect.get(target, property, receiver);
                if (Reflect.ownKeys(target).includes(property) && (typeof value === "object" || typeof value === "function")) {
                    return loggingProxy(value, `${objname}.${property.toString()}`);
                }
                return value;
            },
            set(target, prop, value, receiver) {
                console.log(`Handler set(${objname}, ${prop.toString()}, ${value})`);
                return Reflect.set(target, prop, value, receiver);
            },
            apply(target, receiver, args) {
                console.log(`Handler ${objname}(${args})`);
                return Reflect.apply(target, receiver, args);
            },
            construct(target, args, receiver) {
                console.log(`Handler ${objname}(${args})`);
                return Reflect.construct(target, args, receiver);
            }
        };
        Reflect.ownKeys(Reflect).forEach(handlerName => {
            if (!(handlerName in handlers)) {
                handlers[handlerName] = function(target, ...args) {
                    console.log(`Handler ${handlerName}(${objname}, ${args})`);
                    return Reflect[handlerName](target, ...args);
                };
            }
        });
        return new Proxy(o, handlers);
    }

    let data = [10, 20];
    let methods = { square: x => x * x };
    let proxyData = loggingProxy(data, "data");
    let proxyMethods = loggingProxy(methods, "methods");

    console.log(data.map(methods.square));
    console.log(proxyData.map(methods.square));
    console.log(data.map(proxyMethods.square));
    for (let x of proxyData) console.log("Datum", x);
}

{
    let target = Object.preventExtensions({});
    let proxy = new Proxy(target, { isExtensible() { return true; }});
    //Reflect.isExtensible(proxy);
}
{
    let target = Object.freeze({x:1});
    let proxy = new Proxy(target, { get() { return 99; }});
    //proxy.x;
}