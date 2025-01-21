let counterValueEl = document.getElementById("counterValue");
function onIncrement() {
  let previousCounterValue = counterValueEl.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterValueEl.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterValueEl.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterValueEl.style.color = "red";
  } else {
    counterValueEl.style.color = "black";
  }
}

function onDecrement() {
  let previousCounterValue = counterValueEl.textContent;
  let updatedCounterValue = previousCounterValue - 1;
  counterValueEl.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterValueEl.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterValueEl.style.color = "red";
  } else {
    counterValueEl.style.color = "black";
  }
}

function onReset() {
  let updatedCounterValue = 0;
  counterValueEl.textContent = updatedCounterValue;
  counterValueEl.style.color = "black";
}
