
// getJson(url).then(jsonData => { /* do something */ })
// function displayUserProfile(profile) { /* do something */ }
// getJson("/api/user/profile").then(displayUserProfile);
// function handleProfileError(e) { /* do some thing */ }
// getJson("/api/user/profile").then(displayUserProfile, handleProfileError);
// getJson("/api/user/profile").then(displayUserProfile).catch(handleProfileError);

// fetch(documentURL)
// .then(response => response.json())
// .then(document => { return render(document); })
// .then(rendered => { cacheInDatabase(rendered); })
// .catch(error => handle(error));

fetch("/api/user/profile").then(response => {
    if (response.ok && response.headers.get("Content-Type") === "application/json") {
        // do something
    }
});

fetch("/api/user/profile").then(response => {
    response.json().then(profile => {
        displayUserProfile(profile);
    });
});

fetch("/api/user/profile")
    .then(response => { return response.json(); })
    .then(profile => { displayUserProfile(); });

fetch(thenURL).then(callback1).then(callback2);

function c1(response) {
    let p4 = response.json();
    return p4;
}
function c2(profile) {
    displayUserProfile(profile);
}
let p1 = fetch("/api/user/profile");
let p2 = p1.then(c1);
let p3 = p2.then(c2);

p.then(null, c);
p.catch(c);

fetch("/api/user/profile").then(response => {
    if (!response.ok) {
        return null;
    }
    let type = response.headers.get("content-type");
    if (type != "application/json") {
        throw new TypeError(`Expected JSON, got ${type}`);
    }
    return response.json();
}).then(profile => {
    if (profile) {
        displayUserProfile(profile);
    } else {
        displayLoggedOutProfilePage();
    }
}).catch(e => {
    if (e instanceof NetworkError) {
        displayErrorMessage("network error");
    } else if (e instanceof TypeError) {
        displayErrorMessage("type error");
    } else {
        console.error(e);
    }
});

startAsyncOperation()
    .then(doStage2())
    .catch(recoverFromStage2())
    .then(doStage3())
    .then(doStage4())
    .catch(recoverFromStage34());

queryDatabase().then(displayTable).catch(displayDatabaseError);

queryDatabase().catch(e => wait(500).then(queryDatabase)).then(displayTable).catch(displayDatabaseError);


const urls = [];
promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.all(promises).then(bodies => {}).catch(e => console.error(e));
