const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveScreen = document.getElementById("loveScreen");
const bgMusic = document.getElementById("bgMusic");

let yesSize = 18;

// Runaway No Button + Growing Yes Button
noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    yesSize += 5;
    yesBtn.style.fontSize = yesSize + "px";

    // Change text after multiple attempts
    const messages = [
        "Touch Panna 🤨",
        "Kadichiruva 😁",
        "Nee Click Varathu 😜",
        "Yes Click Pannu 😎",
        "Apo Tha Umma😘😘"
    ];

  noBtn.innerText = messages[Math.floor(Math.random() * messages.length)];
});

// Yes Button Click
yesBtn.addEventListener("click", () => {
    loveScreen.style.display = "flex";

    // Play music (browser requires interaction)
    bgMusic.play();

    createConfetti();
});

// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// Confetti Effect
function createConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.transition = "top 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = window.innerHeight + "px";
        }, 10);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
