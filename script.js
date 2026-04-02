let clickCount = 0;

function revealNext(nextId, clickedButton) {
  const nextEl = document.getElementById(nextId);
  if (nextEl) {
    nextEl.classList.remove("hidden");
  }

  clickCount++;

  const newBtn = document.createElement("button");
  newBtn.className = "poem-btn floating";
  newBtn.textContent = "button " + clickCount;
  newBtn.style.left = Math.random() * 80 + "vw";
  newBtn.style.top = Math.random() * 70 + "vh";
  newBtn.style.backgroundColor = `rgb(${255 - clickCount * 20}, ${200 - clickCount * 10}, 255)`;
  newBtn.onclick = function () {
    this.remove();
  };

  document.body.appendChild(newBtn);
}

// Example 1: Alert
const button = document.getElementById("myButton");

button.addEventListener("click", handleClick);

function handleClick() {
  alert("Button was clicked!");
}

// Example 2: Change Text
const clickButton = document.getElementById("clickButton");
const message = document.getElementById("message");

clickButton.addEventListener("click", showMessage);

function showMessage() {
  message.textContent = "Button was clicked!";
}