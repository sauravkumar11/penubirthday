/* ================================
   1. AUTO‑GENERATED STEPS
================================ */

const stepsData = [
  {
    emoji: "💖",
    title: "The Beginning",
    text: "The moment everything began ✨",
  },
  {
    emoji: "🌸",
    title: "Class 7 Memories",
    text: "Class 7 mein jab sab log mazzak bana rahe the, tab shayad mujhe samajh nahi tha… baad mein hamesha laga ki tum hi sahi thi 🌷",
  },
  {
    emoji: "🌙",
    title: "Realization",
    text: "Ek din tumhare baare mein socha aur samjha ki tum hamesha sahi cheez ke liye fight karti ho 💭",
  },
  {
    emoji: "✨",
    title: "Understanding You",
    text: "Time ke saath samjha ki tum talkative ho — par ek achhe way mein 😄",
  },
  {
    emoji: "💌",
    title: "Apology",
    text: "Sab tumhe bully kar rahe the… main bhi. Uske liye dil se sorry 😔",
  },
  {
    emoji: "🌹",
    title: "Standing for Right",
    text: "Tum galat ke khilaf hamesha khadi hoti ho — wahi cheez mujhe sabse zyada pasand hai 🤍",
  },
  {
    emoji: "💫",
    title: "One Incident",
    text: "Ek example yaad aata hai 🌱",
  },
  {
    emoji: "💕",
    title: "Truth Hurts",
    text: "Maine Shweta par galat remark kiya, aur tumne uske liye bhi fight ki… mujhe maar padi, par main galat tha 🫶",
  },
  {
    emoji: "🌈",
    title: "Respect Grows",
    text: "Tum jis cheez ke liye fight karti ho — wahi mujhe sabse zyada pasand aata hai ☁️",
  },
  {
    emoji: "🥰",
    title: "Unexpected Bond",
    text: "Mera relation kharab ho gaya, par uske baad hum friends bane — sirf isliye kyunki tum sahi ke saath thi 💗",
  },
  {
    emoji: "❤️",
    title: "Fearless Heart",
    text: "Tum bina dare apni baat rakhti ho ❤️",
  },
  {
    emoji: "💍",
    title: "The Cost of Truth",
    text: "Isi wajah se kuch log tumhe class mein bhi aur college mein bhi hate karte honge 🤞",
  },
  {
    emoji: "🏡",
    title: "Character",
    text: "But jaisi ho waisi hi rehana ,always be in your character 🏠",
  },
  {
    emoji: "🩺",
    title: "MBBS Journey",
    text: "MBBS ka safar tough hota hai,I Know — I wish you all the success, strength, and happiness.May you heal many lives, and may your own life always stay filled with peace and confidence. All the very best for your MBBS journey 🤍✨ All the best for your journey, future doctor Sahiba🤍✨",
  },
  {
    emoji: "🎂",
    title: "Birthday Wish",
    text: "Happy Birthday Prerna 😊 Bas aise hi rehna, kyunki tum jaisi ho — waisi hi best ho 💕",
  },
];

// repeat to reach ~30
while (stepsData.length < 30) {
  stepsData.push(stepsData[stepsData.length % 15]);
}

const stepsContainer = document.getElementById("steps-container");

stepsData.forEach((step) => {
  stepsContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="step">
        <div class="content">
          <div class="dot">${step.emoji}</div>
          <p class="date">${step.title}</p>
          <p>${step.text}</p>
        </div>
      </div>
    `,
  );
});

/* ================================
   2. SCROLL‑SYNCED ANIMATION
================================ */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll(".step").forEach((step) => observer.observe(step));

/* ================================
   3. FLOATING HEARTS (MULTI EMOJI)
================================ */

const heartEmojis = [
  "🤝", // friendship / standing together
  "🌸", // kindness, early memories
  "💛", // pure friendship
  "🌷", // respect
  "🫶", // support / understanding
  "💌", // apology / care
  "💖", // emotional connection
  "💗", // affection
  "💕", // bonding
  "❤️", // love
  "🎂", // birthday moment
  "✨", // special feeling
  "🌈", // hope
  "🤍", // calm love
];
const heartsContainer = document.querySelector(".hearts-container");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 16 + "px";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 600);

/* ================================
   4. MUSIC AUTOPLAY
================================ */

document.body.addEventListener("click", () => {
  document.getElementById("bg-music").play();
});
