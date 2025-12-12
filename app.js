/* =========================
   SNAITH MILLIONAIRE v5.1
   - Audio Safety Check added
   - Story/Names Corrected
   ========================= */

const questions = [
    {
        story: "Mr. Harrison's disastrous day began when he woke up in the staff room, absolutely famished. He called Mrs. Gravel for advice. 'Mr. Harrison!' she yelled. 'Stop eating dusty cereal! Run to the Co-op in Snaith and get some proper bacon!' Mr. Harrison obeyed instantly and ran all the way down Pontefract Road.",
        question: "How much did Mr. Harrison pay the Co-op for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back with his bacon, Mr. Harrison found 6 duck eggs near the pond. Miss McCloud suddenly burst out of the science block. 'Mr. Harrison! I need those eggs for a volatile custard experiment!' she screamed, shoving cash into his hand and running off with them.",
        question: "How much did Miss McCloud pay Mr. Harrison for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Flush with cash from the egg deal, Mr. Harrison strutted into the IT office. Mr. Haggar looked up. 'Mr. Harrison, you can't be a high-roller with that ancient phone,' he scoffed. 'You need the prototype iPhone 17 Pro Max (1TB). It's the only thing compatible with the new school Wi-Fi.'",
        question: "How much did Mr. Harrison pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Desperate to test his new phone, Mr. Harrison called Mr. Ward. 'I'm bored,' he moaned. 'Perfect timing, Mr. Harrison,' Mr. Ward replied. 'Buy my Saddleback pig. It's eating all the Year 7 homework and needs to go before Ofsted arrives.'",
        question: "How much did Mr. Harrison pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "Mr. Harrison shoved the pig into his 2020 Audi A3, but the fuel light pinged. He swung by the garage in Snaith. He started filling up while Mrs. Kilner watched from the kiosk, shaking her head and tutting loudly at his terrible parallel parking.",
        question: "How much did Mr. Harrison pay for the full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "With a pig in the car, he needed space. He drove to a farm outside Snaith where Mr. Collins was weeping into a bucket. 'Mr. Harrison! The marking load is too high! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire!' It seemed like the perfect home for the pig, so Mr. Harrison agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "Now Mr. Harrison owned a farm, but the stallion looked hangry. He called Mrs. Edge. 'Do horses eat bacon?' he asked. Mrs. Edge sighed deeply. 'No, Mr. Harrison, you fool. I'm bringing a bale of premium hay. Meet me at the gate.'",
        question: "How much did Mr. Harrison pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "Mr. Harrison was now broke from buying the farm. He asked Mr. Francis for a business plan. 'Simple, Mr. Harrison,' he declared, putting on a riding helmet. 'We use the horse to start an Elite Riding School. We'll charge the parents a fortune.'",
        question: "How much did Mr. Harrison charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the very first lesson, Mr. Harrison tripped over the pig and snapped his leg. 'Help!' he cried. Miss Maguinness looked up from her book. 'I have a foil blanket in my bag, Mr. Harrison, but nothing in this life is free.'",
        question: "How much did Mr. Harrison pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was gridlocked and the ambulance couldn't get through! Mr. Harrison rang Mrs. Yates screaming. 'Sort it out!' Mrs. Yates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter online.",
        question: "How much did Mrs. Yates pay for the helicopter?",
        options: { a: "£1.2 Million", b: "£2.6 Million", c: "£20 Million", d: "£200 Million" },
        correct: "b"
    },
    {
        story: "Mrs. Yates landed the chopper on the school field, threw Mr. Harrison in the back, and flew him directly to Hull Royal Infirmary with impressive speed.",
        question: "How long did the helicopter journey take?",
        options: { a: "3 Mins", b: "5 Mins", c: "10 Mins", d: "30 Seconds" },
        correct: "c"
    },
    {
        story: "At Hull Royal, Mr. Harrison fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Delirious from the pain, Mr. Harrison wondered if Mr. Baines was actually a secret Hollywood superstar.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air to recover from that leg break,' whispered Mr. Baines. 'Let's go to Hull Marina right now and buy a boat.' High on gas and air, Mr. Harrison handed over his wallet without hesitation.",
        question: "How much did Mr. Harrison pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "He stood on the deck of his new yacht, but felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat, Mr. Harrison,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did Mr. Harrison pay Mr. Wilson for the Golden Hat?",
        options: { a: "£50", b: "£500", c: "£5,000", d: "£15.99" },
        correct: "b"
    },
    {
        story: "Mr. Harrison finally passed out in the captain's quarters. He woke up back in his classroom, cold and alone. He checked his bank balance and realized he had spent a fortune based on terrible advice from the Snaith School staff.",
        question: "Calculate the total spending (Bacon, iPhone, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht, Hat).",
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

function switchScreen(name) {
  Object.values(el.screens).forEach(s => s.classList.remove('active'));
  el.screens[name].classList.add('active');
}

// SAFE AUDIO PLAYER
async function safePlayAudio(type) {
    if (!el.audio.intro || !el.audio.game) return;
    try {
        if(type === 'intro') {
            el.audio.game.pause();
            el.audio.game.currentTime = 0;
            await el.audio.intro.play();
        } else {
            el.audio.intro.pause();
            el.audio.intro.currentTime = 0;
            await el.audio.game.play();
        }
    } catch(e) {
        console.warn('Audio failed:', e);
    }
}

function updateLadder() {
    document.querySelectorAll('.rung').forEach(r => r.classList.remove('active'));
    const r = document.querySelector(`.rung[data-level="${idx+1}"]`);
    if(r) r.classList.add('active');
}

function loadQuestion() {
  revealed = false;
  const q = questions[idx];
  updateLadder();

  el.text.count.innerText = idx + 1;
  el.text.story.innerText = q.story;
  el.text.question.innerText = q.question;
  
  el.options.a.innerText = q.options.a;
  el.options.b.innerText = q.options.b;
  el.options.c.innerText = q.options.c;
  el.options.d.innerText = q.options.d;

  Object.values(el.cards).forEach(c => c.classList.remove('correct'));
  el.btns.reveal.classList.remove('hidden');
  el.btns.next.classList.add('hidden');
}

function revealAnswer() {
  if(revealed) return;
  revealed = true;
  const k = questions[idx].correct;
  el.cards[k].classList.add('correct');
  el.btns.reveal.classList.add('hidden');
  el.btns.next.classList.remove('hidden');
}

function nextQuestion() {
  idx++;
  if (idx < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if(!container) return;
    container.innerHTML = ''; 
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
  safePlayAudio('intro'); 
  el.text.final.innerHTML = "I now owe <b>£149,102,248.82</b>.<br><br>Mrs. Yates is absolutely furious.<br>Well done Snaith School!";
  switchScreen('end');
  launchConfetti();
}

function resetGame() {
  idx = 0;
  safePlayAudio('game');
  switchScreen('game');
  loadQuestion();
}

// EVENTS
if (el.btns.enter) {
    el.btns.enter.addEventListener('click', () => {
        switchScreen('game');
        idx = 0;
        loadQuestion();
        safePlayAudio('game');
    });
}

if (el.btns.reveal) el.btns.reveal.addEventListener('click', revealAnswer);
if (el.btns.next) el.btns.next.addEventListener('click', nextQuestion);
if (el.btns.replay) el.btns.replay.addEventListener('click', resetGame);
