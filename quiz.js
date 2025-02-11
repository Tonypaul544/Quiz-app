

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



function displayScore(){
  document.getElementById("submitButton").style.display = "none";
  // document.getElementById("quiz-container").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("prevButton").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("changeToAnswer").innerHTML = "Your score";
  document.getElementById("replayButton").style.display = "block";

  document.getElementById("result-container").style.display = "block";

  const yourScore = document.getElementById("yourScore");
  yourScore.innerHTML = totalScore;  
  document.getElementById("replayButton").addEventListener("click", restart)
}

function restart() {
  location.reload();
}



// function displayScore() {
//   document.getElementById("question-container").style.display = "none";
//   document.getElementById("choices").style.display = "none";
//   document.getElementById("question").style.display = "none";
//   document.getElementById("btnButton").style.display = "none";
//   document.getElementById("changeToAnswer").innerHTML = "Your score";

  
//   const percentage = (totalScore / shuffledQuestions.length) * 100;
//   let message = percentage >= 80 ? "Excellent! 🎉" : percentage >= 50 ? "Good job! " : "Try again! ";
  
//   const resultDiv = document.getElementById("result-container");
//   resultDiv.style.display = "flex";
//   resultDiv.innerHTML = `
//       <h2>Quiz Completed!</h2>
//       <p>Your final score: <h2>${totalScore}/${shuffledQuestions.length}</h2></p>
//       <p><h3>${message}</h3></p>
//   `;
// }

window.onload = () => {
  renderQuestion();
  document.getElementById("prevButton").onclick = prevQuestion;
  document.getElementById("nextButton").onclick = nextQuestion;
  document.getElementById("submitButton").onclick = finishQuiz;
};
