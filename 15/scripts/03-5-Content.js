//document.body.innerHTML = "<h1>Oops</h1>";

let para = document.querySelector("p");
let text = para.textContent;
para.textContent = "Hello World";

let paragraph = document.createElement("p");
let emphasis = document.createElement("em");
emphasis.append("World");
paragraph.append("Hello ", emphasis, "!");
paragraph.prepend("i");
console.log(paragraph.innerHTML);

// let greetings = document.querySelector("h2.greetings");
// greetings.after(paragraph, document.createElement("hr"));


document.body.append(paragraph)