class DefaultMap extends Map {                  // 继承Map类
    constructor(defaultValue) {
        super();                                // 执行父构造函数
        this.defaultValue = defaultValue;       // 成员变量
    }
    get(key) {                                  // 覆写父方法（未有明确标识）
        if (this.has(key)) {
            return super.get(key);              // 执行父方法
        } else {
            return this.defaultValue;
        }
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);  // 成员变量（Map未声明kv类型）
        this.totalLetters = 0;
    }
    add(text) {                                             // 方法没有任何前缀标识，类似：def, function等
        text = text.replace(/\s/g, "").toUpperCase();       // 删除空白行，转换大写
        for (let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }
    toString() {
        let entries = [...this.letterCounts];               // (k => v) 转换成 ？[(k,v), ...]
        entries.sort((a, b) => {                            // 排序(stream)
            if(a[1] == b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100;
        }
        entries = entries.filter(entry => entry[1] >= 1);   // stream filter
        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`    // stream map
        );
        return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

histogramFromStdin().then(histogram => {console.log(histogram.toString());});

// Windows PowerShell
// > Get-Content .\05-CharFreq.js | node .\05-CharFreq.js