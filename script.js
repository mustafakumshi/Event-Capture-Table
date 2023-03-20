let input = document.getElementById("input");
let button = document.getElementById("button");
let tBody = document.getElementById("table-container");

const eventCapture = function (eventName) {
  let inputCountVal = 1;
  let buttonCountVal = 1;
  const handler = function (e) {
    if (
      document.querySelector(`.${eventName}${e.target.id}`) &&
      e.target.id === "input"
    ) {
      inputCountVal += 1;
      document
        .querySelector(`.${eventName}${e.target.id}`)
        .querySelector(".count").innerText = inputCountVal;
    } else if (
      document.querySelector(`.${eventName}${e.target.id}`) &&
      e.target.id === "button"
    ) {
      buttonCountVal += 1;
      document
        .querySelector(`.${eventName}${e.target.id}`)
        .querySelector(".count").innerText = buttonCountVal;
    } else {
      let numVal = document.querySelectorAll(".count").length + 1;
      let display = e.target.id === "input" ? inputCountVal : buttonCountVal;
      let html = `
      <tr class = "${eventName}${e.target.id}">
      <td class = "sr-no">${numVal}</td>
      <td class="event">${eventName}</td>
      <td class="element">${e.target.id}</td>
      <td class="count">${display}</td>
      <td class="custom-attributes">NA</td>
      </tr>
      `;
      tBody.insertAdjacentHTML("beforeend", html);
    }
  };
  input.addEventListener(eventName, handler);
  button.addEventListener(eventName, handler);
};

eventCapture("focus");
eventCapture("blur");
eventCapture("click");
eventCapture("keydown");
eventCapture("keypress");
eventCapture("keyup");
eventCapture("mouseover");
eventCapture("mousedown");
eventCapture("mouseup");
eventCapture("mouseout");
