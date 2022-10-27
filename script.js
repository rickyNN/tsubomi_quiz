import { quizDataJp } from './quiz_data_jp.js';


//問題番号
const quizNumberElm = document.getElementById('quiznumber');
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

//現在の出題数
let quiznumber = 1;

// 現在の解答した問題
let quiz = 0;

// 現在の正解した問題
let score = 0;

// 次の問題ボタン
const nextQuizBtn = document.getElementById('next-quiz');
const startQuizBtn = document.getElementById('start-quiz');
const backQuizBtn = document.getElementById('back-quiz');

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
shuffleList(quizDataJp);

function loadQuiz() {
  // 問題を取得
  const currentQuizData = quizDataJp[currentQuiz];

  const currentArray = [currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d];
  // 質問文を表示
  quizNumberElm.innerText = "第" + quiznumber + "問"
  questionElm.innerText = currentQuizData.question;

  for (let i = (currentArray.length - 1); 0 < i; i--) {

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = currentArray[i];
    currentArray[i] = currentArray[r];
    currentArray[r] = tmp;
  }
  // 選択肢を表示
  a_text.innerText = currentArray[0];
  b_text.innerText = currentArray[1];
  c_text.innerText = currentArray[2];
  d_text.innerText = currentArray[3];
}

function shuffleList(list) {
  var i = list.length;
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    if (i == j) continue;
    var k = list[i];
    list[i] = list[j];
    list[j] = k;
  }
  return list;
}

function getAnswered() {
  //選択したボタンのvalueを返す
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
  if (quiz === score) {
    return quiz + '問中' + score + '問正解\nスクリーンショットを撮って、科目とともにLINEで報告しよう！'
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

  if (answer == "a") {
    var correct = a_text.innerHTML;
  } else if (answer == "b") {
    var correct = b_text.innerHTML;
  } else if (answer == "c") {
    var correct = c_text.innerHTML;
  } else if (answer == "d") {
    var correct = d_text.innerHTML;
  }

  // 回答している
  if (answer) {

    // 正誤判定
    if (correct === quizDataJp[currentQuiz].a) {
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

function backQuiz() {
  loadQuiz();
  showQuiz();
}

backQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  backQuiz();
});

nextQuizBtn.addEventListener('click', event => {
  quiznumber++;
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



