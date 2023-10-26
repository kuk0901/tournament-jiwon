import { Data } from "./data.js";
import { randomIndex8, showNextPage } from "./components/Questions.js";

// totalIndex는 배열 데이터
const totalIndex = randomIndex8();

// 페이지 구성
const containerAEl = document.querySelector(".container-a");
const containerBEl = document.querySelector(".container-b");

containerAEl.innerHTML = /* html */ `
<div class="first" style="background-image: url('${
  Data[totalIndex[0]].src
}')"></div>
<div class="sub-title">${Data[totalIndex[0]].title}</div>
`;
containerBEl.innerHTML = /* html */ `
<div class="second" style="background-image: url('${
  Data[totalIndex.at(-1)].src
}')"></div>
<div class="sub-title">${Data[totalIndex.at(-1)].title}</div>
`;

let indexX = 0;
let indexY = 0;
let arrIndex = [];

containerAEl.addEventListener("click", () => {
  containerAEl.classList.add("index");
  getIndex(indexX);
  removeIndex(totalIndex);
  containerAEl.classList.remove("index");
});
containerBEl.addEventListener("click", () => {
  containerBEl.classList.add("index");
  getIndex(indexY);
  removeIndex(totalIndex);
  containerBEl.classList.remove("index");
});

// 클릭 받은 Data의 index를 얻기위한 함수
function getIndex(index) {
  if (containerAEl.classList.contains("index")) {
    arrIndex.push(index);
  }
  if (containerBEl.classList.contains("index")) {
    arrIndex.push(index);
  }
  // console.log(arrIndex);
}

function removeIndex(totalIndex) {
  if (totalIndex.length === 0) {
    localStorage.setItem("a", JSON.stringify(arrIndex));
    showNextPage("/questions_4_home.html");
    return;
  }
  indexX = totalIndex.shift();
  indexY = totalIndex.pop();
  templateContainer(indexX, indexY);

  function templateContainer(x, y) {
    containerAEl.innerHTML = /* html */ `
      <div class="first" style="background-image: url('${Data[x].src}')"></div>
      <div class="sub-title">${Data[x].title}</div>
      `;
    containerBEl.innerHTML = /* html */ `
      <div class="second" style="background-image: url('${Data[y].src}')"></div>
      <div class="sub-title">${Data[y].title}</div>
      `;
  }
}

removeIndex(totalIndex);
