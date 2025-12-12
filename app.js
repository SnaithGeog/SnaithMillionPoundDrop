const questions = [
    {
        story: "I woke up in the staff room this morning absolutely famished. I called Mrs. Gravel for nutritional advice. She yelled, 'Harrison, stop eating dusty cereal! Run to the Costcutter in Snaith and get some proper bacon!' I obeyed instantly and ran all the way down Pontefract Road.",
        question: "How much did I pay Mrs. Gravel for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back to school, I found 6 duck eggs near the pond. Suddenly, Miss McCloud burst out of the science block wearing safety goggles. 'Harrison! I need those for a highly volatile experiment involving custard!' she screamed, shoving cash into my hand.",
        question: "How much did Miss McCloud pay me for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Feeling flush with my egg money, I strutted into the IT office. Mr. Haggar looked up from his screens. 'Harrison, you can't be seen with that ancient phone,' he scoffed. 'You need the prototype iPhone 17 Pro Max (1TB). It's the only thing compatible with the new school Wi-Fi.'",
        question: "How much did I pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "With my new phone, I called Mr. Ward. 'I'm bored in my free period,' I moaned. 'Buy my Saddleback pig,' Mr. Ward grunted down the line. 'It's eating all the marking and I need it gone before the Ofsted inspection starts tomorrow.'",
        question: "How much did I pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "I jumped into my 2020 Audi A3 to collect the pig. I swung by the garage in Snaith. Mrs. Kilner was on the forecourt. She filled the tank, shaking her head and tutting loudly at my terrible parallel parking.",
        question: "How much did I pay Mrs. Kilner for the full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "I arrived at the farm just outside Snaith to find Mr. Collins weeping into a bucket. 'Harrison, the marking load is too high! I can't take it! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire to the Cotswolds!' Feeling generous, I agreed.",
        question: "How much did I pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "The stallion, Bruce, looked hangry. I called Mrs. Edge in a panic. 'Do horses eat leftover school lasagna?' Mrs. Edge sighed deeply. 'No, Harrison, you fool. I'm bringing a bale of premium hay. Meet me at the gate and don't be late.'",
        question: "How much did I pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "To pay off my mounting debts, I asked Mr. Francis for a business strategy. 'Simple,' declared Mr. Francis, putting on a riding helmet. 'We start an Elite Riding School. We'll charge the parents a fortune for 45 minutes of terror.'",
        question: "How much did we charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the very first lesson, I tripped over a bucket and snapped my leg. 'Help!' I cried. Miss Maguinness looked up from her book. 'I have a foil blanket in my bag, Harrison, but nothing in this life is free.'",
        question: "How much did I pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was gridlocked! The ambulance couldn't get through. I rang Mrs. Yates screaming. 'Sort it out!' Mrs. Yates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter online.",
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
        story: "'You need sea air to recover,' whispered Mr. Baines. 'Let's go to Hull Marina right now and buy a boat.' High on gas and air, I handed over my wallet without hesitation.",
        question: "How much did I pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "Standing on the deck of my new yacht, I felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat, Harrison,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did I pay Mr. Wilson for the Golden Hat?",
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

let currentQuestionIndex = 0;

// DOM Elements
const overlayScreen = document.getElementById('overlay-screen');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const initBtn = document.getElementById('init-btn');
const startBtn = document.getElementById('start-btn');
const revealBtn = document.getElementById('reveal-btn');
const nextBtn = document.getElementById('next-btn');
const storyText = document.getElementById('story-text');
const questionText = document.getElementById('question-text');
const optionCards = document.querySelectorAll('.answer-hex');

// Audio Elements
const musicIntro = document.getElementById('music-intro');
const musicGame = document.getElementById('music-game');

// Step 1: Initialize Audio
initBtn.addEventListener('click', () => {
    musicIntro.play()
    .then(() => {
        overlayScreen.classList.remove('active');
        startScreen.classList.add('active');
    })
    .catch(error => {
        // Fallback: Proceed even if audio fails
        overlayScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
});

// Step 2: Start Game
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    musicIntro.pause();
    musicGame.play().catch(e => console.log("Game music failed:", e));

    loadQuestion();
});

function loadQuestion() {
    revealBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    optionCards.forEach(card => card.classList.remove('correct'));

    const data = questions[currentQuestionIndex];
    document.getElementById('question-count').textContent = currentQuestionIndex + 1;
    
    storyText.textContent = data.story;
    questionText.textContent = data.question;
    document.getElementById('opt-a').textContent = data.options.a;
    document.getElementById('opt-b').textContent = data.options.b;
    document.getElementById('opt-c').textContent = data.options.c;
    document.getElementById('opt-d').textContent = data.options.d;
}

revealBtn.addEventListener('click', () => {
    const data = questions[currentQuestionIndex];
    const correctLetter = data.correct; 
    const correctCard = document.getElementById(`opt-${correctLetter}-card`);
    correctCard.classList.add('correct');
    revealBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
});

function endGame() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    document.getElementById('final-message').innerHTML = "I now owe <b>£149,102,248.82</b>.<br><br>Mrs. Yates is absolutely furious with me.<br><br>Well done Snaith School!";
}
