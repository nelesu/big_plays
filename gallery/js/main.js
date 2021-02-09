const testFolder = './img/';
const fs = require('fs');

let fig = document.createElement("figure");
fig.className = "ph";
let a = document.createElement('a');
a.href = `${Math.random()}`;
fig.appendChild(a);

document.getElementById("gallery").appendChild(fig);
