import { Data } from "./data.js";

console.log(JSON.parse(localStorage.getItem("a")));

const totalIndex = JSON.parse(localStorage.getItem("a"));

const sectionEl = document.querySelector(".section");

sectionEl.innerHTML = /* html */ `
  <div class="section-content">
    <div class="container">
      <div class="result-picture" style="background-image: url('${
        Data[totalIndex[0]].src
      }')"></div>
      <div class="sub-title">${Data[totalIndex[0]].title}</div>
    </div>
  </div>
`;

localStorage.clear();
