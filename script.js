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