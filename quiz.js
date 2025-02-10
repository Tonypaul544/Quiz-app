// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {


//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.firstChild.removeChild(answerButtons.firstChild);  //(answerButtons.firstChild);
//   // }
// }

// // function resetState(){
// //   nextButton.style.display = "none";
// //   while (answerButtons.firstChild) {
// //     answerButtons.removeChild(answerButtons.firstChild);
// //   }
// // }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showscore() {
//   resetState();
//   questionElement.innerHTML = `You scored: ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     currentQuestionIndex++;
//     showQuestion();
//   } else {
//     showscore();
//   }
// });

// startQuiz();








const quizData = [
  {
      question: " What is the purpose of the <title> tag in HTML?",
      choices: {
          a: "To define the font style of a webpage",
          b: "To specify the background color of a webpage",
          c: "To define the title of a webpage",
          d: "To add an image to a webpage"
      },
      correctAnswer: "c"
  },
  {
      question: "Which HTML tag is used to create an unordered list?",
      choices: {
          a: "<ol>",
          b: "<ul>",
          c: "<dl>",
          d: "<p>"
      },
      correctAnswer: "b"
  },
  {
      question: "What is the purpose of the alt attribute in the <img> tag?",
      choices: {
          a: "To specify the width of an image",
          b: "To specify the height of an image",
          c: "To provide alternative text for an image",
          d: "To specify the border color of an image"
      },
      correctAnswer: "c"
  },
  {
    question: "Which HTML tag is used to create a table row?",
    choices: {
        a: "<table>",
        b: "<tr>",
        c: "<td>",
        d: "<th>"
    },
    correctAnswer: "c"
},
{
  question: "What is the purpose of the <meta> tag in HTML?",
  choices: {
      a: "To define the structure of a webpage",
      b: "To specify the character encoding of a webpage",
      c: "To add a script to a webpage",
      d: "To create a hyperlink"
  },
  correctAnswer: "b"
},
];

let shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let totalScore = 0;

function renderQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length) {
      const currentQuestion = shuffledQuestions[currentQuestionIndex];
      document.getElementById("question").innerText = currentQuestion.question;
      document.getElementById("currentnumber").innerText = currentQuestionIndex + 1;
      document.getElementById("totalQuestions").innerText = shuffledQuestions.length;



      const choicesDiv = document.getElementById("choices");
      choicesDiv.innerHTML = "";

      Object.entries(currentQuestion.choices).forEach(([key, value]) => {
        const choiceButton = document.createElement("div");
        choiceButton.classList.add("option");
        choiceButton.innerText = value;
        choiceButton.setAttribute("data-choice", key);

        if (userResponses = currentQuestionIndex) { //[currentQuestionIndex] === key) {
            choiceButton.style.backgroundColor = "";
        }
        
        choiceButton.onclick = selectAnswer;
        choicesDiv.appendChild(choiceButton);
      });
  }
}

function selectAnswer(event) {
  const chosenAnswer = event.target.getAttribute("data-choice");
  userResponses[currentQuestionIndex] = chosenAnswer;
  
  document.querySelectorAll('.option').forEach(choice => choice.style.backgroundColor = "");
  event.target.style.backgroundColor = "green";
  choiceButton.style.color = "#fff";
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
  }
}

function finishQuiz() {
  if (confirm("Are you sure you want to submit?")) {
      totalScore = shuffledQuestions.reduce((score, q, index) => {
          return userResponses[index] === q.correctAnswer ? score + 1 : score;
      }, 0);
      displayScore();
  }
}

function displayScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("btnButton").style.display = "none";
  // document.getElementById("changeToAnswer").innerHTML = "Your score";
  // document.getElementById("result-container").style.display = "block";
  // document.getElementById("score").innerHTML = shuffledQuestions.length;

  

  const percentage = (totalScore / shuffledQuestions.length) * 100;
  let message = percentage >= 80 ? "Excellent! 🎉" : percentage >= 50 ? "Good job! " : "Try again! ";
  
  const resultDiv = document.getElementById("result-container");
  resultDiv.style.display = "flex";
  resultDiv.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your final score: <h2>${totalScore}/${shuffledQuestions.length}</h2></p>
      <p><h3>${message}</h3></p>
  `;
}

window.onload = () => {
  renderQuestion();
  document.getElementById("prevButton").onclick = prevQuestion;
  document.getElementById("nextButton").onclick = nextQuestion;
  document.getElementById("submitButton").onclick = finishQuiz;
};
