let spinner = document.querySelector("#spinner");
let titles = document.querySelectorAll("h1, h2, h3");

let hyperlink = spinner.closest("a[href]");
function insideList(e) {
    return e.closest("ul, ol, dl") != null;
}
function isHeading(e) {
    return e.matches("h1, h2, h3, h4, h5, h6");
}

let sec1 = document.getElementById("sec1");
let _sec1 = document.querySelector("#sec1");

let colors = document.getElementsByName("color");
let _colors = document.querySelectorAll('*[name="color"]');

let headings = document.getElementsByTagName("h1");
let _headings = document.querySelectorAll("h1");

let subheads = sec1.getElementsByTagName("h2");
let _subheads = _sec1.querySelectorAll("h2");

let tooltips = document.getElementsByClassName("tooltip");
let _tooltips = document.querySelectorAll(".tooltip");

let sidebars = sec1.getElementsByClassName("sidebar");
let _sidebars = _sec1.querySelectorAll(".sidebar");