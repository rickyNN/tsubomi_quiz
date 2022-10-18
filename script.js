import { quizDataJp } from './quiz_data_jp.js';

// 質問文
const questionElm = document.getElementById('question');

// 選択肢
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

// 送信ボタン
const submitBtn = document.getElementById('submit');

// 現在の問題
let currentQuiz = 0;

// 現在の解答した問題
let quiz = 0;

// 現在の正解した問題
let score = 0;

// 次の問題ボタン
const nextQuizBtn = document.getElementById('next-quiz');
const startQuizBtn = document.getElementById('start-quiz');

// 
const quizHeaderElm = document.getElementById('quiz-header');
const resultsConElm = document.getElementById('results-container');
const resultsElm = document.getElementById('results');
const explanationElm = document.getElementById('explanation');
const startConElm = document.getElementById('start-container');
const startsElm = document.getElementById('start');

//ファイル名習得(学校と学年と科目判定)
const filename = window.location.href.split('/').pop().replace(".html", "");


// loadQuiz();
startQuiz();

function loadQuiz() {
  // 問題を取得
  const currentQuizData = quizDataJp[currentQuiz];

  // 質問文を表示
  questionElm.innerText = currentQuizData.question;

  // 選択肢を表示
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getAnswered() {

  // 選択したボタンのvalueを返す
  return document.quizForm.answer.value;
}

function showResults(results, ex) {
  quizHeaderElm.style.display = 'none';
  submitBtn.style.display = 'none';
  resultsConElm.style.display = 'block';
  explanationElm.style.display = 'block';
  startConElm.style.display = 'none';
  startsElm.style.display = 'none';
  resultsElm.innerText = results;
  explanationElm.innerText = ex;
}

function showQuiz() {
  quizHeaderElm.style.display = 'block';
  submitBtn.style.display = 'block';
  resultsConElm.style.display = 'none';
  explanationElm.style.display = 'none';
  startConElm.style.display = 'none';
  startsElm.style.display = 'none';
}

function checkScore() {
  if(quiz == 0){
    return "問題準備中。更新までお待ちください。"
  } else {
    return quiz + '問中' + score + '問正解\n何度でも挑戦しよう！'
  }
}

function startQuiz() {
  quizHeaderElm.style.display = 'none';
  submitBtn.style.display = 'none';
  resultsConElm.style.display = 'none';
  explanationElm.style.display = 'none';
  startConElm.style.display = 'block';
  startsElm.style.display = 'block';
}


submitBtn.addEventListener('click', event => {
  event.preventDefault();

  // 回答を取得
  const answer = getAnswered();

  // 回答している
  if (answer) {

    // 正誤判定
    if (answer === quizDataJp[currentQuiz].correct) {
      showResults('正解！', quizDataJp[currentQuiz].explanation);
      quiz++;
      score++;
      console.log(score);
    } else {
      showResults('残念...', quizDataJp[currentQuiz].explanation);
      quiz++;
    }

    // ラジオボタンの選択を解除する
    document.getElementById(answer).checked = false;
  }
});

function nextQuiz() {
  // 次の問題へ進む
  currentQuiz++;

  // まだ問題が残っている
  if (currentQuiz < quizDataJp.length) {
    // 問題を取得
    const currentQuizData = quizDataJp[currentQuiz];
    //問題の学年学校科目が一致するとき
    if (filename == currentQuizData.check) {
      // 次の問題を読み込む
      loadQuiz();

      showQuiz();
      //一致しないとき
    } else {
      nextQuiz();
    }
    // 全ての問題に回答した
  } else {
    alert(checkScore());
    window.location = 'index.html';
  }
}

nextQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  nextQuiz();
});

startQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  const currentQuizData = quizDataJp[currentQuiz];
  //問題の学年学校科目が一致するとき
  if (filename == currentQuizData.check) {
    // 次の問題を読み込む
    loadQuiz();

    showQuiz();
    //一致しないとき
  } else {
    nextQuiz();
  }
});



            