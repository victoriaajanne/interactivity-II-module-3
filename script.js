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
  let canClick = true;
  let runawayMode = false;
  let chaosStarted = [];

  const button = document.querySelector(".magicBtn");

  // SOUND
  const clickSound = new Audio("sound effects/click.mp3");
  const laughSound = new Audio("sound effects/laugh.mp3");
  const chaosSound = new Audio("sound effects/glitch.wav");

  button.addEventListener("click", handleClick);

  function handleClick() {
    if (!canClick) return;

    canClick = false;
    setTimeout(() => canClick = true, 600);

    clickSound.currentTime = 0;
    clickSound.play();

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
    const existingButtons = document.querySelectorAll(".magicBtn");
    if (existingButtons.length > 10) return;

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
    if (chaosStarted.includes(stage)) return;
    chaosStarted.push(stage);

    if (stage === 1) {
      document.body.style.fontStyle = "italic";
    }

    if (stage === 2) {
      setInterval(() => {
        document.querySelectorAll(".magicBtn").forEach(btn => {
          btn.style.top = Math.random() * window.innerHeight + "px";
        });
      }, 1200);
    }

    if (stage === 3) {
      laughSound.loop = true;
      laughSound.play();

      setInterval(() => {
        const laugh = document.createElement("p");
        laugh.textContent = "ha ha ha";
        laugh.style.position = "absolute";
        laugh.style.left = Math.random() * window.innerWidth + "px";
        laugh.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(laugh);
      }, 1000);
    }

    if (stage === 4) {
      chaosSound.play();

      let hue = 0;
      setInterval(() => {
        hue += 10;
        document.body.style.background = `hsl(${hue}, 80%, 80%)`;
      }, 500);
    }

    if (stage === 5) {
      runawayMode = true;

      document.body.innerHTML = "";

      const ending = document.createElement("div");
      ending.style.display = "flex";
      ending.style.flexDirection = "column";
      ending.style.justifyContent = "center";
      ending.style.alignItems = "center";
      ending.style.height = "100vh";

      const text = document.createElement("h1");
      text.textContent = "the dish ran away with the spoon...";

      const restart = document.createElement("button");
      restart.textContent = "start again";
      restart.classList.add("magicBtn");
      restart.onclick = () => location.reload();

      ending.appendChild(text);
      ending.appendChild(restart);
      document.body.appendChild(ending);
    }
  }

  // BUTTONS RUN AWAY
  document.addEventListener("mousemove", (e) => {
    if (!runawayMode) return;

    document.querySelectorAll(".magicBtn").forEach(btn => {
      const rect = btn.getBoundingClientRect();

      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        btn.style.left = rect.left - dx * 0.4 + "px";
        btn.style.top = rect.top - dy * 0.4 + "px";
      }
    });
  });

  // FLOATING BACKGROUND
  function floatingBackground() {
    setInterval(() => {
      const bubble = document.createElement("div");

      bubble.style.position = "absolute";
      bubble.style.width = "20px";
      bubble.style.height = "20px";
      bubble.style.borderRadius = "50%";
      bubble.style.background = "rgba(255,255,255,0.4)";
      bubble.style.left = Math.random() * window.innerWidth + "px";
      bubble.style.top = window.innerHeight + "px";
      bubble.style.transition = "transform 4s linear";

      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.style.transform = "translateY(-120vh)";
      }, 50);

      setTimeout(() => bubble.remove(), 4000);
    }, 800);
  }

  floatingBackground();

});