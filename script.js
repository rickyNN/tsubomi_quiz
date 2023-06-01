import { quizDataJp } from './quiz_data_jp.js';


// let quizDataJp = [{
  ///学校名(スペースで複数選択可)
//   school: 'kamei ryuge',
　///学年
//   grade: 'grade1',
  ///教科(英語:E、数学M、理科SI,社会SS)
//   subject: 'E',
//   question: '次の文章の英訳として最も適切なものはどれ？\n私の父は高校で数学を教えています。',
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   d: 'd',
//   explanation: 'a',
// }];

let schoolFilter = [];
let gradeFilter = [];
let completeFilter = [];

shuffleList(quizDataJp);

//ファイル名習得(学校と学年と科目判定)
const filename = window.location.href.split('/').pop().replace(".html", "");

const Quiz = document.getElementById('quiz');
const index = document.getElementById('index');

document.addEventListener('DOMContentLoaded', function () {
  Quiz.style.display = 'none';
  index.style.display = 'block';
  let i = 0;
  let ii = 0;
  let j = 0;
  let jj = 0;
  let x = 0;
  // ▼2階層目の要素を全て非表示にする
  const allSubBoxes1 = document.getElementsByClassName("subbox1");
  for (i = 0; i < allSubBoxes1.length; i++) {
    allSubBoxes1[i].style.display = 'none';
  }
  // ▼3階層目の要素を全て非表示にする
  const allSubBoxes2 = document.getElementsByClassName("subbox2");
  for (i = 0; i < allSubBoxes2.length; i++) {
    allSubBoxes2[i].style.display = 'none';
  }

  // ▼全てのプルダウンメニューセットごとに処理
  const mainBoxes = document.getElementsByClassName('pulldownset');
  for (i = 0; i < mainBoxes.length; i++) {

    const mainSelect = mainBoxes[i].getElementsByClassName("mainselect");   // 1階層目(メイン)のプルダウンメニュー（※後でvalue属性値を参照するので、select要素である必要があります。）
    mainSelect[0].onchange = function () {
      // ▼同じ親要素に含まれているすべての2階層目(サブ)要素を消す
      const subBox = this.parentNode.getElementsByClassName("subbox1");   // 同じ親要素に含まれる.subbox（※select要素に限らず、どんな要素でも構いません。）
      for (j = 0; j < subBox.length; j++) {
        subBox[j].style.display = 'none';
      }

      // ▼指定された2階層目(サブ)要素だけを表示する
      if (this.value) {
        const targetSub = document.getElementById(this.value);   // 「1階層目のプルダウンメニューで選択されている項目のvalue属性値」と同じ文字列をid属性値に持つ要素を得る
        console.log(this.value);
        schoolFilter = quizDataJp.filter(object => object.school.includes(this.value));
        console.log(schoolFilter);
        targetSub.style.display = 'inline';
      }
      // ▼3階層目の要素を全て非表示にする
      const allSubBoxes2 = document.getElementsByClassName("subbox2");
      for (i = 0; i < allSubBoxes2.length; i++) {
        allSubBoxes2[i].style.display = 'none';
      }
    }
  }
  // ▼全てのプルダウンメニューセットごとに処理
  const mainBoxes2 = document.getElementsByClassName('pulldownset');
  for (ii = 0; ii < mainBoxes2.length; ii++) {

    const mainSelect2 = mainBoxes2[ii].getElementsByClassName("subbox1");   // 1階層目(メイン)のプルダウンメニュー（※後でvalue属性値を参照するので、select要素である必要があります。）

    for (x = 0; x < mainSelect2.length; x++) {
      mainSelect2[x].onchange = function () {
        // ▼同じ親要素に含まれているすべての3階層目(サブ)要素を消す
        const subBox2 = this.parentNode.getElementsByClassName("subbox2");   // 同じ親要素に含まれる.subbox（※select要素に限らず、どんな要素でも構いません。）
        for (jj = 0; jj < subBox2.length; jj++) {
          subBox2[jj].style.display = 'none';
        }
        // ▼指定された3階層目(サブ2)要素だけを表示する
        if (this.value) {
          const targetSub2 = document.getElementById(this.value);   // 「2階層目のプルダウンメニューで選択されている項目のvalue属性値」と同じ文字列をid属性値に持つ要素を得る
          targetSub2.style.display = 'inline';
          console.log(this.value);
          gradeFilter = schoolFilter.filter(object => object.grade === this.value);
          console.log(gradeFilter);
        }
      }
    }
  }
  // ▼全てのプルダウンメニューセットごとに処理
  const mainBoxes3 = document.getElementsByClassName('pulldownset');
  for (ii = 0; ii < mainBoxes3.length; ii++) {

    const mainSelect3 = mainBoxes3[ii].getElementsByClassName("subbox2");   // 1階層目(メイン)のプルダウンメニュー（※後でvalue属性値を参照するので、select要素である必要があります。）

    for (x = 0; x < mainSelect3.length; x++) {
      mainSelect3[x].onchange = function () {
        index.style.display = 'none';
        Quiz.style.display = 'block';
        console.log(this.value);
        completeFilter = gradeFilter.filter(object => object.subject === this.value);
        console.log(completeFilter);
        startQuiz();
      }
    }
  }
});

//////テスト中////////

// function change (){
//   index.style.display = 'none';
//   Quiz.style.display = 'block';
//   console.log(this.value);
// }

// document.getElementById("kamei1").onchange = change;



//////テスト終わり//////////////

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
//スタートボタン
const startQuizBtn = document.getElementById('start-quiz');
//戻るボタン
const backQuizBtn = document.getElementById('back-quiz');

// 
const quizHeaderElm = document.getElementById('quiz-header');
const resultsConElm = document.getElementById('results-container');
const resultsElm = document.getElementById('results');
const explanationElm = document.getElementById('explanation');
const startConElm = document.getElementById('start-container');
const startsElm = document.getElementById('start');


// loadQuiz();
startQuiz();

function loadQuiz() {
  // 問題を取得
  const currentQuizData = completeFilter[currentQuiz];
  //問題を配列化
  const currentArray = [currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d];
  //問題番号を表示
  quizNumberElm.innerText = "第" + quiznumber + "問";
  // 質問文を表示
  questionElm.innerText = currentQuizData.question;
  //問題配列のランダムな並び替え
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

//completeFilterの順番を並び替える
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
  // if (quiz === score) {
  //   return quiz + '問中' + score + '問正解\nスクリーンショットを撮って、科目とともにLINEで報告しよう！'
  // } else {
  if (quiz == 0) {
    return '準備中！　更新までお待ちください！'
  } else {
    return quiz + '問中' + score + '問正解\n何度でも挑戦しよう！'
  }
  // }
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
  // container.style.width='100%';
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
    if (correct === completeFilter[currentQuiz].a) {
      showResults('正解！', completeFilter[currentQuiz].explanation);
      quiz++;
      score++;
      console.log(score);
    } else {
      showResults('残念...', completeFilter[currentQuiz].explanation);
      quiz++;
    }

    // ラジオボタンの選択を解除する
    document.getElementById(answer).checked = false;
  }
});

function nextQuiz() {
  // 問題番号を進める
  currentQuiz++;

  // まだ問題が残っている
  if (currentQuiz < completeFilter.length) {
    // // 問題を取得
    // const currentQuizData = completeFilter[currentQuiz];
    // //問題の学年_学校_科目が一致するとき
    // if (filename == currentQuizData.check) {
    // 次の問題を読み込む
    loadQuiz();

    showQuiz();
    //一致しないとき
    // } else {
    //   nextQuiz();
    // }
    // 全ての問題に回答した
  } else {
    alert(checkScore());
    window.location = 'test-page.html';
  }
}

//前の問題に戻る処理(問題番号を進めずに次の問題に進む)
function backQuiz() {
  loadQuiz();
  showQuiz();
}

//前の問題に戻る
backQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  backQuiz();
});

//次の問題に進む
nextQuizBtn.addEventListener('click', event => {
  quiznumber++;
  event.preventDefault();
  nextQuiz();
});

//スタート
startQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  if (completeFilter.length === 0) {
    alert(checkScore());
    window.location = 'test-page.html';
  } else {
    loadQuiz();
    showQuiz();
  }
});



