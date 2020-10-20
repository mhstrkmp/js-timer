import "./app.css";
import { createElement } from "./utils/element";
import { Countdown } from "./Countdown";

// Variable Declaration
let initialTime = 60;

// Function Declaration

export function createTimer() {
  const countdown = Countdown();
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
  timer.append(countdown);
  return timer;
}
