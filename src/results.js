import { Data } from "./data.js";

console.log(JSON.parse(localStorage.getItem("a")));

const totalIndex = JSON.parse(localStorage.getItem("a"));

const containerEl = document.querySelector(".container");

containerEl.innerHTML = /* html */ `
<div class="result-picture" style="background-image: url('${
  Data[totalIndex[0]].src
}')"></div>
<div class="sub-title">${Data[totalIndex[0]].title}</div>
`;

localStorage.clear();
