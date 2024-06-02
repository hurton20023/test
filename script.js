document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const messageDiv = document.getElementById("message");

  yesBtn.addEventListener("click", () => {
    messageDiv.innerHTML =
      "<p>😍 You made me the happiest person alive! 😍 Ta pas le choix en vrai XDDDD</p>";
  });

  noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - noBtn.clientWidth;
    const maxY = container.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
});
