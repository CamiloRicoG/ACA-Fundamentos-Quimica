const startButton = document.getElementById('start-button');
const levelContainer = document.getElementById('level-container');
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const levelTitle = document.getElementById('level-title');
const challengeContainer = document.getElementById('challenge-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

const button = document.getElementById('changeImageButton');
const image = document.getElementById('image');


let score = 0;
let currentLevel = 0;

let currentImageIndex = 0;

const images = [
    'Imagenes/hoja1.png', // Imagen 1
    'Imagenes/hoja2.png', // Imagen 2
    'Imagenes/hoja3.png', // Imagen 3
    'Imagenes/hoja4.png', // Imagen 4
    'Imagenes/hoja5.png', // Imagen 5
    'Imagenes/hoja6.png', // Imagen 6
    'Imagenes/hoja7.png', // Imagen 7
    'Imagenes/hoja8.png', // Imagen 8
    'Imagenes/hoja9.png', // Imagen 9
];

const levels = [
    {
        title: "Nivel 1: Endurecimiento por Superficie",
        challenge: "Selecciona la respuesta correcta",
        question: "¿Qué compuestos se forman en el proceso de nitruración?",
        answers: [
            { text: "Nitruro de hierro", correct: true },
            { text: "Óxido de zinc", correct: false },
            { text: "Capa de cerámica", correct: false },
            { text: "Aluminio", correct: false }
        ]
    },
    {
        title: "Nivel 2: Galvanización",
        challenge: "Selecciona la respuesta correcta",
        question: "¿Qué reacción química ocurre durante la galvanización?",
        answers: [
            { text: "Oxidación", correct: true },
            { text: "Reducción", correct: false },
            { text: "Combustión", correct: false },
            { text: "Polimerización", correct: false }
        ]
    },
    {
        title: "Nivel 3: Recubrimientos Cerámicos",
        challenge: "Selecciona la respuesta correcta",
        question: "¿Cuáles son las ventajas de usar recubrimientos cerámicos?",
        answers: [
            { text: "Alta resistencia al desgaste", correct: true },
            { text: "Bajo costo", correct: false },
            { text: "Ligereza", correct: false },
            { text: "Facilidad de aplicación", correct: false }
        ]
    },
    {
        title: "Nivel 4: Anodizado",
        challenge: "Selecciona la respuesta correcta",
        question: "¿Cómo se forma la capa de óxido en el anodizado?",
        answers: [
            { text: "A través de una reacción electroquímica", correct: true },
            { text: "Por calentamiento", correct: false },
            { text: "Con químicos ácidos", correct: false },
            { text: "Al contacto con el aire", correct: false }
        ]
    }
];

button.addEventListener('click', slides);
    
function slides() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cicla por las imágenes
    image.src = images[currentImageIndex];
    if (currentImageIndex === 0) {
        question-container.classList.remove('hidden');
        slide-container.classList.add('hidden');
        startGame();
    }
}

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    score = 0;
    currentLevel = 0;
    scoreContainer.classList.remove('hidden');
    levelContainer.classList.remove('hidden');
    scoreElement.innerText =  `Puntuación: ${score}`;
    showLevel();
}

function showLevel() {
    const level = levels[currentLevel];
    levelTitle.innerText = level.title;
    challengeContainer.innerText = level.challenge;
    questionContainer.classList.add('hidden');
    askQuestion();
}

function completeLevel() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        showLevel();
    } else {
        endGame();
    }
}

function askQuestion() {
    const level = levels[currentLevel];
    questionElement.innerText = level.question;
    answerButtons.innerHTML = ''; // Limpiar botones de respuesta
    level.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
    questionContainer.classList.remove('hidden');
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    scoreElement.innerText = `Puntuación: ${score}`;
    completeLevel();
    //askQuestion();
}

function endGame() {
    levelContainer.classList.add('hidden');
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.innerText = `Puntuación Final: ${score}`;
}