// Game Data - 3 câu hỏi ôn tập chính (rút gọn)
const gameData = [
    {
        question: "Phần giá trị do người lao động tạo ra nhưng không được trả công gọi là gì?",
        answer: "Giá trị thặng dư",
        hint: "Đây là nguồn gốc của lợi nhuận theo lý luận của C. Mác"
    },
    {
        question: "Doanh nghiệp tăng năng suất bằng công nghệ để rút ngắn thời gian lao động cần thiết là phương pháp gì?",
        answer: "Giá trị thặng dư tương đối",
        hint: "Rút ngắn thời gian lao động cần thiết bằng nâng cao năng suất"
    },
    {
        question: "Công ty cung cấp đồ ăn miễn phí, phòng gym để giữ nhân viên ở lại lâu hơn là nhằm tối ưu hóa điều gì?",
        answer: "Tối ưu hóa sức lao động",
        hint: "Đầu tư vào điều kiện làm việc để tái sản xuất sức lao động hiệu quả hơn"
    }
];

// Game State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let gameStarted = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const answersScreen = document.getElementById('answers-screen');

const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const showAnswersBtn = document.getElementById('show-answers-btn');
const backToResultBtn = document.getElementById('back-to-result-btn');

const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const hintText = document.getElementById('hint-text');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const wrongAnswers = document.getElementById('wrong-answers');
const accuracy = document.getElementById('accuracy');
const performanceMessage = document.getElementById('performance-message');
const answersList = document.getElementById('answers-list');

// Initialize game
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    gameStarted = false;
    
    // Shuffle questions
    shuffleArray(gameData);
    
    // Update UI
    updateScore();
    updateProgress();
    updateQuestionCounter();
    // Update total shown in result area (if present)
    const totalResultEl = document.getElementById('total-questions-result');
    if (totalResultEl) totalResultEl.textContent = gameData.length;
    showScreen('start-screen');
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Start game
function startGame() {
    gameStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    updateScore();
    updateProgress();
    updateQuestionCounter();
    showCurrentQuestion();
    showScreen('game-screen');
}

// Show current question
function showCurrentQuestion() {
    const question = gameData[currentQuestionIndex];
    questionText.textContent = question.question;
    answerInput.value = '';
    hintText.textContent = '';
    hintText.classList.remove('show');
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Reset button states
    hintBtn.disabled = false;
    showAnswerBtn.disabled = false;
    submitBtn.disabled = false;
    answerInput.disabled = false;
    
    // Focus on input
    answerInput.focus();
}

// Submit answer
function submitAnswer() {
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) {
        showFeedback('Vui lòng nhập câu trả lời!', 'incorrect');
        return;
    }
    
    const question = gameData[currentQuestionIndex];
    const isCorrect = checkAnswer(userAnswer, question.answer);
    
    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.answer,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        score++;
        showFeedback('🎉 Chính xác! +1 điểm', 'correct');
        playSuccessSound();
        
        // Disable input and buttons for correct answer
        answerInput.disabled = true;
        submitBtn.disabled = true;
        hintBtn.disabled = true;
        showAnswerBtn.disabled = true;
        
        // Move to next question after delay
        setTimeout(() => {
            if (currentQuestionIndex < gameData.length - 1) {
                currentQuestionIndex++;
                updateProgress();
                updateQuestionCounter();
                showCurrentQuestion();
            } else {
                endGame();
            }
        }, 2000);
    } else {
        showFeedback('❌ Sai rồi! Nhấn "Hiện đáp án" để xem đáp án đúng', 'incorrect');
        playErrorSound();
        
        // Disable submit button but keep other buttons active
        submitBtn.disabled = true;
        answerInput.disabled = true;
    }
}

// Check if answer is correct (case insensitive, flexible matching)
function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUser = userAnswer.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    const normalizedCorrect = correctAnswer.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    // Exact match
    if (normalizedUser === normalizedCorrect) {
        return true;
    }
    
    // Check if user answer contains key words from correct answer
    const correctWords = normalizedCorrect.split(' ');
    const userWords = normalizedUser.split(' ');
    
    let matchCount = 0;
    for (const word of correctWords) {
        if (word.length > 2 && userWords.some(userWord => 
            userWord.includes(word) || word.includes(userWord)
        )) {
            matchCount++;
        }
    }
    
    // Consider correct if at least 70% of key words match
    return matchCount >= Math.ceil(correctWords.length * 0.7);
}

// Show feedback
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
    
    if (type === 'correct') {
        feedback.classList.add('success-animation');
    } else if (type === 'incorrect') {
        feedback.classList.add('error-animation');
    }
}

// Show hint
function showHint() {
    const question = gameData[currentQuestionIndex];
    hintText.textContent = question.hint;
    hintText.classList.add('show');
    hintBtn.disabled = true;
}

// Show answer
function showAnswer() {
    const question = gameData[currentQuestionIndex];
    // Record that the user viewed the answer (counted as incorrect)
    userAnswers.push({
        question: question.question,
        userAnswer: answerInput.value.trim() || '(không trả lời)',
        correctAnswer: question.answer,
        isCorrect: false
    });

    // Show the correct answer
    showFeedback(`💡 Đáp án đúng là: ${question.answer}`, 'incorrect');

    // Disable all buttons
    answerInput.disabled = true;
    submitBtn.disabled = true;
    hintBtn.disabled = true;
    showAnswerBtn.disabled = true;

    // Move to next question after delay
    setTimeout(() => {
        if (currentQuestionIndex < gameData.length - 1) {
            currentQuestionIndex++;
            updateProgress();
            updateQuestionCounter();
            showCurrentQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / gameData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Update question counter
function updateQuestionCounter() {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = gameData.length;
}

// End game
function endGame() {
    // If some questions were never answered (e.g., user closed early), fill them as unanswered
    if (userAnswers.length < gameData.length) {
        for (let i = userAnswers.length; i < gameData.length; i++) {
            const q = gameData[i];
            userAnswers.push({
                question: q.question,
                userAnswer: '(không trả lời)',
                correctAnswer: q.answer,
                isCorrect: false
            });
        }
    }

    const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
    const wrongCount = userAnswers.length - correctCount;
    const accuracyPercent = userAnswers.length > 0 ? Math.round((correctCount / userAnswers.length) * 100) : 0;
    
    // Update result screen
    finalScore.textContent = score;
    correctAnswers.textContent = correctCount;
    wrongAnswers.textContent = wrongCount;
    accuracy.textContent = `${accuracyPercent}%`;
    
    // Performance message
    let message = '';
    if (accuracyPercent >= 90) {
        message = '🏆 Xuất sắc! Bạn là chuyên gia kinh tế!';
    } else if (accuracyPercent >= 70) {
        message = '🎯 Tốt lắm! Kiến thức kinh tế của bạn rất vững!';
    } else if (accuracyPercent >= 50) {
        message = '👍 Khá tốt! Hãy tiếp tục học hỏi thêm!';
    } else {
        message = '📚 Cần cố gắng thêm! Hãy ôn tập lại kiến thức!';
    }
    performanceMessage.textContent = message;
    
    showScreen('result-screen');
}

// Show answers
function showAnswers() {
    answersList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = `answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        answerItem.innerHTML = `
            <div class="answer-question">Câu ${index + 1}: ${answer.question}</div>
            <div class="answer-user">Bạn trả lời: ${answer.userAnswer}</div>
            <div class="answer-correct">Đáp án đúng: ${answer.correctAnswer}</div>
            <div class="answer-status ${answer.isCorrect ? 'correct' : 'incorrect'}">
                ${answer.isCorrect ? '✓ Đúng' : '✗ Sai'}
            </div>
        `;
        
        answersList.appendChild(answerItem);
    });
    
    showScreen('answers-screen');
}

// Sound effects (using Web Audio API)
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Fallback for browsers that don't support Web Audio API
        console.log('Success sound');
    }
}

function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // Fallback for browsers that don't support Web Audio API
        console.log('Error sound');
    }
}

// Event Listeners
startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', submitAnswer);
hintBtn.addEventListener('click', showHint);
showAnswerBtn.addEventListener('click', showAnswer);
playAgainBtn.addEventListener('click', initGame);
showAnswersBtn.addEventListener('click', showAnswers);
backToResultBtn.addEventListener('click', () => showScreen('result-screen'));

// Enter key to submit
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !submitBtn.disabled) {
        submitAnswer();
    }
});

// Initialize game on load
document.addEventListener('DOMContentLoaded', initGame);

// Add some visual effects
document.addEventListener('DOMContentLoaded', () => {
    // Add floating particles effect
    createFloatingParticles();
});

function createFloatingParticles() {
    const container = document.querySelector('.game-container');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        
        container.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
