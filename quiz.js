// Quiz State Management
let currentExamQuestions = [];
let currentIndex = 0;
let score = 0;
let mistakes = 0;
let timerInterval;
const MAX_MISTAKES = 3;
const EXAM_SIZE = 30;

// Simpsons Personas for Feedback
const PERSONAS = [
    { name: "El Veterano", icon: "👴", style: "technical" },
    { name: "El Vecino", icon: "🍩", style: "friendly" },
    { name: "La Inteligente", icon: "🧠", style: "detailed" },
    { name: "El Novato", icon: "🏎️", style: "simple" }
];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-exam-btn');
const nextBtn = document.getElementById('next-q-btn');
const restartBtn = document.getElementById('restart-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const categoryTag = document.getElementById('q-category');
const feedbackArea = document.getElementById('feedback-area');
const explanationText = document.getElementById('explanation-text');
const feedbackIcon = document.getElementById('feedback-icon');
const progressBar = document.getElementById('progress-bar');
const currentQSpan = document.getElementById('current-q');
const timerDisplay = document.getElementById('quiz-timer');

// Initialize Exam
function startExam() {
    // Shuffle and pick 30 questions
    currentExamQuestions = [...ALL_QUESTIONS]
        .sort(() => Math.random() - 0.5)
        .slice(0, EXAM_SIZE);
    
    currentIndex = 0;
    score = 0;
    mistakes = 0;
    
    showView('quiz-screen');
    loadQuestion();
    startTimer(30 * 60); // 30 minutes
}

function loadQuestion() {
    const q = currentExamQuestions[currentIndex];
    questionText.textContent = q.question;
    categoryTag.textContent = q.category || "General";
    
    // Clear and build options
    optionsContainer.innerHTML = '';
    feedbackArea.classList.add('hidden');
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

function selectOption(index) {
    const q = currentExamQuestions[currentIndex];
    const btns = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all buttons
    btns.forEach(btn => btn.disabled = true);
    
    if (index === q.answer) {
        btns[index].classList.add('correct');
        score++;
    } else {
        btns[index].classList.add('wrong');
        btns[q.answer].classList.add('correct');
        mistakes++;
    }

    showFeedback(q, index === q.answer);
}

function showFeedback(question, isCorrect) {
    feedbackArea.classList.remove('hidden');
    
    // Pick a random persona
    const persona = PERSONAS[Math.floor(Math.random() * PERSONAS.length)];
    feedbackIcon.textContent = persona.icon;
    
    const prefix = isCorrect ? "¡Excelente! " : "¡Cuidado! ";
    explanationText.innerHTML = `<strong>${persona.name}:</strong> ${prefix}${question.explanation}`;
    
    // Auto-scroll to feedback on mobile
    feedbackArea.scrollIntoView({ behavior: 'smooth' });
}

function nextQuestion() {
    currentIndex++;
    
    if (currentIndex < currentExamQuestions.length && mistakes <= MAX_MISTAKES) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    showView('result-screen');
    
    const finalCorrect = document.getElementById('final-correct');
    const finalErrors = document.getElementById('final-errors');
    const resultTitle = document.getElementById('result-title');
    const resultMsg = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-animation');

    finalCorrect.textContent = score;
    finalErrors.textContent = mistakes;

    if (mistakes <= MAX_MISTAKES) {
        resultTitle.textContent = "¡APROBADO!";
        resultTitle.style.color = "var(--success)";
        resultIcon.textContent = "🎓";
        resultMsg.textContent = "Has superado el examen de Springfield. ¡Ya puedes conducir el coche de Homer!";
    } else {
        resultTitle.textContent = "SUSPENSO";
        resultTitle.style.color = "var(--error)";
        resultIcon.textContent = "🚫";
        resultMsg.textContent = "Has cometido demasiados fallos. Otto te llevará a casa en el autobús escolar.";
    }
}

function updateProgress() {
    const percent = ((currentIndex) / EXAM_SIZE) * 100;
    progressBar.style.width = `${percent}%`;
    currentQSpan.textContent = currentIndex + 1;
}

function startTimer(seconds) {
    let timeLeft = seconds;
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
        timeLeft--;
    }, 1000);
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// Event Listeners
startBtn.onclick = startExam;
nextBtn.onclick = nextQuestion;
restartBtn.onclick = () => showView('welcome-screen');
