let timerEl = document.getElementById("timer");
let countDown = 10;
let uniqueId = setInterval(() => {
  countDown = countDown - 1;
  timerEl.textContent = countDown;

  if (countDown === 0) {
    timerEl.textContent = "BOOM💥";
    clearInterval(uniqueId);
  }
}, 1000);

let defuserEl = document.getElementById("defuser");
defuserEl.addEventListener("keydown", function (event) {
  let defuserText = defuserEl.value;
  if (event.key === "Enter" && defuserText === "defuse" && countDown !== 0) {
    timerEl.textContent = "You did it👏";
    clearInterval(uniqueId);
  }
});
