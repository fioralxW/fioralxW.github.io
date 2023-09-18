const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomebtn = document.querySelector('.goHome-btn');
const roundTwo = document.querySelector('.round-two');

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
    showBoxOne(boxCount);
    questionCounter(1);
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    boxCount = 0;
    questionNumb = 1;
    UserFi= 0;
    UserFe= 0;
    UserTi= 0;
    UserTe= 0;
    UserNi = 0;
    UserNe = 0;
    UserSi = 0;
    UserSe = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb); //not this
    showBoxOne(boxCount);
}

goHomebtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    boxCount = 0;
    questionNumb = 1;
    UserFi = 0;
    UserFe = 0;
    UserTi = 0;
    UserTe = 0;
    UserNi = 0;
    UserNe = 0;
    UserSi = 0;
    UserSe = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    showBoxOne(boxCount)
}

let questionCount = 0;
let boxCount = 0;
let questionNumb = 1;
let userScore = 0;
let UserFi = 0;
let UserFe = 0;
let UserTi = 0;
let UserTe = 0;
let UserNi = 0;
let UserNe = 0;
let UserSi = 0;
let UserSe = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        boxCount++;
        showQuestions(questionCount);
        showBoxOne(boxCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    } 
    else {
        console.log(UserFi);
        console.log(UserFe);
        showResultBox();
    }
    
}

// const prevBtn = document.querySelector('.prev-btn'); 

// prevBtn.onclick = () => {
//     if (questionCount > 0) {
//         questionCount--;
//         boxCount--;
//         showQuestions(questionCount);
//         showBoxOne(boxCount);

//         questionNumb--;
//         questionCounter(questionNumb);

//         nextBtn.classList.add('active');
//         if (questionCount <= 0) {
//             prevBtn.classList.remove('active');
//         } 
//     } 
// }

const optionList = document.querySelector('.option-list');

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'CheckforFiFe(this)');
    }
}

function showBoxOne(index) {
    const examplesOneText = document.querySelector('.boxOne');
    const examplesTwoText = document.querySelector('.boxTwo');
    examplesOneText.textContent = `${boxOne[index].exampleOne}`;
    examplesTwoText.textContent = `${boxOne[index].exampleTwo}`;
}

function CheckforFiFe(answer) {
    let userAnswer = answer.textContent;
    let Fihere = questions[questionCount].Fi;
    let Fehere = questions[questionCount].Fe; //Fi & Fe check B)
    let Tihere = questions[questionCount].Ti;
    let Tehere = questions[questionCount].Te;
    let Nihere = questions[questionCount].Ni;
    let Nehere = questions[questionCount].Ne;
    let Sihere = questions[questionCount].Si;
    let Sehere = questions[questionCount].Se;
    let allOptions = optionList.children.length;

    if (userAnswer == Fihere) {
        answer.classList.add('correct');
         UserFi += 1;

    }
    if (userAnswer == Fehere) {
        answer.classList.add('correct');
        UserFe += 1;
    }

    if (userAnswer == Tihere) {
        answer.classList.add('correct');
         UserTi += 1;

    }
    if (userAnswer == Tehere) {
        answer.classList.add('correct');
        UserTe += 1;
    }

    if (userAnswer == Nihere) {
        answer.classList.add('correct');
         UserNi += 1;

    }
    if (userAnswer == Nehere) {
        answer.classList.add('correct');
        UserNe += 1;
    }

    if (userAnswer == Sihere) {
        answer.classList.add('correct');
         UserSi += 1;

    }
    if (userAnswer == Sehere) {
        answer.classList.add('correct');
        UserSe += 1;
    }    

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
        }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

const unclear = 'unclear'

// function showRoundTwo() {
//     quizBox.classList.remove('active');
//     roundTwo.classList.add('active');

//     setTimeout(roundTwoUnclear, 5000);
    // else {
    //     roundTwo.classList.remove('active');
    //     quizSection.classList.add('active');
    //     quizBox.classList.add('active');
    //     showQuestions(0);
    //     showBoxOne(boxCount);
    //     questionCounter(1);
    //     headerScore();
    // }
// }

// function roundTwoUnclear() {
//     roundTwo.classList.remove('active')
//     quizSection.classList.add('active');
//     quizBox.classList.add('active');
//     showQuestions(0);
// } 



function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    calculateResult();

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `${userF} // ${userT} // ${userN} // ${userS}`;
}

let userF = '';
let userT = '';
let userN = '';
let userS = '';

function calculateResult() {
    if (UserFi > UserFe) {
        userF = 'egois 😈 (Fi)';
    }
    if (UserFe > UserFi) {
        userF = 'people-pleaser ❤️‍🩹 (Fe)';
    }
    if (UserFi == UserFe) {
        userF = 'labil booo';
    }

    if (UserTi > UserTe) {
        userT = 'big brain tapi boong 🤓 (Ti)';
    }
    if (UserTe > UserTi) {
        userT = 'workaholic 👩‍💻 (Te)';
    }
    if (UserTi == UserTe) {
        userT = 'labil huuu';
    }

    if (UserNi > UserNe) {
        userN = 'dukun 🔮 (Ni)';
    }
    if (UserNe > UserNi) {
        userN = 'kentut dari otak (Ne)';
    }
    if (UserNi == UserNe) {
        userN = 'labil weee';
    }

    if (UserSi > UserSe) {
        userS = 'boomer 👴 (Si)';
    }
    if (UserSe > UserSi) {
        userS = 'ngabers 🥴 (Se)';
    }
    if (UserSi == UserSe) {
        userS = 'labil ewww';
    }

    // INTP uses Fe, ENTJ uses Fi
    // ENFJ uses Ti, INFP uses Te
}

