// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
마우스를 텍스트에 올려놓았을 때 텍스트를 변경
✅ The text of the title should change when the mouse is leaves it.
마우스가 텍스트에서 나왔을 때 텍스트를 변경
✅ When the window is resized the title should change.
브라우저 사이즈가 바뀌었을 때 텍스트를 변경
✅ On right click the title should also change.
텍스트를 오른쪽 클릭하면 텍스트를 변경
✅ The colors of the title should come from a color from the colors array.
글자 색은 위에 배열에서만 사용하기
✅ DO NOT CHANGE .css, or .html files.
css / html 파일은 변경금지 js만
✅ ALL function handlers should be INSIDE of "superEventHandler"
모든 함수는 superEventHandler 안에서 사용하기
*/

const superEventHandler = {
  mouseOnText: function () {
    h2.innerText = "잘했어요!";
    h2.style.color = colors[1];
  },
  mouseLeaveText: function () {
    h2.innerText = "마우스가 떠났어요 :(";
    h2.style.color = colors[2];
  },
  resizebrowser: function () {
    h2.innerText = "창의 크기가 바뀌었네요!";
    h2.style.color = colors[3];
  },
  handleTitleClick: function () {
    h2.innerText = "어딘가를 우클릭하셨군요?";
    h2.style.color = colors[4];
  }
};

const h2 = document.querySelector("h2");

h2.style.color = colors[0];
h2.innerText = "마우스를 올려보세요 :)";

// function mouseOnText() {
//   // 1번 이벤트
//   h2.innerText = "The mouse is here!";
//   h2.style.color = colors[1];
// }

// function mouseLeaveText() {
//   // 2번 이벤트
//   h2.innerText = "The mouse is leave!";
//   h2.style.color = colors[2];
// }

// function resizebrowser() {
//   // 3번 이벤트
//   h2.innerText = "Your browser is risized!";
//   h2.style.color = colors[3];
// }

// function handleTitleClick() {
//   // 4번 이벤트 - 오른쪽 클릭 = 주가 아닌 장치 버튼
//   h2.innerText = "It was clicked!";
//   h2.style.color = colors[4];
// }

h2.addEventListener("mouseover", superEventHandler.mouseOnText);
h2.addEventListener("mouseleave", superEventHandler.mouseLeaveText);
window.addEventListener("resize", superEventHandler.resizebrowser);
window.addEventListener("auxclick", superEventHandler.handleTitleClick);
