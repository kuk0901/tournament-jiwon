import { Data } from "../data.js";

const dataIndex = Data.length;

// 인덱스 번호가 될 숫자 10개를 랜덤으로 뽑는 함수
// let randomIndexArray = [];
export function randomIndex8() {
  let randomIndexArray = [];
  for (let i = 0; i < dataIndex; i++) {
    let randomNum = Math.floor(Math.random() * dataIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}

export function showNextPage(page) {
  location.href = `${page}`; // 쿼리스트링
}
