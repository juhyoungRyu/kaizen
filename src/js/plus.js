//btn을 위한 변수들
const plus = document.querySelector(".btn");
const plusImg = document.querySelector(".button");
const form = document.getElementById("toDoInput");
const a = document.querySelector("#a");
//todo를 위한 변수들
const toDoInput = document.querySelector("#toDoInput");
const toDoForm = document.querySelector("#form");
const toDoList = document.querySelector("#toDoList");

let count = 0;

let toDos = [];

//버튼을 한 번 누르면 메뉴가 나오고 다시 누르면 사라지게 만듦
function handlePlus(event) {
  event.preventDefault();
  count++;
  if (count % 2 == 0) {
    form.classList.add("hidden");
    a.classList.add("hidden");
  } else {
    form.classList.remove("hidden");
    a.classList.remove("hidden");
  }
}

//form에 입력한 value가  ul에 출력되게 만듦
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const button = document.createElement("button");
  const span = document.createElement("span");

  li.appendChild(button);
  li.appendChild(span);
  span.innerText = `  ${newTodo.text}`;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
}

plus.addEventListener("click", handlePlus);
plusImg.addEventListener("click", handlePlus);

toDoInput.addEventListener("submit", handleToDoSubmit);
toDoForm.addEventListener("submit", handleToDoSubmit);
