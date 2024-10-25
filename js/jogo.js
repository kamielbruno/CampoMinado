let currentQuestion = 1;

function showQuestion(questionNumber) {
  document
    .querySelectorAll(".question-container")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(`questao${questionNumber}`).style.display = "block";
}

function nextQuestion(questionNumber) {
  const form = document.getElementById("quiz-Formulario");
  const answers = form.querySelectorAll(
    `input[name=q${questionNumber}]:checked`
  );

  if (answers.length > 0) {
    currentQuestion++;
    if (currentQuestion > 8) {
      submitQuiz();
    } else {
      showQuestion(currentQuestion);
    }
  } else {
    alert("Por favor, selecione uma resposta antes de continuar.");
  }
}

function submitQuiz() {
  const form = document.getElementById("quiz-Formulario");
  const result = document.getElementById("result");
  const restartBtn = document.getElementById("restartBtn");

  let score = 0;

  if (form.q1.value === "B") score++;
  if (form.q2.value === "B") score++;
  if (form.q3.value === "B") score++;
  if (form.q4.value === "A") score++;
  if (form.q5.value === "A") score++;
  if (form.q6.value === "A") score++;
  if (form.q7.value === "B") score++;
  if (form.q8.value === "A") score++;

  if (score === 8) {
    result.textContent = "Parabéns! Você acertou todas as questões!";
  } else {
    result.textContent = `Você acertou ${score} de 8 perguntas.`;
  }
  result.style.display = "block";
  restartBtn.style.display = "block";
}

function restartQuiz() {
  currentQuestion = 1;
  showQuestion(currentQuestion);
  document.getElementById("result").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("quiz-Formulario").reset();
  showQuestion(currentQuestion);
}
