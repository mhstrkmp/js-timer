import "./app.css";
import { createElement } from "./utils/element";

let initialTime = 60;

export function createTimer() {
  const timer = createElement("div", {
    className: "timer",
    children: [
      createElement("div", {
        className: "seconds",
        innerText: initialTime,
      }),
    ],
  });
  return timer;
}
