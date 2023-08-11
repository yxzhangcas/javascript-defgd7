function textContent(e) {
    let s = "";
    for (let child = e.firstChild; child != null; child = child.nextSibling) {
        let type = child.nodeType;
        if (type === 3) {
            s += child.nodeValue;
        } else if (type === 1) {
            s += textContent(child);
        }
    }
    return s;
}

console.log(textContent(document));