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
    icon: "🫣",
    tag: "True Devotion",
    tagClass: "tag-banter",
    themeClass: "theme-united",
    main: "I love you even through that 7-0 Anfield match... 💔🙃",
    sub: "If our love survived that night, we are officially unbreakable forever."
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
    icon: "🌧️",
    tag: "Poetic",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like rain falling softly on thirsty earth 🌧️🌿",
    sub: "Gentle, calming, and quietly bringing life back to everything."
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
    icon: "🎻",
    tag: "Timeless",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like an old melody that never loses its magic 🎻✨",
    sub: "Familiar, comforting, and sounding sweeter with every passing year."
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
    icon: "🏡",
    tag: "Safe Haven",
    tagClass: "tag-sweet",
    themeClass: "",
    main: "I love you like coming home after a long, exhausting journey 🏡🕯️",
    sub: "The exact moment your shoulders drop and your heart feels completely safe."
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
    icon: "✨",
    tag: "Poetic",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like a sky full of quiet stars when the whole world is asleep 🌌💫",
    sub: "Steady, breathtaking, and lighting up even the darkest nights."
  },
  {
    icon: "📖",
    tag: "Poetic",
    tagClass: "tag-poetic",
    themeClass: "",
    main: "I love you like a favorite page folded in a book you cherish 📖🕯️",
    sub: "The exact story I will always return to, over and over again."
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
   3. 3-LEVEL EVASIVE "NO" ENGINE
   ========================================================================= */
let noAttemptLevel = 0; // 0: initial, 1: first dodge, 2: second dodge, 3: vanished & YES takes over ~50%

function teleportNoButton() {
  noBtn.classList.add("is-teleporting");
  const margin = 24;
  const btnWidth = noBtn.offsetWidth || 110;
  const btnHeight = noBtn.offsetHeight || 50;

  const maxX = Math.max(margin, window.innerWidth - btnWidth - margin);
  const maxY = Math.max(margin, window.innerHeight - btnHeight - margin);

  const yesRect = yesBtn.getBoundingClientRect();
  let randX, randY;
  let attempts = 0;

  do {
    randX = margin + Math.random() * (maxX - margin);
    randY = margin + Math.random() * (maxY - margin);
    attempts++;
  } while (
    attempts < 10 &&
    randX > yesRect.left - 70 &&
    randX < yesRect.right + 70 &&
    randY > yesRect.top - 70 &&
    randY < yesRect.bottom + 70
  );

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
}

function handleNoAttempt(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // If already at Level 3, No button is already hidden
  if (noAttemptLevel >= 3) return;

  noAttemptLevel++;

  if (noAttemptLevel === 1) {
    // LEVEL 1: First attempt to click/tap No
    teleportNoButton();
    yesBtn.style.transform = "scale(1.25)";
    noBtn.style.transform = "scale(0.85)";
    noBtnText.textContent = "Wait, really?? 🥺";

    // Mascot reaction
    pandaCharacter.classList.add("is-shocked");
    setTimeout(() => pandaCharacter.classList.remove("is-shocked"), 500);
    speechBubble.querySelector("span").textContent = "HEY! Did you just try to click No?! Look at the pink button! 😱👉";
    evadeCounter.textContent = "Level 1: 'No' teleported away! The YES button is growing... 🏃‍♂️💨";
  } 
  else if (noAttemptLevel === 2) {
    // LEVEL 2: Second attempt to click/tap No
    teleportNoButton();
    yesBtn.style.transform = "scale(1.65)";
    noBtn.style.transform = "scale(0.68)";
    noBtnText.textContent = "Still trying?? 💨";

    // Mascot reaction
    pandaCharacter.classList.add("is-shocked");
    setTimeout(() => pandaCharacter.classList.remove("is-shocked"), 500);
    speechBubble.querySelector("span").textContent = "You're persistent, but resistance is futile!! 😂🐼";
    evadeCounter.textContent = "Level 2: Dodged again! Look how huge YES is now! ✨";
  } 
  else if (noAttemptLevel >= 3) {
    // LEVEL 3: Third attempt to click/tap No
    noBtn.classList.add("is-hidden");

    // YES button expands to take over ~50% of the screen!
    yesBtn.style.transform = "";
    yesBtn.classList.add("yes-mega-takeover");
    yesBtn.querySelector(".btn-subtext").textContent = "You have no other choice now, my love! ❤️";

    // Mascot celebration
    pandaCharacter.classList.add("is-celebrating");
    speechBubble.querySelector("span").textContent = "Oops, 'No' vanished into thin air! There is only ONE way forward now! Hehe 🥰🐼";
    evadeCounter.textContent = "Level 3: The universe has spoken. Click YES! 💖";
  }
}

// Bind attempts on No button: pointerdown & touchstart for instant dodge, click fallback
noBtn.addEventListener("pointerdown", handleNoAttempt);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleNoAttempt(e);
}, { passive: false });
noBtn.addEventListener("click", handleNoAttempt);

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
      "7-0 was tough, but loving you is easy 😂💔",
      "Messi is the GOAT, and you're my favorite human 🐐✨",
      "Rain on dry earth... so peaceful 🌧️🌿",
      "Grab a coffee and read this one ☕🥰",
      "Just like an old timeless melody 🎻💫",
      "1 year & ~2 months of pure happiness 🗓️💖",
      "You will always be my safe home 🏡❤️",
      "Always drawn to you like the tide 🌙🌊",
      "Starlight shining bright for you ✨🌌",
      "A story I'll read a million times 📖🕯️",
      "You're my World Cup trophy 🏆🌟",
      "You really are my Mona Lisa 🎨💖"
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
  noAttemptLevel = 0;
  currentCardIndex = 0;
  stopAutoPlay();

  // Reset YES button scale & styles
  yesBtn.classList.remove("yes-mega-takeover");
  yesBtn.style.transform = "scale(1)";
  const yesSubtext = yesBtn.querySelector(".btn-subtext");
  if (yesSubtext) {
    yesSubtext.textContent = "Obviously & completely";
  }

  // Reset NO button position, visibility, scale & text
  noBtn.classList.remove("is-teleporting", "is-hidden");
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
