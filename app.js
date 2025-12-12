const questions = [
    {
        story: "Mr. Harrison woke up in the staff room hangry. He asked Mrs. Gravel for nutritional advice. She yelled, 'Go to the Costcutter in Snaith and get some proper bacon!' He ran all the way down Pontefract Road.",
        question: "How much did Mrs. Gravel charge for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back to school, Mr. Harrison found 6 duck eggs near the pond. Miss McCloud popped out of the science block. 'I need those for a highly dangerous experiment!' she shouted, paying cash immediately.",
        question: "How much did Miss McCloud pay for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Mr. Harrison felt flush with cash. He visited Mr. McKay in IT Support. 'You can't be seen with that old phone,' Mr. McKay laughed, handing him a shiny iPhone 12. 'It's essential for emailing parents.'",
        question: "How much did Mr. McKay charge for the NEW 64gb iPhone 12?",
        options: { a: "£679", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Mr. Harrison used the phone to call Mr. Ward. 'I'm bored in my free period,' he moaned. 'Buy my Saddleback pig,' Mr. Ward replied. 'I need it gone before the Ofsted inspection.'",
        question: "How much did Mr. Ward charge for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "Mr. Harrison jumped into his 2017 Ford Focus parked in the staff car park. He stopped at the garage in Snaith. Mrs. Kilner filled the tank while tutting loudly at his driving.",
        question: "How much did the full tank of fuel cost?",
        options: { a: "£5", b: "£65", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "He arrived at the farm just outside Snaith. Mr. Collins was weeping by the barn. 'The marking load is too high! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire!' Mr. Harrison agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "The stallion looked hangry. Harrison called Mrs. Edge. 'Do horses eat school dinners?' Mrs. Edge sighed. 'No. I'm bringing a bale of hay. Meet me at the school gate.'",
        question: "How much did Mrs. Edge charge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "To pay off his debts, Harrison asked Mr. Francis for a business plan. 'A Riding School,' Mr. Francis declared. 'We'll charge the parents a fortune.'",
        question: "How much did they charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the first lesson, Mr. Harrison tripped over a bucket and broke his leg. 'Help!' he cried. Miss Maguinness sighed. 'I have a foil blanket in my bag, but it isn't free.'",
        question: "How much did Miss Maguinness charge for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was terrible! Harrison rang Mrs. Yeates. 'I need an extraction!' Mrs. Yeates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter.",
        question: "How much did Mrs. Yeates pay for the helicopter?",
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
        story: "At Hull Royal, Mr. Harrison fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Harrison wondered if Baines was secretly a movie star.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air,' whispered Mr. Baines. 'Let's go to Hull Marina and buy a boat.' Mr. Harrison, delirious on gas and air, handed over his wallet.",
        question: "How much did the Luxury Super Yacht cost?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "Mr. Harrison finally passed out. He woke up back in his classroom, realizing he had spent a fortune based on terrible advice from the Snaith School staff.",
        question: "Calculate the total spending (Bacon, Phone, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht).",
        options: { a: "£149,100,836.45", b: "148,100,222", c: "179,676,221.86", d: "220,228,112.98" },
        correct: "a"
    }
];

let currentQuestionIndex = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const revealBtn = document.getElementById('reveal-btn');
const nextBtn = document.getElementById('next-btn');
const storyText = document.getElementById('story-text');
const questionText = document.getElementById('question-text');
const optionCards = document.querySelectorAll('.option-card');

// Start Game
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    loadQuestion();
});

function loadQuestion() {
    // Reset Buttons and Styles
    revealBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    optionCards.forEach(card => card.classList.remove('correct'));

    const data = questions[currentQuestionIndex];
    
    // Update Text
    document.getElementById('question-count').textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Simple fade effect
    storyText.style.opacity = 0;
    setTimeout(() => {
        storyText.textContent = data.story;
        storyText.style.opacity = 1;
    }, 200);

    questionText.textContent = data.question;
    
    // Update Options
    document.getElementById('opt-a').textContent = data.options.a;
    document.getElementById('opt-b').textContent = data.options.b;
    document.getElementById('opt-c').textContent = data.options.c;
    document.getElementById('opt-d').textContent = data.options.d;
}

// Reveal Answer
revealBtn.addEventListener('click', () => {
    const data = questions[currentQuestionIndex];
    const correctLetter = data.correct; // e.g., "a"
    
    // Find the correct card div by ID, e.g., "opt-a-card"
    const correctCard = document.getElementById(`opt-${correctLetter}-card`);
    
    // Turn it green
    correctCard.classList.add('correct');

    // Toggle the buttons
    revealBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

// Next Question
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
    document.getElementById('final-message').innerHTML = "<b>The Game is Up!</b><br><br>Mr. Harrison is facing a severe audit from Mrs. Yeates.<br>He owns a pig, a farm, and a yacht docked in Hull.<br><br>Well done Snaith School!";
}