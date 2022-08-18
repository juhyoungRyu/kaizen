import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

add.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});

console.log(countStore.getState());
