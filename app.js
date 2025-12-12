const questions = [
    {
        story: "Mr. Barton woke up in the staff room hangry. He asked Mrs. Gravel for nutritional advice. She yelled, 'Go to the Costcutter in Snaith and get some proper bacon!' Mr. Barton ran all the way down Pontefract Road.",
        question: "How much did Mr. Barton pay Mrs. Gravel for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back to school, Mr. Barton found 6 duck eggs near the pond. Miss McCloud popped out of the science block. 'I need those for a highly dangerous experiment!' she shouted, paying cash immediately.",
        question: "How much did Miss McCloud pay Mr. Barton for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Mr. Barton felt flush with cash. He visited Mr. Haggar in IT Support. 'You can't be seen with that old phone,' Mr. Haggar scoffed, pulling out a prototype iPhone 17 Pro Max (1TB). 'You need this for the school wifi.'",
        question: "How much did Mr. Barton pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Mr. Barton used the phone to call Mr. Ward. 'I'm bored in my free period,' Barton moaned. 'Buy my Saddleback pig,' Mr. Ward replied. 'I need it gone before the Ofsted inspection.'",
        question: "How much did Mr. Barton pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "Mr. Barton jumped into his 2020 Audi A3 parked in the staff car park. He stopped at the garage in Snaith. Mrs. Kilner filled the tank while tutting loudly at his driving.",
        question: "How much did Mr. Barton pay Mrs. Kilner for a full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "He arrived at the farm just outside Snaith. Mr. Collins was weeping by the barn. 'The marking load is too high! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire!' Mr. Barton agreed.",
        question: "How much did Mr. Barton pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "The stallion looked hangry. Barton called Mrs. Edge. 'Do horses eat school dinners?' Mrs. Edge sighed. 'No. I'm bringing a bale of hay. Meet me at the school gate.'",
        question: "How much did Mr. Barton pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "To pay off his debts, Barton asked Mr. Francis for a business plan. 'A Riding School,' Mr. Francis declared. 'We'll charge the parents a fortune.'",
        question: "How much did Mr. Barton charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the first lesson, Mr. Barton tripped over a bucket and broke his leg. 'Help!' he cried. Miss Maguinness sighed. 'I have a foil blanket in my bag, but it isn't free.'",
        question: "How much did Mr. Barton pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was terrible! Barton rang Mrs. Yeates. 'I need an extraction!' Mrs. Yeates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter.",
        question: "How much did Mr. Barton (via Mrs. Yeates) pay for the helicopter?",
        options: { a: "£1.2 Million", b: "£2.6 Million", c: "£20 Million", d: "£200 Million" },
        correct: "b"
    },
    {
        story: "Mrs. Yeates landed on the school field, picked him up, and flew him directly to Hull Royal Infirmary.",
        question: "How long did the helicopter journey take?",
        options: { a: "3 Mins", b: "5 Mins", c: "10 Mins", d: "30 Seconds" },
        correct: "c"
    },
    {
        story: "At Hull Royal, Mr. Barton fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Barton wondered if Baines was secretly a movie star.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air,' whispered Mr. Baines. 'Let's go to Hull Marina and buy a boat.' Mr. Barton, delirious on gas and air, handed over his wallet.",
        question: "How much did Mr. Barton pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "Standing on the deck, Mr. Barton felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did Mr. Barton pay Mr. Wilson for the Golden Hat?",
        options: { a: "£50", b: "£500", c: "£5,000", d: "£15.99" },
        correct: "b"
    },
    {
        story: "Mr. Barton finally passed out. He woke up back in his classroom, cold and alone. He checked his bank balance and realized he had spent a fortune based on terrible advice from the Snaith School staff.",
        question: "Calculate the total spending (Bacon, iPhone, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht, Hat).",
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

// Step 1: Initialize Audio (Fix for broken button)
initBtn.addEventListener('click', () => {
    // 1. Advance screen IMMEDIATELY
    overlayScreen.classList.remove('active');
    startScreen.classList.add('active');

    // 2. Try to play music (if it fails, it fails silently)
    musicIntro.play().catch(e => console.log("Intro music failed (non-fatal):", e));
});

// Step 2: Start Game (Switch Audio)
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    musicIntro.pause();
    musicGame.play().catch(e => console.log("Game music failed (non-fatal):", e));

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
    document.getElementById('final-message').innerHTML = "Mr. Barton owes <b>£149,102,248.82</b>.<br><br>Mrs. Yeates is absolutely furious.<br><br>Well done Snaith School!";
}
