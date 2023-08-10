Promise.allSettled(
    [Promise.resolve(1), Promise.reject(2), 3]
).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});

function getJSON(url) {
    return fetch(url).then(response => response.json);
}
function getHighScore() {
    return getJSON("/api/user/profile").then(profile => profile.highScore);
}

function wait(duration) {
    return new Promise((resolve, reject) => {
        if (duration < 0) {
            reject(new Error("1"));
        }
        setTimeout(resolve, duration);
    });
}

const http = require("http");

function getJSON(url) {
    return new Promise((resolve, reject) => {
        request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error("1"));
                response.resume();
            } else if (response.headers["content-type"] !== "application/json") {
                reject(new Error("2"));
                response.resume();
            } else {
                let body = "";
                response.setEncoding("utf-8");
                response.on("data", chunk => { body += chunk; });
                response.on("end", () => {
                    try {
                        let parsed = JSON.parse(body);
                        resolve(parsed);
                    } catch(e) {
                        reject(e);
                    }
                });
            }
        });
        request.on("error", error => {
            reject(error);
        });
    });
}