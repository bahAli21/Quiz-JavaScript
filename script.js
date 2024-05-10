
const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "Q. Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        choices: ["var", "let", "const", "variable"],
        answer: "let"
    },
    {
        question: "Q. Quelle méthode est utilisée pour afficher une boîte de dialogue avec un message en JavaScript ?",
        choices: ["alert()", "confirm()", "prompt()", "display()"],
        answer: "alert()"
    },
    {
        question: "Q. Quelle est la valeur de l'expression : 2 + '2' en JavaScript ?",
        choices: ["4", "'22'", "22", "NaN"],
        answer: "'22'"
    },
    {
        question: "Q. Quelle fonction JavaScript est utilisée pour vérifier si une variable est un tableau ?",
        choices: ["isArray()", "isTable()", "isList()", "arrayCheck()"],
        answer: "isArray()"
    },
    {
        question: "Q. Quelle est la différence entre '==' et '===' en JavaScript ?",
        choices: [
            "'==' compare les valeurs, '===' compare les valeurs et les types.",
            "'==' compare les valeurs et les types, '===' compare les valeurs.",
            "'==' est strict, '===' est non strict.",
            "'==' et '===' sont équivalents en JavaScript."
        ],
        answer: "'==' compare les valeurs sans tenir compte du type de données, '===' compare les valeurs et le type de données."
    },
    {
        question: "Q. Quel opérateur est utilisé pour la concaténation de chaînes de caractères en JavaScript ?",
        choices: ["+", "&", "-", "||"],
        answer: "+"
    },
    {
        question: "Q. Comment déclarer une fonction nommée 'add' qui prend deux paramètres 'a' et 'b' et retourne leur somme en JavaScript ?",
        choices: ["function add(a, b) { return a + b; }", "add = (a, b) => a + b;", "const add = function(a, b) { return a + b; }", "add(a, b) { return a + b; }"],
        answer: "function add(a, b) { return a + b; }"
    },
    {
        question: "Q. Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript ?",
        choices: ["pop()", "shift()", "splice()", "delete()"],
        answer: "pop()"
    },
    {
        question: "Q. Quel est le résultat de l'expression : 3 * '5' en JavaScript ?",
        choices: ["'15'", "15", "NaN", "8"],
        answer: "15"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour ajouter un élément au début d'un tableau ?",
        choices: ["push()", "unshift()", "append()", "insert()"],
        answer: "unshift()"
    },
    {
        question: "Q. Quel est le résultat de l'expression : 5 == '5' en JavaScript ?",
        choices: ["true", "false", "null", "undefined"],
        answer: "true"
    },
    {
        question: "Q. Quelle est la sortie de typeof(typeof(1)) en JavaScript ?",
        choices: ["'number'", "'string'", "'object'", "'undefined'"],
        answer: "'string'"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour retourner la longueur d'une chaîne de caractères ?",
        choices: ["length()", "size()", "count()", "length"],
        answer: "length"
    },
    {
        question: "Q. Quel opérateur JavaScript est utilisé pour vérifier l'égalité stricte, y compris le type de données ?",
        choices: ["==", "===", "=", "!"],
        answer: "==="
    },
    {
        question: "Q. Quelle est la méthode JavaScript utilisée pour supprimer le dernier élément d'un tableau et renvoyer cet élément ?",
        choices: ["pop()", "shift()", "slice()", "remove()"],
        answer: "pop()"
    },
    {
        question: "Q. Quel est le résultat de '2' + 2 en JavaScript ?",
        choices: ["'22'", "'4'", "'2'", "4"],
        answer: "'22'"
    },
    {
        question: "Q. Quelle est la sortie de 5 + 10 + '5' en JavaScript ?",
        choices: ["'155'", "'5105'", "'105'", "'15'"],
        answer: "'155'"
    },
    {
        question: "Q. Quel est le résultat de 5 == '5' en JavaScript ?",
        choices: ["true", "false", "null", "undefined"],
        answer: "true"
    },
    {
        question: "Q. Quel est le résultat de 5 === '5' en JavaScript ?",
        choices: ["true", "false", "null", "undefined"],
        answer: "false"
    },
    {
        question: "Q. Quelle est la méthode JavaScript utilisée pour joindre les éléments d'un tableau en une chaîne de caractères ?",
        choices: ["join()", "merge()", "concat()", "combine()"],
        answer: "join()"
    },
    {
        question: "Q. Comment accéder au dernier élément d'un tableau en JavaScript ?",
        choices: ["array[length - 1]", "array[-1]", "array[last]", "array[lastElement]"],
        answer: "array[length - 1]"
    },
    {
        question: "Q. Quelle est la sortie de typeof undefined en JavaScript ?",
        choices: ["'undefined'", "'null'", "'object'", "'string'"],
        answer: "'undefined'"
    },
    {
        question: "Q. Quelle est la méthode JavaScript utilisée pour trier les éléments d'un tableau ?",
        choices: ["sort()", "order()", "arrange()", "shuffle()"],
        answer: "sort()"
    },
    {
        question: "Q. Quelle est la sortie de typeof NaN en JavaScript ?",
        choices: ["'number'", "'string'", "'object'", "'NaN'"],
        answer: "'number'"
    },
    {
        question: "Q. Quelle est la méthode JavaScript utilisée pour retourner l'index d'un élément dans un tableau ?",
        choices: ["index()", "findIndex()", "search()", "indexOf()"],
        answer: "indexOf()"
    },
    {
        question: "Q. Quel est le résultat de '3' - 2 en JavaScript ?",
        choices: ["'1'", "1", "'2'", "NaN"],
        answer: "1"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour transformer une chaîne de caractères en lettres majuscules ?",
        choices: ["toUpperCase()", "upperCase()", "toUpper()", "makeUpperCase()"],
        answer: "toUpperCase()"
    },
    {
        question: "Q. Quel est le résultat de 10 % 3 en JavaScript ?",
        choices: ["3", "1", "0", "10"],
        answer: "1"
    },
    {
        question: "Q. Comment accéder au premier élément d'un tableau en JavaScript ?",
        choices: ["array[0]", "array[first]", "array[firstElement]", "array[start]"],
        answer: "array[0]"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour déterminer si une chaîne de caractères se termine par une certaine sous-chaîne ?",
        choices: ["endsWith()", "end()", "last()", "tail()"],
        answer: "endsWith()"
    },
    {
        question: "Q. Quel est le résultat de 2 ** 3 en JavaScript ?",
        choices: ["6", "8", "9", "16"],
        answer: "8"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour vérifier si une chaîne de caractères contient une sous-chaîne spécifique ?",
        choices: ["includes()", "contain()", "has()", "check()"],
        answer: "includes()"
    },
    {
        question: "Q. Quel est le résultat de 2 + 2 * 3 en JavaScript ?",
        choices: ["8", "10", "12", "16"],
        answer: "8"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour créer une copie superficielle d'un objet existant ?",
        choices: ["clone()", "copy()", "duplicate()", "Object.assign()"],
        answer: "Object.assign()"
    },
    {
        question: "Q. Quelle est la sortie de typeof [] en JavaScript ?",
        choices: ["'array'", "'object'", "'list'", "'null'"],
        answer: "'object'"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour inverser l'ordre des éléments dans un tableau ?",
        choices: ["reverse()", "invert()", "flip()", "turn()"],
        answer: "reverse()"
    },
    {
        question: "Q. Quel est le résultat de 10 / '5' en JavaScript ?",
        choices: ["2", "2.5", "'2'", "NaN"],
        answer: "2"
    },
    {
        question: "Q. Quelle est la méthode JavaScript utilisée pour vérifier si un tableau est vide ?",
        choices: ["isEmpty()", "empty()", "clear()", "length === 0"],
        answer: "length === 0"
    },
    {
        question: "Q. Quelle est la sortie de typeof null en JavaScript ?",
        choices: ["'null'", "'object'", "'undefined'", "'string'"],
        answer: "'object'"
    },
    {
        question: "Q. Quelle méthode JavaScript est utilisée pour convertir une chaîne de caractères en un tableau en utilisant un séparateur spécifique ?",
        choices: ["split()", "explode()", "separate()", "slice()"],
        answer: "split()"
    }
];


// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 20;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        //selectedChoice.style.backgroundColor = "#13DA09";
        displayAlert("Réponse correcte !");
        score++;
    }
    else {
        // alert("Wrong answer");
        //selectedChoice.style.backgroundColor = "#FF0000"
        displayAlert(`Réponse incorrecte ! La réponse correcte est ${quiz[currentQuestionIndex].answer}`, 1);
    }
    timeLeft = 20;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `Vous avez obtenu ${score} sur ${quiz.length} !`;
    displayAlert("Vous avez terminé ce quiz !");
    nextBtn.textContent = "Jouer à nouveau";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg, index = 0) => {
    if(index == 1){
        alert.style.backgroundColor = "#FF0000";
    }else{
        alert.style.backgroundColor = "#5d9b63";
    }
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Le temps est écoulé !!! Voulez-vous jouer à nouveau au quiz ?");
            if(confirmUser){
                timeLeft = 20;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                document.querySelector('.footer').style.display = "block";
                return;

            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 20;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    document.querySelector('.footer').style.display = "none";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Suivant") {
        // alert("Select your answer");
        displayAlert("Choisissez votre réponse");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Suivant";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});