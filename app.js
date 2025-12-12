const questions = [
    {
        story: "Mr. Harrison woke up hungry. He called Mrs. Gravel. 'Stop eating cereal!' she yelled. 'Go to Costcutter in Snaith and get proper bacon!' He ran down Pontefract Road.",
        question: "How much did Mrs. Gravel charge for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back, he found 6 duck eggs near the pond. Miss McCloud popped out of Science. 'I need those for a volatile experiment!' she shouted, paying cash.",
        question: "How much did Miss McCloud pay for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Flush with cash, he visited Mr. Haggar in IT. 'That old Nokia is tragic,' Haggar scoffed. 'You need this prototype iPhone 17 Pro Max (1TB) for school emails.'",
        question: "How much did Mr. Haggar charge for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Harrison called Mr. Ward. 'I'm bored,' he moaned. 'Buy my Saddleback pig,' Mr. Ward replied. 'It needs to go before the Ofsted inspection.'",
        question: "How much did Mr. Ward charge for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "He jumped into his 2020 Audi A3. He stopped at the garage in Snaith where Mrs. Kilner filled the tank, tutting at his parking skills.",
        question: "How much did the full tank of fuel cost?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "He arrived at the farm. Mr. Collins was weeping. 'The marking is too much! Buy my 9.5 acres and Ms. Wilson's stallion so I can retire!' Harrison agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "The stallion looked hangry. Harrison called Mrs. Edge. 'Do horses eat chips?' Mrs. Edge sighed. 'No. I'm bringing a bale of hay. Meet me at the gate.'",
        question: "How much did Mrs. Edge charge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "To pay his debts, he asked Mr. Francis for a plan. 'A Riding School,' Francis declared. 'We'll charge the parents a fortune.'",
        question: "How much did they charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During lesson one, Harrison tripped and broke his leg. 'Help!' he cried. Miss Maguinness sighed. 'I have a foil blanket, but it isn't free.'",
        question: "How much did Miss Maguinness charge for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "Snaith traffic was gridlocked! Harrison rang Mrs. Yeates. 'Fix it!' Mrs. Yeates rolled her eyes, grabbed the school card, and bought an AgustaWestland Helicopter.",
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
        story: "At Hull Royal, he fell into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Is Baines a secret movie star?",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air,' whispered Mr. Baines. 'Let's go to Hull Marina and buy a boat.' Harrison, delirious on gas and air, handed over his wallet.",
        question: "How much did the Luxury Super Yacht cost?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "Mr. Harrison woke up in his classroom, broke. He realized he had listened to terrible advice from every teacher at Snaith School.",
        question: "Calculate total spending (Bacon, iPhone 17, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht).",
        options: { a: "£149,101,748.82", b: "148,100,222", c: "179,676,221.86", d: "220,228,112.98" },
        correct: "a"
    }
];

let currentQuestionIndex = 0;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const revealBtn = document.getElementById('reveal-btn');
const nextBtn = document.getElementById('next-btn');
const storyText = document.getElementById('story-text');
const questionText = document.getElementById('question-text');
const optionCards = document.querySelectorAll('.answer-hex');

startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    loadQuestion();
});

function loadQuestion() {
    revealBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    optionCards.forEach(card => card.classList.remove('correct'));

    const data = questions[currentQuestionIndex];
    document.getElementById('question-count').textContent = currentQuestionIndex + 1;
    
    // Formatting currency for the "Total Debt" display (Just purely visual increments)
    // We don't actually sum it up dynamically to keep it simple, but we could.
    // For now, let's just keep the static logic.
    
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
    document.getElementById('final-message').innerHTML = "Mr. Harrison owes <b>£149,101,748.82</b>.<br><br>Mrs. Yeates is furious.<br>Well done Snaith School!";
}
