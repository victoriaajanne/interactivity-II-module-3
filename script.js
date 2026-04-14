

 --


document.addEventListener("DOMContentLoaded", () => {

  const poemLines = [
    "Hey diddle diddle,",
    "The cat and the fiddle,",
    "The cow jumped over the moon;",
    "The little dog laughed",
    "To see such sport,",
    "And the dish ran away with the spoon."
  ];

  let index = 0;

  const button = document.querySelector(".magicBtn");

  if (!button) {
    console.log("Button not found");
    return;
  }

  button.addEventListener("click", handleClick);

  function handleClick() {
    const poemDiv = document.getElementById("poem");

    if (index < poemLines.length) {
      const p = document.createElement("p");
      p.textContent = poemLines[index];
      poemDiv.appendChild(p);

      triggerChaos(index);
      index++;
    }

    duplicateButton();
  }

  function duplicateButton() {
    const newBtn = document.createElement("button");
    newBtn.textContent = "Click me 🐄";
    newBtn.classList.add("magicBtn");

    newBtn.style.position = "absolute";
    newBtn.style.top = Math.random() * window.innerHeight + "px";
    newBtn.style.left = Math.random() * window.innerWidth + "px";

    newBtn.addEventListener("click", handleClick);
    document.body.appendChild(newBtn);
  }

  function triggerChaos(stage) {

    if (stage === 1) {
      setInterval(() => {
        document.querySelectorAll(".magicBtn").forEach(btn => {
          btn.style.transform = `translate(${Math.random()*5}px, ${Math.random()*5}px)`;
        });
      }, 300);
    }

    if (stage === 2) {
      setInterval(() => {
        document.querySelectorAll(".magicBtn").forEach(btn => {
          btn.style.top = Math.random() * window.innerHeight + "px";
          btn.style.left = Math.random() * window.innerWidth + "px";
        });
      }, 800);
    }

    if (stage === 3) {
      setInterval(() => {
        const laugh = document.createElement("p");
        laugh.textContent = "ha ha ha";
        laugh.style.position = "absolute";
        laugh.style.top = Math.random() * window.innerHeight + "px";
        laugh.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(laugh);
      }, 500);
    }

    if (stage === 4) {
      setInterval(() => {
        document.body.style.backgroundColor =
          `hsl(${Math.random() * 360}, 100%, 80%)`;

        document.body.style.transform =
          `rotate(${Math.random() * 2 - 1}deg)`;
      }, 300);
    }

    if (stage === 5) {
      document.body.innerHTML = "";

      const finalBtn = document.createElement("button");
      finalBtn.textContent = "run away";
      finalBtn.style.fontSize = "30px";

      finalBtn.onclick = () => location.reload();

      document.body.appendChild(finalBtn);
    }
  }

});