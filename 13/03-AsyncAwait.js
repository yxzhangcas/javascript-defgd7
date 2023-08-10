async function getHighScore() {
    let response = await fetch("/api/user/profile");
    let profile = await response.json();
    return profile.highScore;
}
getHighScore().then(displayHighScore).catch(console.error);

async function getJSON(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

let [value1, value2] = await Promise.all([getJson(url1), getJSON(url2)]);

async function f(x) {}

function f(x) {
    return new Promise(function(resolve, reject) {
        try {
            resolve((function(x){})(x));
        } catch(e) {
            reject(e);
        }
    });
}