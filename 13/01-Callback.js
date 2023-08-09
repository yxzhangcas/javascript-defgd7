{
    let count = 0;

    function checkForUpdates() {
        console.log("...check..." + count++);
    }

    setTimeout(checkForUpdates, 2000);

    let updateIntervalId = setInterval(checkForUpdates, 2000);

    function stopCheckingForUpdates() {
        clearInterval(updateIntervalId);
    }
}
{
    function applyUpdate() {}

    let okay = document.querySelector('#confirmUpdateDialog button.okay');

    okay.addEventListener('click', applyUpdate);
}
{
    function getCurrentVersionNumber(versionCallback) {
        let request = new XMLHttpRequest();
        request.open("GET", "http://www.example.com/api/version");
        request.send();

        request.onload = function() {
            if (request.status === 200) {
                let currentVersion = parseFloat(request.responseText);
                versionCallback(null, currentVersion);
            } else {
                versionCallback(request.statusText, null);
            }
        };
        request.onerror = request.ontimeout = function(e) {
            versionCallback(e.type, null);
        }
    }
}
{
    const fs = require("fs");
    let options = {};
    fs.readFile("config.json", "utf-8", (err, text) => {
        if (err) {
            console.warn("warn...");
        } else {
            Object.assign(options, JSON.parse(text));
        }
        startProgram(options);
    })
}
{
    const https = require("https");
    function getText(url, callback) {
        request = https.get(url);
        request.on("response", response => {
            let httpStatus = response.statusCode;
            response.setEncoding("utf-8");
            let body = "";
            response.on("data", chunk => { body += chunk; });
            response.on("end", () => {
                if (httpStatus === 200) {
                    callback(null, body);
                } else {
                    callback(httpStatus, null);
                }
            });
        });
        request.on("error", (err) => {
            callback(err, null);
        });
    }
}