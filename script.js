document.addEventListener("DOMContentLoaded", () => {

  const poemLines = [
    "Hey diddle diddle,",
    "The cat",
    "And the fiddle,",
    "The cow jumped over the moon,",
    "The little dog laughed",
    "To see such fun,",
    "The dish ran away with the spoon."
  ];

  const backgrounds = [
    "images/0.5.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
  ];

  const emojis = ["✨","🌟","🎵","📖","🐱","🐶","🎻","🌙"];

  let index = 0;
  let started = false;
  let flashInterval = null;
  let emojiInterval = null;

  const button = document.querySelector(".magicBtn");
  const poemDiv = document.getElementById("poem");
  const bg = document.getElementById("background");

  bg.style.backgroundImage = `url(${backgrounds[0]})`;

  button.addEventListener("click", () => {

    //  START
    if (!started) {
      started = true;
      button.textContent = "➡️ Next Page";
      startEmojiStream();
    }

    // RESTART
    if (index >= poemLines.length) {
      index = 0;
      poemDiv.innerHTML = "";
      bg.style.backgroundImage = `url(${backgrounds[0]})`;

      stopFlash(); // flashing stop here
      button.textContent = "📖 Click to Start";

      return;
    }

    const line = poemLines[index].trim();

    // TEXT
    poemDiv.innerHTML = line;

    // IMAGE
    bg.style.backgroundImage = `url(${backgrounds[index + 1]})`;

    // HAHA text
    if (line === "The little dog laughed") {
      spawnHaha();
    }

    // START FLASH 
    if (line === "To see such fun,") {
      startFlash();
    }

    index++;

    // FINAL BUTTON 
    if (index === poemLines.length) {
      button.textContent = "🔁 Restart";
    }
  });

  // EMOJI STREAM 
  function startEmojiStream() {
    emojiInterval = setInterval(() => {

      const e = document.createElement("div");
      e.classList.add("sideEmoji");

      e.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const side = Math.random() > 0.5 ? "left" : "right";
      e.style[side] = "20px";
      e.style.top = Math.random() * 80 + "%";

      document.body.appendChild(e);

      setTimeout(() => e.remove(), 2000);

    }, 350);
  }

  // HAHA EFFECT
  function spawnHaha() {
    const interval = setInterval(() => {

      const h = document.createElement("div");
      h.classList.add("sideEmoji");
      h.textContent = "haha 😂";

      h.style.left = Math.random() * window.innerWidth + "px";
      h.style.top = "60%";

      document.body.appendChild(h);

      setTimeout(() => h.remove(), 2000);

    }, 250);

    setTimeout(() => clearInterval(interval), 2500);
  }

  // FLASH 
  function startFlash() {
    if (flashInterval) return; // prevent stacking

    flashInterval = setInterval(() => {
      const colors = ["red","yellow","blue","lime","hotpink","orange","cyan","purple"];
      document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
    }, 120);
  }

  function stopFlash() {
    clearInterval(flashInterval);
    flashInterval = null;
    document.body.style.background = "white";
  }

});