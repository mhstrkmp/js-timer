import "./app.css";
import { createElement } from "./utils/element";

// Variable Declaration
let initialTime = 60;

// Function Declaration

export function createTimer() {
  const timer = createElement("div", {
    className: "timer",
    children: [
      createElement("div", {
        className: "seconds",
        innerText: initialTime,
      }),
      createElement("button", {
        className: "timer--button",
        innerText: "Click Me!!!",
      }),
    ],
  });
  return timer;
}
