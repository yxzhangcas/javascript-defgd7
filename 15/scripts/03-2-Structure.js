document.children[0].children[1]
document.firstElementChild.firstElementChild.nextElementSibling

function traverse(e, f) {
    f(e);
    for (let child of e.children) {
        traverse(child, f);
    }
}
function traverse2(e, f) {
    f(e);
    let child = e.firstElementChild;
    while (child !== null) {
        traverse2(child, f);
        child = child.nextElementSibling;
    }
}

document.childNodes[0].childNodes[1]
document.firstChild.firstChild.nextSibling