const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}


exitBtn.onclick = () => {           
    popupInfo.classList.remove('active');
    main.classList.remove('active');
} 

continueBtn.onclick = () => {
   quizSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.add('active');

   showQuestions(0);
   questionCounter(1);
   headerScore();
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');
    
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    }
    else {  
        showResultBox();
    }        
}
 

const optionList = document.querySelector('.option-list');

// geting questions and options from array   
function showQuestions(index) { 
    const questionText = document.querySelector('.question-text');
    questionText.textContent =  `${questions[index].numb}.  ${questions[index].question}.`;

    let optionTag =`<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)'); 
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');  
        userScore += 1; 
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        // if answer incorrect, auto select the correct answer
        for (let i = 0; i < allOptions; i++){
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }  
        }
    }

    // if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
} 

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Skor : ${userScore} / ${questions.length}`;
}

function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Nəticə : ${userScore} / ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        // console.log(progressStartValue);
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background =`conic-gradient(#c40094 ${progressStartValue *3.6}deg, rgba(255,255,255, .1) 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed); 
}

//buttons


const cppBtn = document.querySelector('.cpp-btn');
const javaBtn = document.querySelector('.java-btn');
const pythonBtn = document.querySelector('.python-btn');
const sqlBtn = document.querySelector('.sql-btn');


cppBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
 
    showQuestions(0);
    questionCounter(1);
    headerScore();
 }
 javaBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
 
    showQuestions(0);
    questionCounter(1);
    headerScore();
 }
 pythonBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
 
    showQuestions(0);
    questionCounter(1);
    headerScore();
 }
 sqlBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
 
    showQuestions(0);
    questionCounter(1);
    headerScore();
 }

 goHomeBtn.onclick = () => {
   quizSection.classList.remove('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.remove('active');
   resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
} 

const exBtn = document.querySelector('.ex');

exBtn.onclick = () => {           
   quizSection.classList.remove('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.remove('active');
   resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
} 
let questions = [
{
    numb: 1,
    question: "SQL Suallar >>>>>>SQL nəyin qısaltmasıdır?",
    answer: "A. Structured Query Language",
    options: [
        "A. Structured Query Language",
        "B. Simple Query Language",
        "C. Sequential Query Language",
        "D. Systematic Query Language",
    ]
},
{
    numb: 2,
    question: "Verilənlər bazasından məlumat almaq üçün hansı SQL ifadəsindən istifadə olunur?",
    answer: "A. SELECT",
    options: [
        "A. SELECT",
        "B. FETCH",
        "C. UPDATE ",
        "D. DELETE"
    ]
},
{
    numb: 3,
    question: "Sorğunun nəticələrini filtrləmək üçün hansı SQL bəndindən istifadə olunur?",
    answer: "A. WHERE",
    options: [
        "A. WHERE",
        "B. HAVING",
        "C. GROUP BY",
        "D. ORDER BY",
    ]
},
{
    numb: 4,
    question: "SQL-də tarixləri və vaxtları saxlamaq üçün adətən hansı məlumat növü istifadə olunur?",
    answer: "C. DATETIME",
    options: [
        "A. INT",
        "B. VARCHAR",
        "C. DATETIME",
        "D. BOOLEAN",
    ]
},
{
    numb: 5,
    question: "Cədvəllərə yeni verilənlər əlavə etmək üçün hansı SQL əmrindən istifadə olunur?",
    answer: "B. INSERT",
    options: [
        "A. ADD",
        "B. INSERT",
        "C. UPDATE",
        "D. MODIFY",
    ]
}
];