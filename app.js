/* =========================
   Snaith Millionaire — Classroom Storyboard Edition (v3.2)
   - Updated dialogue to use "Mr. Harrison"
   - CSS Logo integrated
   ========================= */

const questions = [
    {
        story: "My disastrous day began when I woke up in the staff room, absolutely famished. I called Mrs. Gravel for advice. 'Mr. Harrison!' she yelled. 'Stop eating dusty cereal! Run to the Co-op in Snaith and get some proper bacon!' I obeyed instantly and ran all the way down Pontefract Road.",
        question: "How much did I pay the Co-op for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back with my bacon, I found 6 duck eggs near the pond. Miss McCloud suddenly burst out of the science block. 'Mr. Harrison! I need those eggs for a volatile custard experiment!' she screamed, shoving cash into my hand and running off with them.",
        question: "How much did Miss McCloud pay me for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Flush with cash from the egg deal, I strutted into the IT office. Mr. Haggar looked up. 'Mr. Harrison, you can't be a high-roller with that ancient phone,' he scoffed. 'You need the prototype iPhone 17 Pro Max (1TB). It's the only thing compatible with the new school Wi-Fi.'",
        question: "How much did Mr. Harrison pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Desperate to test my new phone, I called Mr. Ward. 'I'm bored,' I moaned. 'Perfect timing, Mr. Harrison,' Mr. Ward replied. 'Buy my Saddleback pig. It's eating all the Year 7 homework and needs to go before Ofsted arrives.'",
        question: "How much did Mr. Harrison pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "I shoved the pig into my 2020 Audi A3, but the fuel light pinged. I swung by the garage in Snaith. I started filling up while Mrs. Kilner watched from the kiosk, shaking her head and tutting loudly at my terrible parallel parking.",
        question: "How much did Mr. Harrison pay for the full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "With a pig in the car, I needed space. I drove to a farm outside Snaith where Mr. Collins was weeping into a bucket. 'Mr. Harrison! The marking load is too high! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire!' It seemed like the perfect home for my pig, so I agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "Now I owned a farm, but the stallion looked hangry. I called Mrs. Edge. 'Do horses eat bacon?' I asked. Mrs. Edge sighed deeply. 'No, Mr. Harrison, you fool. I'm bringing a bale of premium hay. Meet me at the gate.'",
        question: "How much did Mr. Harrison pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "I was now broke from buying the farm. I asked Mr. Francis for a business plan. 'Simple, Mr. Harrison,' he declared, putting on a riding helmet. 'We use the horse to start an Elite Riding School. We'll charge the parents a fortune.'",
        question: "How much did Mr. Harrison charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the very first lesson, I tripped over the pig and snapped my leg. 'Help!' I cried. Miss Maguinness looked up from her book. 'I have a foil blanket in my bag, Mr. Harrison, but nothing in this life is free.'",
        question: "How much did Mr. Harrison pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was gridlocked and the ambulance couldn't get through! I rang Mrs. Yates screaming. 'Sort it out!' Mrs. Yates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter online.",
        question: "How much did Mrs. Yates pay for the helicopter?",
        options: { a: "£1.2 Million", b: "£2.6 Million", c: "£20 Million", d: "£200 Million" },
        correct: "b"
    },
    {
        story: "Mrs. Yates landed the chopper on the school field, threw me in the back, and flew me directly to Hull Royal Infirmary with impressive speed.",
        question: "How long did the helicopter journey take?",
        options: { a: "3 Mins", b: "5 Mins", c: "10 Mins", d: "30 Seconds" },
        correct: "c"
    },
    {
        story: "At Hull Royal, I fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Delirious from the pain, I wondered if Mr. Baines was actually a secret Hollywood superstar.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air to recover from that leg break,' whispered Mr. Baines. 'Let's go to Hull Marina right now and buy a boat.' High on gas and air, I handed over my wallet without hesitation.",
        question: "How much did Mr. Harrison pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "I stood on the deck of my new yacht, but I felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat, Mr. Harrison,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did Mr. Harrison pay Mr. Wilson for the Golden Hat?",
        options: { a: "£50", b: "£500", c: "£5,000", d: "£15.99" },
        correct: "b"
    },
    {
        story: "I finally passed out in the captain's quarters. I woke up back in my classroom, cold and alone. I checked my bank balance and realized I had spent a fortune based on terrible advice from the Snaith School staff.",
        question: "Calculate my total spending (Bacon, iPhone, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht, Hat).",
        options: { a: "£149,102,248.82", b: "148,100,222", c: "179,676,221.86", d: "220,228,112.98" },
        correct: "a"
    }
];

const MONEY = [
  "£100","£200","£300","£500","£1,000",
  "£2,000","£4,000","£8,000","£16,000","£32,000",
  "£64,000","£125,000","£250,000","£500,000","£1,000,000"
];

let idx = 0;
let revealed = false;
let muted = false;
let boardMode = true;

const el = {
  start: document.getElementById("screen-start"),
  game: document.getElementById("screen-game"),
  end: document.getElementById("screen-end"),

  btnEnter: document.getElementById("btn-enter"),
  btnStart: document.getElementById("btn-start"),
  btnReveal: document.getElementById("btn-reveal"),
  btnNext: document.getElementById("btn-next"),
  btnReset: document.getElementById("btn-reset"),
  btnAgain: document.getElementById("btn-play-again"),

  btnMute: document.getElementById("btn-mute"),
  btnBoard: document.getElementById("btn-board"),

  story: document.getElementById("story-text"),
  question: document.getElementById("question-text"),
  optA: document.getElementById("opt-a"),
  optB: document.getElementById("opt-b"),
  optC: document.getElementById("opt-c"),
  optD: document.getElementById("opt-d"),

  cardA: document.getElementById("opt-a-card"),
  cardB: document.getElementById("opt-b-card"),
  cardC: document.getElementById("opt-c-card"),
  cardD: document.getElementById("opt-d-card"),

  qCount: document.getElementById("q-count"),
  money: document.getElementById("money-label"),
  status: document.getElementById("status"),
  final: document.getElementById("final-message"),
  sw: document.getElementById("sw-status"),

  introMusic: document.getElementById("music-intro"),
  gameMusic: document.getElementById("music-game"),
};

function show(which) {
  [el.start, el.game, el.end].forEach(s => s.classList.remove("screen-active"));
  which.classList.add("screen-active");
}

function applyBoardMode() {
  document.body.classList.toggle("board-mode", boardMode);
  el.btnBoard.setAttribute("aria-pressed", String(boardMode));
}

function setMute() {
  const label = muted ? "🔇 Audio" : "🔊 Audio";
  el.btnMute.textContent = label;
  el.btnMute.setAttribute("aria-pressed", String(!muted));
  el.introMusic.muted = muted;
  el.gameMusic.muted = muted;
}

async function safePlay(audio) {
  try { await audio.play(); } catch {}
}

function stopAllAudio() {
  [el.introMusic, el.gameMusic].forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}

function clearCorrect() {
  [el.cardA, el.cardB, el.cardC, el.cardD].forEach(c => c.classList.remove("correct"));
}

function loadQuestion() {
  revealed = false;
  clearCorrect();
  el.btnNext.disabled = true;

  const q = questions[idx];
  el.story.textContent = q.story;
  el.question.textContent = q.question;

  el.optA.textContent = q.options.a;
  el.optB.textContent = q.options.b;
  el.optC.textContent = q.options.c;
  el.optD.textContent = q.options.d;

  el.qCount.textContent = String(idx + 1);
  el.money.textContent = MONEY[idx] || "";
  el.status.textContent = "Ready to reveal the correct answer.";
}

function revealCorrect() {
  if (revealed) return;
  const q = questions[idx];
  const k = q.correct; // a/b/c/d

  const map = { a: el.cardA, b: el.cardB, c: el.cardC, d: el.cardD };
  clearCorrect();
  if (map[k]) map[k].classList.add("correct");

  revealed = true;
  el.btnNext.disabled = false;
  el.status.textContent = "Correct answer: " + k.toUpperCase();
}

function next() {
  if (!revealed) return;
  idx += 1;

  if (idx < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function launchConfetti() {
    const container = document.body;
    const colors = ['#d4af37', '#ffffff', '#ff9900', '#0044cc'];
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.classList.add('confetti');
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDuration = (Math.random() * 3 + 2) + 's';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(div);
    }
}

function endGame() {
  stopAllAudio();
  safePlay(el.introMusic);
  show(el.end);
  el.final.innerHTML = "I now owe <b>£149,102,248.82</b>.<br><br>Mrs. Yates is absolutely furious with me.<br><br>Well done Snaith School!";
  launchConfetti();
}

function startGame() {
  idx = 0;
  stopAllAudio();
  safePlay(el.gameMusic);
  show(el.game);
  loadQuestion();
}

function resetAll() {
  stopAllAudio();
  safePlay(el.introMusic);
  idx = 0;
  revealed = false;
  show(el.start);
}

function registerSW() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./service-worker.js").then(() => {
    el.sw.textContent = "Offline enabled";
  }).catch(() => {
    el.sw.textContent = "";
  });
}

// Wire events
el.btnEnter.addEventListener("click", async () => {
  await safePlay(el.introMusic);
});

el.btnStart.addEventListener("click", startGame);
el.btnReveal.addEventListener("click", revealCorrect);
el.btnNext.addEventListener("click", next);
el.btnReset.addEventListener("click", resetAll);
el.btnAgain.addEventListener("click", startGame);

el.btnMute.addEventListener("click", () => {
  muted = !muted;
  setMute();
});

el.btnBoard.addEventListener("click", () => {
  boardMode = !boardMode;
  applyBoardMode();
});

// Keyboard controls
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === " " || k === "enter") {
    e.preventDefault();
    if (!el.game.classList.contains("screen-active")) return;
    if (!revealed) revealCorrect();
    else next();
  }
  if (k === "m") { boardMode = !boardMode; applyBoardMode(); }
  if (k === "r") { resetAll(); }
});

// Init
(function init() {
  boardMode = true;
  applyBoardMode();
  setMute();
  show(el.start);

  const firstTap = () => {
    safePlay(el.introMusic);
    window.removeEventListener("pointerdown", firstTap);
  };
  window.addEventListener("pointerdown", firstTap, { once: true });

  registerSW();
})();
