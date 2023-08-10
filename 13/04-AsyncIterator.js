{
    const fs = require("fs");

    async function parseFile(filename) {
        let stream = fs.createReadStream(filename, { encoding: "utf-8"});
        for await (let chunk of stream) {
            parseChunk(chunk);
        }
    }

    const urls = [url1, url2, url3];
    const promises = urls.map(url => fetch(url));
    for (const promise of promises) {
        response = await promise;
        handle(response);
    }
    for await (const response of promises) {
        handle(response);
    }
}
{
    function elapsedTime(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function * clock(interval, max = Infinity) {
        for (let count = 1; count <= max; count++) {
            await elapsedTime(interval);
            yield count;
        }
    }
    async function text() {
        for await (let tick of clock(300, 100)) {
            console.log(tick);
        }
    }
}
{
    function clock(interval, max = Infinity) {
        function until(time) {
            return new Promise(resolve => setTimeout(resolve, time - Date.now()));
        }
        return {
            startTime: Date.now(),
            count: 1,
            async next() {
                if (this.count > max) {
                    return {done: true};
                }
                let targetTime = this.startTime + this.count * interval;
                await until(targetTime);
                return {value: this.count++};
            },
            [Symbol.asyncIterator]() { return this; }
        };
    }
}
{
    class AsyncQueue {
        constructor() {
            this.values = [];
            this.resolvers = [];
            this.closed = false;
        }
        enqueue(value) {
            if (this.closed) {
                throw new Error("1");
            }
            if (this.resolvers.length > 0) {
                const resolve = this.resolvers.shift();
                resolve(value);
            } else {
                this.values.push(value);
            }
        }
        dequeue() {
            if (this.values.length > 0) {
                const value = this.values.shift();
                return Promise.resolve(value);
            } else if (this.closed) {
                return Promise.resolve(AsyncQueue.EOS);
            } else {
                return new Promise((resolve) => { this.resolvers.push(resolve); });
            }
        }
        close() {
            while (this.resolvers.length > 0) {
                this.resolvers.shift()(AsyncQueue.EOS);
            }
            this.closed = true;
        }
        [Symbol.asyncIterator]() { return this; }
        next() {
            return this.dequeue().then(value => (value === AsyncQueue.EOS) ? { value: undefined, done: true} : { value: value, done: false});
        }
    }
    AsyncQueue.EOS = Symbol("end-of-stream");

    function eventStream(elt, type) {
        const q = new AsyncQueue();
        elt.addEventListener(type, e => q.enqueue(e));
        return q;
    }
    async function handleKeys() {
        for await (const event of eventStream(document, "keypress")) {
            console.log(event.key);
        }
    }
}