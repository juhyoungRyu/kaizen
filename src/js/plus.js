//btn을 위한 변수들
const plus = document.querySelector(".btn");
const plusImg = document.querySelector(".button");
const form = document.getElementById("toDoInput");
const a = document.querySelector("#a");
//todo를 위한 변수들
const toDoInput = document.querySelector("#toDoInput");
const toDoForm = document.querySelector("#form");
const toDoList = document.querySelector("#toDoList");

const TODOS_KEY = "todos";

let toDos = [];

let count = 0;

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
  const a = document.createElement("a");
  button.appendChild(a);
  a.innerText = "🗅";
  li.appendChild(span);
  span.innerText = `  ${newTodo.text}`;
  toDoList.appendChild(li);
  li.addEventListener("click", clickEvent);
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
  saveTodo();
}

function clickEvent() {
  console.log("You Click this Btn");
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

plus.addEventListener("click", handlePlus);
plusImg.addEventListener("click", handlePlus);

toDoInput.addEventListener("submit", handleToDoSubmit);
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
