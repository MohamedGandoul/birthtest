// ✏️ EDIT THESE 20 REASONS: make them personal, inside jokes work best!
const reasons = [
  "Your smile makes my whole day",
  "You are so kind to everyone",
  "Your laugh is my favorite sound",
  "You always know how to cheer me up",
  "You make every day bloom like spring",
  "You are beautiful inside and out",
  "You listen to me, really listen",
  "You are so brave and strong",
  "You make me want to be better",
  "You are my best friend",
  "Your hugs fix everything",
  "You are funny without even trying",
  "You care about the little things",
  "You believe in me",
  "You are the cutest when you're sleepy",
  "You make every plan more fun",
  "You are patient with me",
  "You have the biggest heart",
  "Being with you feels like a field of tulips",
  "Because you are my favorite tulip"
];

// reasons grid
const grid = document.getElementById("reasons");
reasons.forEach((text, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "reason";
  b.innerHTML = '<span class="num">' + (i + 1) + ' 🌷</span>';
  b.addEventListener("click", () => {
    const open = b.classList.toggle("open");
    b.innerHTML = open ? text : '<span class="num">' + (i + 1) + ' 🌷</span>';
  });
  grid.appendChild(b);
});

// tulip garden: [main color, side petal color, width in px]
const tulips = [
  ["#ff5c8a", "#ff8fab", 44],
  ["#ffc93c", "#ffe08a", 54],
  ["#b79ced", "#d7c6ff", 66],
  ["#ff8fab", "#ffc2d4", 54],
  ["#ff6b6b", "#ff9a9a", 44]
];
const garden = document.getElementById("garden");
tulips.forEach(([main, side, w], i) => {
  garden.insertAdjacentHTML("beforeend",
    '<svg class="tulip" viewBox="0 0 60 140" width="' + w + '" style="--d:' + (i * 0.18) + 's;animation-delay:' + (-i * 0.8) + 's" aria-hidden="true">' +
      // stem and leaves
      '<path d="M30 140 L30 62" stroke="#6bbf59" stroke-width="4" stroke-linecap="round" fill="none"/>' +
      '<path d="M30 138 C8 128 6 104 14 90 C26 100 30 118 30 138Z" fill="#6bbf59"/>' +
      '<path d="M30 130 C52 122 56 100 48 86 C36 96 30 112 30 130Z" fill="#4a9d46"/>' +
      // flower: back petal + two side petals that open
      '<path d="M30 62 C14 56 14 24 30 14 C46 24 46 56 30 62Z" fill="' + main + '"/>' +
      '<path class="pl" d="M30 62 C10 62 6 32 14 20 C24 28 30 44 30 62Z" fill="' + side + '"/>' +
      '<path class="pr" d="M30 62 C50 62 54 32 46 20 C36 28 30 44 30 62Z" fill="' + side + '"/>' +
    '</svg>');
});

// floating tulips, hearts and flowers
const heartsBox = document.getElementById("hearts");
const icons = ["🌷", "💖", "🌷", "🌸", "✨", "🌷"];
for (let i = 0; i < 18; i++) {
  const s = document.createElement("span");
  s.textContent = icons[i % icons.length];
  s.style.left = Math.random() * 100 + "%";
  s.style.fontSize = 16 + Math.random() * 22 + "px";
  s.style.animationDuration = 9 + Math.random() * 10 + "s";
  s.style.animationDelay = -Math.random() * 15 + "s";
  heartsBox.appendChild(s);
}

// blow out the candles: flames go out, tulips bloom, letter appears
const btn = document.getElementById("blow");
btn.addEventListener("click", () => {
  document.getElementById("cake").classList.add("out");
  garden.classList.add("bloom");
  document.getElementById("wishHint").textContent = "Your tulips are blooming 🌷💖";
  btn.style.display = "none";
  const s = document.getElementById("surprise");
  s.classList.add("show");
  setTimeout(() => s.scrollIntoView({ behavior: "smooth", block: "start" }), 1400);
});
