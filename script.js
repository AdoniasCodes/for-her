/* =========================================================================
   PANDA LOVE PROJECT - INTERACTIVE ENGINE
   ========================================================================= */

// --- One-Liners & Love Quotes Data ---
const LOVE_NOTES = [
  {
    icon: "🌊",
    tag: "Poetic",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like a fish loves water 🌊🐠",
    sub: "Effortless, natural, and completely impossible to breathe without."
  },
  {
    icon: "💀",
    tag: "Banter",
    tagClass: "tag-banter",
    themeClass: "theme-united",
    main: "I love you like Man United loves losing 💀⚽",
    sub: "A pure, weekly, unconditional suffering... yet my devotion never wavers."
  },
  {
    icon: "🔴",
    tag: "Liverpool Love",
    tagClass: "tag-football",
    themeClass: "theme-liverpool",
    main: "I love you like Liverpool loves Klopp's fist pumps & high-intensity chaos 🔥⚡",
    sub: "You keep my heart racing like an Anfield 90+6' stoppage-time winner."
  },
  {
    icon: "🐐",
    tag: "The GOAT",
    tagClass: "tag-messi",
    themeClass: "theme-messi",
    main: "I love you like Messi loves a 90th-minute top-bin free kick 🐐🪄",
    sub: "Pure genius, breathtaking every single time, and the undisputed best."
  },
  {
    icon: "🫣",
    tag: "True Devotion",
    tagClass: "tag-banter",
    themeClass: "theme-united",
    main: "I love you even through that 7-0 Anfield match... 💔🙃",
    sub: "If our love survived that night, we are officially unbreakable forever."
  },
  {
    icon: "☕",
    tag: "Sweet & Cozy",
    tagClass: "tag-sweet",
    themeClass: "",
    main: "I love you like the first warm sip of coffee on a freezing morning ☕🌧️",
    sub: "Comforting, grounding, and instantly making my whole world better."
  },
  {
    icon: "📺",
    tag: "VAR Check",
    tagClass: "tag-banter",
    themeClass: "",
    main: "I love you like a dramatic VAR review that always rules in your favor 📺✨",
    sub: "No controversy here: you're 100% the champion of my heart."
  },
  {
    icon: "⏳",
    tag: "Milestone",
    tagClass: "tag-sweet",
    themeClass: "",
    main: "I love you through all 1 year, 1 month, and 20-something days... 🗓️💖",
    sub: "That's 400+ days, 10,000+ hours, and I'd choose you in every single one of them."
  },
  {
    icon: "🌙",
    tag: "Poetic",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like the ocean tide loves the moon 🌊🌕",
    sub: "Quietly, steadily, constantly drawn toward you without even trying."
  },
  {
    icon: "🏆",
    tag: "The GOAT",
    tagClass: "tag-messi",
    themeClass: "theme-messi",
    main: "I love you like Messi loved kissing the 2022 World Cup trophy 🏆🌟",
    sub: "Because having you by my side is the greatest victory I could ever dream of."
  },
  {
    icon: "🥀",
    tag: "Banter",
    tagClass: "tag-banter",
    themeClass: "theme-united",
    main: "I love you more than any trophy Manchester United won't win this season 😂🏆",
    sub: "Their trophy cabinet might be empty, but my heart is completely full."
  },
  {
    icon: "💌",
    tag: "Sweet",
    tagClass: "tag-sweet",
    themeClass: "",
    main: "I love you like quiet inside jokes whispered across a crowded room 🤫💫",
    sub: "The kind where just one glance between us says more than a thousand words."
  },
  {
    icon: "🎨",
    tag: "My Mona Lisa",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you because you really are my Mona Lisa 🎨✨",
    sub: "A timeless masterpiece, my favorite sight, and the song playing in the background right now."
  }
];

// Cheeky Evasive Button Texts
const NO_BUTTON_TEXTS = [
  "No",
  "Wait, are you sure?? 🥺",
  "Liverpool wouldn't bottle this! 🔴",
  "Even Man United wins more than this option 💀",
  "Nice try, speedy fingers! 💨",
  "Error 404: 'No' not found ✨",
  "VAR checked: Inconclusive, press YES instead 📺",
  "Messi wouldn't miss the YES button 🐐",
  "Are you clicking with your elbows?! 🤨",
  "Panda is watching you... 🐼👀",
  "Resistance is futile, you love me! 🥰",
  "I'm literally moving at the speed of light ⚡",
  "Give up and click YES already! 💖"
];

// Cheeky Panda Speech Bubble Commentary during evasion
const PANDA_SPEECH_REACTIONS = [
  "Do you love me? 🥺👉👈",
  "HEY! What was that swipe?! 😱",
  "Liverpool wouldn't miss this tap! 🔴",
  "Excuse me, are you testing my reflexes?! 💨",
  "VAR check in progress: Foul play! 🟨",
  "Look at the big shiny pink button right there! 👉",
  "Messi would have slotted that YES by now! 🐐",
  "You know you want to click YES! 🥰",
  "My panda heart can't handle this suspense! 💔",
  "Just surrender to the love already! 💕"
];

// DOM Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noBtnText = document.getElementById("noBtnText");
const speechBubble = document.getElementById("speechBubble");
const pandaCharacter = document.getElementById("pandaCharacter");
const gameSection = document.getElementById("gameSection");
const revealSection = document.getElementById("revealSection");
const cardTrack = document.getElementById("cardTrack");
const prevCardBtn = document.getElementById("prevCardBtn");
const nextCardBtn = document.getElementById("nextCardBtn");
const carouselDots = document.getElementById("carouselDots");
const autoPlayBtn = document.getElementById("autoPlayBtn");
const grandFinale = document.getElementById("grandFinale");
const redoBtn = document.getElementById("redoBtn");
const dockedPanda = document.getElementById("dockedPanda");
const dockedBubble = document.getElementById("dockedBubble");
const evadeCounter = document.getElementById("evadeCounter");
const ambientBg = document.getElementById("ambientBg");

// Audio Elements
const audioControl = document.getElementById("audioControl");
const vinylDisc = document.getElementById("vinylDisc");
const bgMusic = document.getElementById("bgMusic");
const musicLabel = document.getElementById("musicLabel");

// State Variables
let evadeCount = 0;
let yesScale = 1.0;
let currentCardIndex = 0;
let autoPlayTimer = null;
let isAudioPlaying = false;

/* =========================================================================
   1. AMBIENT FLOATING HEARTS
   ========================================================================= */
function initAmbientHearts() {
  const heartIcons = ["❤️", "💖", "✨", "🌸", "💕", "🤍", "🐼", "⚽"];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${6 + Math.random() * 7}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.fontSize = `${0.9 + Math.random() * 0.9}rem`;
    ambientBg.appendChild(heart);
  }
}

/* =========================================================================
   2. PANDA EYE TRACKING (MOUSE MOVE)
   ========================================================================= */
function initEyeTracking() {
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");
  if (!leftPupil || !rightPupil) return;

  window.addEventListener("mousemove", (e) => {
    const rect = pandaCharacter.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const dist = Math.min(3, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 80);

    const moveX = Math.cos(angle) * dist;
    const moveY = Math.sin(angle) * dist;

    leftPupil.setAttribute("cx", 70 + moveX);
    leftPupil.setAttribute("cy", 104 + moveY);
    rightPupil.setAttribute("cx", 130 + moveX);
    rightPupil.setAttribute("cy", 104 + moveY);
  });
}

/* =========================================================================
   3. EVASIVE "NO" BUTTON ENGINE
   ========================================================================= */
function triggerEvade(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  evadeCount++;

  // Panda shock animation & speech update
  pandaCharacter.classList.add("is-shocked");
  setTimeout(() => pandaCharacter.classList.remove("is-shocked"), 500);

  const speechIndex = Math.min(evadeCount, PANDA_SPEECH_REACTIONS.length - 1);
  speechBubble.querySelector("span").textContent = PANDA_SPEECH_REACTIONS[speechIndex];

  // Update button text
  const textIndex = Math.min(evadeCount, NO_BUTTON_TEXTS.length - 1);
  noBtnText.textContent = NO_BUTTON_TEXTS[textIndex];

  // Update evasive counter message
  if (evadeCount >= 3) {
    evadeCounter.textContent = `Dodged ${evadeCount} times! You can't escape my love 🏃‍♂️💨`;
  }

  // Make YES button grow smoothly!
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Calculate random safe spot on screen
  noBtn.classList.add("is-teleporting");

  const btnWidth = noBtn.offsetWidth || 120;
  const btnHeight = noBtn.offsetHeight || 50;
  const margin = 20;

  const maxX = window.innerWidth - btnWidth - margin;
  const maxY = window.innerHeight - btnHeight - margin;

  // Generate coordinates that aren't right on top of the YES button
  const yesRect = yesBtn.getBoundingClientRect();
  let randX, randY;
  let attempts = 0;

  do {
    randX = margin + Math.random() * (maxX - margin);
    randY = margin + Math.random() * (maxY - margin);
    attempts++;
  } while (
    attempts < 8 &&
    randX > yesRect.left - 60 &&
    randX < yesRect.right + 60 &&
    randY > yesRect.top - 60 &&
    randY < yesRect.bottom + 60
  );

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;

  // Scale down "No" slightly as it gets more desperate
  const noScale = Math.max(0.72, 1 - evadeCount * 0.03);
  noBtn.style.transform = `scale(${noScale})`;
}

// Attach hover, touchstart, and click handlers to the evasive button
noBtn.addEventListener("mouseenter", triggerEvade);
noBtn.addEventListener("pointerenter", triggerEvade);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  triggerEvade(e);
}, { passive: false });
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  triggerEvade(e);
});

/* =========================================================================
   4. CELEBRATION CHIME (Web Audio API Synthesizer)
   ========================================================================= */
function playCelebrationChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

      gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.6);
    });
  } catch (err) {
    // AudioContext blocked or unsupported, fail gracefully
  }
}

/* =========================================================================
   5. PHASE 1 -> PHASE 2 TRANSITION ("YES" CLICKED)
   ========================================================================= */
yesBtn.addEventListener("click", () => {
  // Celebration sound & panda dancing!
  playCelebrationChime();
  pandaCharacter.classList.add("is-celebrating");

  // Multi-stage confetti celebration
  fireConfettiShower();

  // Try starting background music
  startMusic();

  speechBubble.querySelector("span").textContent = "YAAAY! I KNEW IT!! ❤️🐼🎉";

  // Smooth fade into the confession reel after a brief beat
  setTimeout(() => {
    gameSection.classList.add("hidden");
    revealSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show initial card
    renderCardDeck();
    showCard(0);
  }, 1000);
});

function fireConfettiShower() {
  if (typeof confetti === "function") {
    // Stage 1: Big explosion
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff6b8b', '#ff416c', '#ffd166', '#06d6a0', '#118ab2']
    });

    // Stage 2: Gentle heart/streamer drift
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b8b', '#ff416c', '#ffffff']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b8b', '#ff416c', '#ffffff']
      });
    }, 400);
  }
}

/* =========================================================================
   6. CAROUSEL OF "I LOVE YOU LIKE..." CARDS
   ========================================================================= */
function renderCardDeck() {
  cardTrack.innerHTML = "";
  carouselDots.innerHTML = "";

  LOVE_NOTES.forEach((note, index) => {
    // Create Card element
    const card = document.createElement("div");
    card.className = `love-card ${note.themeClass || ""}`;
    card.id = `loveCard-${index}`;
    card.innerHTML = `
      <div class="card-icon">${note.icon}</div>
      <span class="card-tag ${note.tagClass}">${note.tag}</span>
      <h3 class="card-line-main">"${note.main}"</h3>
      <p class="card-line-sub">${note.sub}</p>
    `;
    cardTrack.appendChild(card);

    // Create Indicator Dot
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.title = `Note ${index + 1}`;
    dot.addEventListener("click", () => {
      stopAutoPlay();
      showCard(index);
    });
    carouselDots.appendChild(dot);
  });
}

function showCard(index) {
  currentCardIndex = index;
  const cards = document.querySelectorAll(".love-card");
  const dots = document.querySelectorAll(".dot");

  cards.forEach((c, idx) => {
    c.classList.toggle("active", idx === index);
  });

  dots.forEach((d, idx) => {
    d.classList.toggle("active", idx === index);
  });

  prevCardBtn.disabled = index === 0;

  // When reaching the last note, adapt next button to reveal the grand finale
  if (index === LOVE_NOTES.length - 1) {
    nextCardBtn.textContent = "See Final Message 💌";
  } else {
    nextCardBtn.textContent = "Next Love Note →";
  }

  // Cute commentary from docked Panda
  if (dockedBubble) {
    const comments = [
      "Wait, keep reading!! 🥺",
      "Fact: Man United really is painful, but you cure it 💀❤️",
      "Up the Reds! (Only for you though!) 🔴🦅",
      "Messi is the GOAT, and you're my favorite human 🐐✨",
      "7-0 was tough, but loving you is easy 😂💔",
      "Grab a coffee and read this one ☕🥰",
      "100% penalty for you, no debate! 📺",
      "1 year & ~2 months of pure happiness 🗓️💖",
      "Always drawn to you like the tide 🌙🌊",
      "You're my World Cup trophy 🏆🌟",
      "Read slowly! Almost at the best part... ✨"
    ];
    dockedBubble.querySelector("span").textContent = comments[index % comments.length] || "I love you so much! 🐼❤️";
  }
}

prevCardBtn.addEventListener("click", () => {
  stopAutoPlay();
  if (currentCardIndex > 0) {
    showCard(currentCardIndex - 1);
  }
});

nextCardBtn.addEventListener("click", () => {
  stopAutoPlay();
  if (currentCardIndex < LOVE_NOTES.length - 1) {
    showCard(currentCardIndex + 1);
  } else {
    // Reveal Phase 3: Grand Finale!
    revealGrandFinale();
  }
});

function revealGrandFinale() {
  grandFinale.classList.remove("hidden");
  nextCardBtn.disabled = true;
  grandFinale.scrollIntoView({ behavior: "smooth" });

  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.7 }
    });
  }

  if (dockedBubble) {
    dockedBubble.querySelector("span").textContent = "You are my entire world! 🐼💖";
  }
}

// Auto-read feature
function toggleAutoPlay() {
  if (autoPlayTimer) {
    stopAutoPlay();
  } else {
    autoPlayBtn.textContent = "⏸ Pause Auto-read";
    autoPlayTimer = setInterval(() => {
      if (currentCardIndex < LOVE_NOTES.length - 1) {
        showCard(currentCardIndex + 1);
      } else {
        revealGrandFinale();
        stopAutoPlay();
      }
    }, 4200);
  }
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    autoPlayBtn.textContent = "▶ Auto-read Notes";
  }
}

autoPlayBtn.addEventListener("click", toggleAutoPlay);

/* =========================================================================
   7. REDO / PLAY AGAIN BUTTON
   ========================================================================= */
redoBtn.addEventListener("click", () => {
  // Reset state
  evadeCount = 0;
  yesScale = 1.0;
  currentCardIndex = 0;
  stopAutoPlay();

  // Reset YES button scale & styles
  yesBtn.style.transform = "scale(1)";

  // Reset NO button position & text
  noBtn.classList.remove("is-teleporting");
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.transform = "scale(1)";
  noBtnText.textContent = "No";

  // Reset Speech & Mascot
  speechBubble.querySelector("span").textContent = "Do you love me? 🥺👉👈";
  pandaCharacter.classList.remove("is-celebrating", "is-shocked");
  evadeCounter.textContent = "";

  // Hide finale & reveal sections, bring back game arena
  grandFinale.classList.add("hidden");
  revealSection.classList.add("hidden");
  gameSection.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================================
   8. AUDIO CONTROLLER & BACKGROUND MUSIC
   ========================================================================= */
function startMusic() {
  if (!bgMusic) return;
  bgMusic.play()
    .then(() => {
      isAudioPlaying = true;
      vinylDisc.classList.add("spinning");
      audioControl.classList.add("is-playing");
      musicLabel.textContent = "Monalizaye Nesh 🎶";
    })
    .catch(() => {
      // Audio playback blocked or missing audio file
      console.log("Music file not found yet or autoplay restricted. Place music in assets/music.mp3");
      musicLabel.textContent = "Monalizaye Nesh 🎵";
    });
}

function toggleMusic() {
  if (!bgMusic) return;
  if (isAudioPlaying) {
    bgMusic.pause();
    isAudioPlaying = false;
    vinylDisc.classList.remove("spinning");
    audioControl.classList.remove("is-playing");
    musicLabel.textContent = "Monalizaye Nesh (Paused)";
  } else {
    startMusic();
  }
}

audioControl.addEventListener("click", toggleMusic);

/* =========================================================================
   INITIALIZATION
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientHearts();
  initEyeTracking();
});
