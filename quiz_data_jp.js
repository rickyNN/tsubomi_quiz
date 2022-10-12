const quizDataJp = [
  // {
  //   check: 'G1_kamei',
  //   question: 'この問題の答えはなんでしょう',
  //   a: 'Take My Hand',
  //   b: 'When The Sun Goes Down',
  //   c: 'Song 2',
  //   d: 'Rewind',
  //   explanation: 'この問題の答えはCです',
  //   correct: 'c'
  // },

  //学年 科目 単元


  ////// 中１

  //// 中１ 亀井

  // 中１ 亀井 英語
  {
    check: 'G1_kamei_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n私の父は高校で数学を教えています。',
    a: 'My father teach math at high school.',
    b: 'My father teachs math at high school.',
    c: 'My father teaches math at high school.',
    d: 'My father teachers math at high school.',
    explanation: '主語が三人称単数になる場合、一般動詞の語尾にはsをつけます。\nただしteachなどのように元々の語尾がo, s, ch, sh, xの場合はesをつけます。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nあなたのお兄さんはお母さんの手伝いをしますか。',
    a: 'Do your brother help your mother?',
    b: 'Does your brother help your mother?',
    c: 'Do your brother helps your mother?',
    d: 'Does your brother helps your mother?',
    explanation: '否定文・疑問文の場合、一般動詞の語尾のsはdoに吸われてdoesになります。\nその場合、一般動詞のsはなくなり原形になります。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: "次の文章の和訳として最も適切なものはどれ？\nShe doesn't like math very much.",
    a: '彼女は数学が大好きです。',
    b: '彼女は数学が全然好きではありません。',
    c: '彼女は数学があまり好きではありません。',
    d: '彼女は数学を勉強したくありません',
    explanation: 'very muchは通常「とても～」と訳しますが、\n否定文のvery muchは「あまり～ではない」となることに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nWhat does Mr.Brown do every morning?',
    a: 'ブラウンさんは毎朝何をしますか。',
    b: '毎朝何かをしているのはブラウンさんですか。',
    c: 'ブラウンさんは毎朝何のために起きますか。',
    d: '毎朝ブラウンさんがそれをするのですか。',
    explanation: 'whatで始まっているので、何かを尋ねる文章です。\n動詞はdoなので、何をしているのか尋ねています。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nJohn usually (＿＿＿) the piano.',
    a: 'play',
    b: 'plays',
    c: "isn't play",
    d: "isn't playing",
    explanation: '主語が三人称単数なので語尾にsがつきます。\nusuallyは習慣を表すため、現在進行形にはなりません。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nGeorge and Edwin (＿＿＿) Japanese every day.',
    a: 'study',
    b: 'studies',
    c: "don't studies",
    d: "doesn't study",
    explanation: '主語はGeorge and Edwin（ジョージとエドウィン）、\nつまり三人称複数なので、sはつけず原形が正しいです。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( not / speak / does / brother / English / my ) .',
    a: 'not',
    b: 'speak',
    c: 'does',
    d: "brother",
    explanation: 'My brother does not speak English.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( and / you / brother / know / he / your / does ) ?',
    a: 'and',
    b: 'you',
    c: 'brother',
    d: "know",
    explanation: 'Does he know you and your brother?(your brother and youでも可)\nが正しい文章です。\ndoesがあることから主語が三人称単数であること、\nもしyour brotherが主語だとするとheが目的語のhimになってしまうことなどに注意しましょう。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nDoes Mr.Kevin open the window in his room every morning?',
    a: 'Yes, he do.',
    b: "No, he doesn't.",
    c: 'Yes, he is.',
    d: "No, he isn't.",
    explanation: 'doesで聞かれているため、doesで返答しましょう。\n',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWhat does your sister drink every morning?',
    a: 'Yes, she does.',
    b: "She drink some milk.",
    c: "She drinks a lot of coffee.",
    d: "Well, it's so clever.",
    explanation: '「あなたのお姉さんは毎朝何を飲んでいますか」と尋ねています。\n三単現のsに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n彼は本を読んでいるところです。',
    a: 'He reads a book.',
    b: 'He reading a book.',
    c: 'He is read a book.',
    d: 'He is reading a book.',
    explanation: '現在進行形の基本は「be動詞 ＋ ～ing」です。\n「読んでいるところ」は「is reading」になります。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nメアリーは今宿題をしていますか。',
    a: 'Do Mary doing her homework now?',
    b: 'Does Mary do her homework now?',
    c: 'Is Mary do her homework now?',
    d: 'Is Mary doing her homework now?',
    explanation: '現在進行形を疑問文にする場合は、be動詞を最初に持ってきます。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nTom is talking about his father now.',
    a: 'トムは今、彼のお父さんの話を聞いているところです。',
    b: 'トムは今、彼にお父さんの話をしているところです。',
    c: 'トムは今、彼のお父さんに話を聞いたところです。',
    d: 'トムは今、彼のお父さんの話をしているところです。',
    explanation: 'is talkingはtalk（話す）の現在進行形なので、\n「話しているところです」になります。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nMr.Smith is not listening to music now.',
    a: 'スミスさんは今、音楽を聞いているところです。',
    b: 'スミスさんは今、音楽を聞いているところではありません。',
    c: 'スミスさんは今から音楽を聞きません。',
    d: 'スミスさん以外の人は今、音楽を聞いているところです。',
    explanation: 'is not listeningはlisten（聞く）の現在進行形の否定なので、\n「聞いているところではない」になります。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nWe are (    ) video games.',
    a: 'not playing',
    b: 'playing not',
    c: 'play not',
    d: 'play with',
    explanation: 'be動詞のあとなので、～ingの形が入ります。\n否定文の場合、その前にnotを入れるので、適切なものは「not playing」です。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nMany fishes (    ) swimming in the sea.',
    a: 'is',
    b: 'are',
    c: 'not',
    d: "don't",
    explanation: 'Many fishesは複数形で、後ろが～ing形なので、be動詞の中でもareが入ります。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( to / the / walking / library / am / now / I ) .',
    a: 'to',
    b: 'the',
    c: 'walking',
    d: "library",
    explanation: 'I am walking to the library now.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( father / teaching / is / your / Japanese ) ?',
    a: 'father',
    b: 'teaching',
    c: 'is',
    d: "your",
    explanation: 'Is your father teaching Japanese?\nが正しい文章です。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nIs Yumi cleaning her room now?',
    a: 'Yes, she does.',
    b: "No, she isn't.",
    c: 'Yes, she doing.',
    d: "No, she doesn't.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWho is playing the guitar now?',
    a: 'Tom is.',
    b: "My brother does.",
    c: "I'm playing the piano.",
    d: "Of course.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。\n疑問詞としてwhoが使われているため、誰がギターを弾いているのかを尋ねています。',
    correct: 'a'
  },


  // 中１ 亀井 理科
  {
    check: 'G1_kamei_SI',
    question: '食塩水の水のように、物質を溶かしている液体を何というか。',
    a: '溶質',
    b: '溶液',
    c: '溶媒',
    d: '水溶液',
    explanation: 'この問題の解説\n溶媒が水である溶液を特に、『水溶液』といいます。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SI',
    question: '食塩水の食塩のように、液体に溶けている物質を何というか。',
    a: '溶質',
    b: '溶液',
    c: '溶媒',
    d: '水溶液',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SI',
    question: '溶液全体の質量に対する溶質の質量の割合を百分率(％)で表したものを何というか。',
    a: '溶解度曲線',
    b: '質量パーセント濃度',
    c: 'パーセント濃度',
    d: '溶解度',
    explanation: 'この問題の解説\n質量パーセント濃度の公式は溶質÷溶液×100(％)。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_SI',
    question: '100ｇの水に25ｇの食塩を溶かしたとき、その濃度は何％か。',
    a: '25％',
    b: '20％',
    c: '0.25％',
    d: '0.2％',
    explanation: 'この問題の解説\n25÷125×100＝20％\n溶液が100ｇではなく、125ｇとなることに注意！',
    correct: 'b'
  },
  {
    check: 'G1_kamei_SI',
    question: '食塩水100ｇの中に25ｇの食塩が溶けているとき、溶液の濃度は何％か。',
    a: '0.2％',
    b: '20％',
    c: '0.25％',
    d: '25％',
    explanation: 'この問題の解説\n25÷100×100＝25％',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SI',
    question: 'アンモニアの集めた方は次のうちどれ。',
    a: '水上置換法',
    b: '水中置換法',
    c: '下方置換法',
    d: '上方置換法',
    explanation: 'この問題の解説\n水に溶けにくい気体はすべて水上置換法です。\n水に溶けやすい気体は空気より重ければ下方置換法、空気より軽ければ上方置換法で集めます。\nただし、上方置換法で集める気体は『アンモニア』しかありません。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SI',
    question: '酸素の特徴は次のうちどれ。',
    a: 'ものが燃えるのを助けるはたらきがある。',
    b: '気体の中で最も軽い。',
    c: '石灰水を通すと白く濁る。',
    d: '火を近づけると音を立てて燃える',
    explanation: 'この問題の解説\n酸素のこのはたらきを『助燃性』といい、火のついた線香を近づけると炎を上げて燃えます。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SI',
    question: '二酸化炭素の集め方として適切でないものはどれ。',
    a: '水上置換法',
    b: '下方置換法',
    c: '上方置換法',
    d: 'a～cの中に答えはない。',
    explanation: 'この問題の解説\n二酸化炭素は水に『少し溶ける』気体なので、水上置換法でも下方置換法でも集められます。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SI',
    question: '塩素の色は次のうちどれ。',
    a: '無色',
    b: '赤色',
    c: '赤褐色',
    d: '黄緑色',
    explanation: 'この問題の解説\n塩素は数少ない有色の気体です。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SI',
    question: '次のうち、空気より軽い気体はどれ。',
    a: '酸素',
    b: 'アンモニア',
    c: '二酸化硫黄',
    d: '二酸化炭素',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_kamei_SI',
    question: '次のうち刺激臭をもつ気体はどれ。',
    a: '塩化水素',
    b: '窒素',
    c: '水素',
    d: '二酸化炭素',
    explanation: 'この問題の解説\nこの他に塩素・アンモニア(刺激臭)、二酸化硫黄(腐卵臭)なども特有のにおいを持つ気体です。。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SI',
    question: '酸素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n過酸化水素水は、オキシドールでも正解です。',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SI',
    question: '水素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n金属片は、亜鉛や鉄、アルミニウムなどでも正解です。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_SI',
    question: '二酸化炭素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n石灰水は、炭酸カルシウムや貝殻などでも正解です。',
    correct: 'c'
  },

  // 中１ 亀井 社会
  {
    check: 'G1_kamei_SS',
    question: '第１問\n温帯で、夏に乾燥し冬に雨が多い、スペインの気候を何という？',
    a: '西岸海洋性気候',
    b: 'ツンドラ気候',
    c: '温暖湿潤気候',
    d: '地中海性気候',
    explanation: 'この問題の解説\n答え：d\n地中海性気候の地域では、\n乾燥に強いオリーブやオレンジ、ぶどうなどが栽培されています。',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第２問\nスペインで、暑い夏の昼間にとる休憩のことを何という？',
    a: '白夜',
    b: 'ブレイクタイム',
    c: 'シエスタ',
    d: 'アリオ',
    explanation: 'この問題の解説\n答え：c\naの白夜は、真夜中でも薄明るい現象で、北極や南極で見られます。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第３問\nアンデス山脈で暮らす人々は、寒い地域でも育つ農作物が主食です。１つ選びましょう！',
    a: 'お米',
    b: '納豆',
    c: 'じゃがいも',
    d: 'さとうきび',
    explanation: 'この問題の解説\n答え：c\nじゃがいもの他に、とうもろこしも主食です！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第３問\nエジプトのカイロは年中雨が少なく、高温です。気候帯は？',
    a: '熱帯',
    b: '温帯',
    c: '乾燥帯',
    d: '寒帯',
    explanation: 'この問題の解説\n答え：c\n１年を通して雨が少ないのが乾燥帯の特徴です。',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第４問\nイスラム教の聖地は？',
    a: 'メッカ',
    b: 'インド',
    c: 'キャンベラ',
    d: '集まれどうぶつの森',
    explanation: 'この問題の解説\n答え：a\ncのキャンベラはオーストラリアの首都です！',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SS',
    question: '第５問\nインドの約９割の人が信仰している宗教は？',
    a: 'キリスト教',
    b: 'ヒンドゥー教',
    c: 'イスラム教',
    d: '仏教',
    explanation: 'この問題の解説\n答え：b\nヒンドゥー教では、牛が神聖な生き物とされています。',
    correct: 'b'
  },
  {
    check: 'G1_kamei_SS',
    question: '第６問\nインドの民族衣装を何という？',
    a: 'チマ・チョゴリ',
    b: 'アオザイ',
    c: 'バロト・サヤ',
    d: 'サリー',
    explanation: 'この問題の解説\n答え：d\naは韓国、bはベトナム、cはフィリピンです！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第７問\nシベリアなどで見られる、１年を通して凍ったままの土を何という？',
    a: '石',
    b: 'リザードン',
    c: 'トリケラトプス',
    d: '永久凍土',
    explanation: 'この問題の解説\n答え：d\n瞬殺ですね！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第８問\n寒帯のうち、短い夏にわずかにコケ類が生える気候は？',
    a: 'サバナ気候',
    b: 'ステップ気候',
    c: 'ツンドラ気候',
    d: 'ツンデレ気候',
    explanation: 'この問題の解説\n答え：c\nそれぞれ何帯の気候かを確認しておこう！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第９問\n赤道付近の地域で、一時的に強風を伴う大雨のことを何という？',
    a: 'コーラ',
    b: 'ファンタ',
    c: 'スコール',
    d: 'CCレモン',
    explanation: 'この問題の解説\n答え：c\nどれもおいしいね！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１０問\n乾燥した地域で水が得やすい場所は？',
    a: 'オアシス',
    b: 'ホイミ',
    c: 'ケアル',
    d: 'スプラッシュマウンテン',
    explanation: 'この問題の解説\n答え：a\n砂漠などで、貴重な水が得られる場所はオアシスですね！',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１１問\n中国の経済特区ってどんな都市？',
    a: '外国企業を集めるために、減税される',
    b: '一定以上の貯金がある人だけが住める',
    c: '一人暮らしの人だけが住める',
    d: 'ベンチャー企業だけが集まる',
    explanation: 'この問題の解説\n答え：a\nb～dの選択肢のような都市は存在しません！',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１２問\n中国の黄河より南側を流れる中国で最長の川は？',
    a: 'インダス川',
    b: 'ガンジス川',
    c: '大和川',
    d: '長江',
    explanation: 'この問題の解説\n答え：d\n長江は、アジアでも最長、世界では３位の長さです。\n１位はナイル川ですね！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１３問\n東南アジア諸国連合をアルファベットで？',
    a: 'EU',
    b: 'AU',
    c: 'ASEAN',
    d: 'OPEC',
    explanation: 'この問題の解説\n答え：c\naはヨーロッパ連合\nbはアフリカ連合\ndは石油輸出国機構！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１４問\nアジアに広がる大規模な農園のことを何という？',
    a: 'ビニールハウス',
    b: '積水ハウス',
    c: 'ラジエーションハウス',
    d: 'プランテーション',
    explanation: 'この問題の解説\n答え：d\nこれしかないですね！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１５問\n原油が多くとれるサウジアラビア近海を何という？',
    a: '黒海',
    b: '東シナ海',
    c: 'ペルシア湾',
    d: '地中海',
    explanation: 'この問題の解説\n答え：c\n原油がよく取れるので、「中東戦争」という戦争がたくさん起こりました！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１６問\nアジアだけでなく、世界各地で広がる、生活環境の悪い住宅地を何という？',
    a: 'スラム',
    b: 'スラムダンク',
    c: 'スライム',
    d: 'スラリン',
    explanation: 'この問題の解説\n答え：a\nこれしかないですね！',
    correct: 'a'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１７問\n韓国で使用されている文字は？',
    a: '象形文字',
    b: '甲骨文字',
    c: 'くさび形文字',
    d: 'ハングル',
    explanation: 'この問題の解説\n答え：d\nこれしかないですね！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１８問\n原油や天然ガスなどを輸送する管を何という？',
    a: 'トンネル',
    b: 'とんねるず',
    c: 'レアメタル',
    d: 'パイプライン',
    explanation: 'この問題の解説\n答え：d\ncは希少金属のことですね！',
    correct: 'd'
  },
  {
    check: 'G1_kamei_SS',
    question: '第１９問\nタイでほとんどの人が信仰している宗教は？',
    a: 'キリスト教',
    b: 'ヒンドゥー教',
    c: '仏教',
    d: 'イスラム教',
    explanation: 'この問題の解説\n答え：c\nタイは仏教徒ばかりです！',
    correct: 'c'
  },
  {
    check: 'G1_kamei_SS',
    question: '第２０問\nフィリピンでほとんどの人が信仰している宗教は？',
    a: 'キリスト教',
    b: 'ヒンドゥー教',
    c: '仏教',
    d: 'イスラム教',
    explanation: 'この問題の解説\n答え：a\nフィリピンはスペインに長い間植民地支配されていました。その影響でヨーロッパのキリスト教が広まりました！',
    correct: 'a'
  },


  //// 中１ 龍華

  // 中１ 龍華 英語
  {
    check: 'G1_ryuge_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n私の父は高校で数学を教えています。',
    a: 'My father teach math at high school.',
    b: 'My father teachs math at high school.',
    c: 'My father teaches math at high school.',
    d: 'My father teachers math at high school.',
    explanation: '主語が三人称単数になる場合、一般動詞の語尾にはsをつけます。\nただしteachなどのように元々の語尾がo, s, ch, sh, xの場合はesをつけます。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nあなたのお兄さんはお母さんの手伝いをしますか。',
    a: 'Do your brother help your mother?',
    b: 'Does your brother help your mother?',
    c: 'Do your brother helps your mother?',
    d: 'Does your brother helps your mother?',
    explanation: '否定文・疑問文の場合、一般動詞の語尾のsはdoに吸われてdoesになります。\nその場合、一般動詞のsはなくなり原形になります。',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: "次の文章の和訳として最も適切なものはどれ？\nShe doesn't like math very much.",
    a: '彼女は数学が大好きです。',
    b: '彼女は数学が全然好きではありません。',
    c: '彼女は数学があまり好きではありません。',
    d: '彼女は数学を勉強したくありません',
    explanation: 'very muchは通常「とても～」と訳しますが、\n否定文のvery muchは「あまり～ではない」となることに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nWhat does Mr.Brown do every morning?',
    a: 'ブラウンさんは毎朝何をしますか。',
    b: '毎朝何かをしているのはブラウンさんですか。',
    c: 'ブラウンさんは毎朝何のために起きますか。',
    d: '毎朝ブラウンさんがそれをするのですか。',
    explanation: 'whatで始まっているので、何かを尋ねる文章です。\n動詞はdoなので、何をしているのか尋ねています。',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nJohn usually (＿＿＿) the piano.',
    a: 'play',
    b: 'plays',
    c: "isn't play",
    d: "isn't playing",
    explanation: '主語が三人称単数なので語尾にsがつきます。\nusuallyは習慣を表すため、現在進行形にはなりません。',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nGeorge and Edwin (＿＿＿) Japanese every day.',
    a: 'study',
    b: 'studies',
    c: "don't studies",
    d: "doesn't study",
    explanation: '主語はGeorge and Edwin（ジョージとエドウィン）、\nつまり三人称複数なので、sはつけず原形が正しいです。',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( not / speak / does / brother / English / my ) .',
    a: 'not',
    b: 'speak',
    c: 'does',
    d: "brother",
    explanation: 'My brother does not speak English.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( and / you / brother / know / he / your / does ) ?',
    a: 'and',
    b: 'you',
    c: 'brother',
    d: "know",
    explanation: 'Does he know you and your brother?(your brother and youでも可)\nが正しい文章です。\ndoesがあることから主語が三人称単数であること、\nもしyour brotherが主語だとするとheが目的語のhimになってしまうことなどに注意しましょう。',
    correct: 'd'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nDoes Mr.Kevin open the window in his room every morning?',
    a: 'Yes, he do.',
    b: "No, he doesn't.",
    c: 'Yes, he is.',
    d: "No, he isn't.",
    explanation: 'doesで聞かれているため、doesで返答しましょう。\n',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWhat does your sister drink every morning?',
    a: 'Yes, she does.',
    b: "She drink some milk.",
    c: "She drinks a lot of coffee.",
    d: "Well, it's so clever.",
    explanation: '「あなたのお姉さんは毎朝何を飲んでいますか」と尋ねています。\n三単現のsに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n彼は本を読んでいるところです。',
    a: 'He reads a book.',
    b: 'He reading a book.',
    c: 'He is read a book.',
    d: 'He is reading a book.',
    explanation: '現在進行形の基本は「be動詞 ＋ ～ing」です。\n「読んでいるところ」は「is reading」になります。',
    correct: 'd'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nメアリーは今宿題をしていますか。',
    a: 'Do Mary doing her homework now?',
    b: 'Does Mary do her homework now?',
    c: 'Is Mary do her homework now?',
    d: 'Is Mary doing her homework now?',
    explanation: '現在進行形を疑問文にする場合は、be動詞を最初に持ってきます。',
    correct: 'd'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nTom is talking about his father now.',
    a: 'トムは今、彼のお父さんの話を聞いているところです。',
    b: 'トムは今、彼にお父さんの話をしているところです。',
    c: 'トムは今、彼のお父さんに話を聞いたところです。',
    d: 'トムは今、彼のお父さんの話をしているところです。',
    explanation: 'is talkingはtalk（話す）の現在進行形なので、\n「話しているところです」になります。',
    correct: 'd'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nMr.Smith is not listening to music now.',
    a: 'スミスさんは今、音楽を聞いているところです。',
    b: 'スミスさんは今、音楽を聞いているところではありません。',
    c: 'スミスさんは今から音楽を聞きません。',
    d: 'スミスさん以外の人は今、音楽を聞いているところです。',
    explanation: 'is not listeningはlisten（聞く）の現在進行形の否定なので、\n「聞いているところではない」になります。',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nWe are (    ) video games.',
    a: 'not playing',
    b: 'playing not',
    c: 'play not',
    d: 'play with',
    explanation: 'be動詞のあとなので、～ingの形が入ります。\n否定文の場合、その前にnotを入れるので、適切なものは「not playing」です。',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nMany fishes (    ) swimming in the sea.',
    a: 'is',
    b: 'are',
    c: 'not',
    d: "don't",
    explanation: 'Many fishesは複数形で、後ろが～ing形なので、be動詞の中でもareが入ります。',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( to / the / walking / library / am / now / I ) .',
    a: 'to',
    b: 'the',
    c: 'walking',
    d: "library",
    explanation: 'I am walking to the library now.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( father / teaching / is / your / Japanese ) ?',
    a: 'father',
    b: 'teaching',
    c: 'is',
    d: "your",
    explanation: 'Is your father teaching Japanese?\nが正しい文章です。',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nIs Yumi cleaning her room now?',
    a: 'Yes, she does.',
    b: "No, she isn't.",
    c: 'Yes, she doing.',
    d: "No, she doesn't.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWho is playing the guitar now?',
    a: 'Tom is.',
    b: "My brother does.",
    c: "I'm playing the piano.",
    d: "Of course.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。\n疑問詞としてwhoが使われているため、誰がギターを弾いているのかを尋ねています。',
    correct: 'a'
  },


  // 中１ 龍華 理科

  {
    check: 'G1_ryuge_SI',
    question: '光の性質として当てはまらないものを選びなさい。',
    a: '光は直進する',
    b: '光は共鳴する',
    c: '光は屈折する',
    d: '光は反射する',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '光の性質として常に成り立つものを次から選びなさい。',
    a: '入射角＝反射角',
    b: '入射角＝屈折角',
    c: '反射角＝屈折角',
    d: 'a～cに成り立つものはない。',
    explanation: 'この問題の解説\nこの性質を反射の法則と呼びます。。',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '光の反射において、光が物体にあたる角度を何というか。',
    a: '反射角',
    b: '入射角',
    c: '屈折角',
    d: '直進角',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '光が空気中から水中(ガラス中)に進み入るときどのようになるか。',
    a: '入射角＞屈折角',
    b: '入射角＜屈折角',
    c: '入射角＝屈折角',
    d: 'a～cの中に正しいものはない。',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '光において、屈折が起こらず、すべてが反射する現象を何というか。',
    a: '直進',
    b: '反射',
    c: '全反射',
    d: '回折',
    explanation: 'この問題の解説\n全反射は光が水中(ガラス中)から空気中に出るときに起こります。',
    correct: 'c'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '凸レンズを用いたとき、凸レンズを挟んで光源の反対側にできる像を何というか。',
    a: '正立虚像',
    b: '倒立虚像',
    c: '正立実像',
    d: '倒立実像',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '凸レンズを用いたとき、凸レンズを境として、光源と同じ側にできる像を何というか。',
    a: '正立虚像',
    b: '倒立虚像',
    c: '正立実像',
    d: '倒立実像',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_ryuge_SI', 
    question: '凸レンズの光軸に平行な光を当てたとき、凸レンズで屈折した光が集まる点を何というか。',
    a: '中点',
    b: '支点',
    c: '焦点',
    d: '力点',
    explanation: '',
    correct: 'c'
  }, 


  //// 中１ 大正

  // 中１ 大正 英語
  {
    check: 'G1_taisho_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n私の父は高校で数学を教えています。',
    a: 'My father teach math at high school.',
    b: 'My father teachs math at high school.',
    c: 'My father teaches math at high school.',
    d: 'My father teachers math at high school.',
    explanation: '主語が三人称単数になる場合、一般動詞の語尾にはsをつけます。\nただしteachなどのように元々の語尾がo, s, ch, sh, xの場合はesをつけます。',
    correct: 'c'
  },
  {
    check: 'G1_taisho_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nあなたのお兄さんはお母さんの手伝いをしますか。',
    a: 'Do your brother help your mother?',
    b: 'Does your brother help your mother?',
    c: 'Do your brother helps your mother?',
    d: 'Does your brother helps your mother?',
    explanation: '否定文・疑問文の場合、一般動詞の語尾のsはdoに吸われてdoesになります。\nその場合、一般動詞のsはなくなり原形になります。',
    correct: 'b'
  },
  {
    check: 'G1_taisho_E',
    question: "次の文章の和訳として最も適切なものはどれ？\nShe doesn't like math very much.",
    a: '彼女は数学が大好きです。',
    b: '彼女は数学が全然好きではありません。',
    c: '彼女は数学があまり好きではありません。',
    d: '彼女は数学を勉強したくありません',
    explanation: 'very muchは通常「とても～」と訳しますが、\n否定文のvery muchは「あまり～ではない」となることに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_taisho_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nWhat does Mr.Brown do every morning?',
    a: 'ブラウンさんは毎朝何をしますか。',
    b: '毎朝何かをしているのはブラウンさんですか。',
    c: 'ブラウンさんは毎朝何のために起きますか。',
    d: '毎朝ブラウンさんがそれをするのですか。',
    explanation: 'whatで始まっているので、何かを尋ねる文章です。\n動詞はdoなので、何をしているのか尋ねています。',
    correct: 'a'
  },
  {
    check: 'G1_taisho_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nJohn usually (＿＿＿) the piano.',
    a: 'play',
    b: 'plays',
    c: "isn't play",
    d: "isn't playing",
    explanation: '主語が三人称単数なので語尾にsがつきます。\nusuallyは習慣を表すため、現在進行形にはなりません。',
    correct: 'b'
  },
  {
    check: 'G1_taisho_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nGeorge and Edwin (＿＿＿) Japanese every day.',
    a: 'study',
    b: 'studies',
    c: "don't studies",
    d: "doesn't study",
    explanation: '主語はGeorge and Edwin（ジョージとエドウィン）、\nつまり三人称複数なので、sはつけず原形が正しいです。',
    correct: 'a'
  },
  {
    check: 'G1_taisho_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( not / speak / does / brother / English / my ) .',
    a: 'not',
    b: 'speak',
    c: 'does',
    d: "brother",
    explanation: 'My brother does not speak English.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_taisho_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( and / you / brother / know / he / your / does ) ?',
    a: 'and',
    b: 'you',
    c: 'brother',
    d: "know",
    explanation: 'Does he know you and your brother?(your brother and youでも可)\nが正しい文章です。\ndoesがあることから主語が三人称単数であること、\nもしyour brotherが主語だとするとheが目的語のhimになってしまうことなどに注意しましょう。',
    correct: 'd'
  },
  {
    check: 'G1_taisho_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nDoes Mr.Kevin open the window in his room every morning?',
    a: 'Yes, he do.',
    b: "No, he doesn't.",
    c: 'Yes, he is.',
    d: "No, he isn't.",
    explanation: 'doesで聞かれているため、doesで返答しましょう。\n',
    correct: 'b'
  },
  {
    check: 'G1_taisho_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWhat does your sister drink every morning?',
    a: 'Yes, she does.',
    b: "She drink some milk.",
    c: "She drinks a lot of coffee.",
    d: "Well, it's so clever.",
    explanation: '「あなたのお姉さんは毎朝何を飲んでいますか」と尋ねています。\n三単現のsに注意しましょう。',
    correct: 'c'
  },

  // 中１ 大正 理科

  {
    check: 'G1_taisho_SI',
    question: '食塩水の水のように、物質を溶かしている液体を何というか。',
    a: '溶質',
    b: '溶液',
    c: '溶媒',
    d: '水溶液',
    explanation: 'この問題の解説\n溶媒が水である溶液を特に、『水溶液』といいます。',
    correct: 'c'
  },
  {
    check: 'G1_taisho_SI',
    question: '食塩水の食塩のように、液体に溶けている物質を何というか。',
    a: '溶質',
    b: '溶液',
    c: '溶媒',
    d: '水溶液',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_taisho_SI',
    question: '溶液全体の質量に対する溶質の質量の割合を百分率(％)で表したものを何というか。',
    a: '溶解度曲線',
    b: '質量パーセント濃度',
    c: 'パーセント濃度',
    d: '溶解度',
    explanation: 'この問題の解説\n質量パーセント濃度の公式は溶質÷溶液×100(％)。',
    correct: 'b'
  },
  {
    check: 'G1_taisho_SI',
    question: '100ｇの水に25ｇの食塩を溶かしたとき、その濃度は何％か。',
    a: '25％',
    b: '20％',
    c: '0.25％',
    d: '0.2％',
    explanation: 'この問題の解説\n25÷125×100＝20％\n溶液が100ｇではなく、125ｇとなることに注意！',
    correct: 'b'
  },
  {
    check: 'G1_taisho_SI',
    question: '食塩水100ｇの中に25ｇの食塩が溶けているとき、溶液の濃度は何％か。',
    a: '0.2％',
    b: '20％',
    c: '0.25％',
    d: '25％',
    explanation: 'この問題の解説\n25÷100×100＝25％',
    correct: 'd'
  },
  {
    check: 'G1_taisho_SI',
    question: 'アンモニアの集めた方は次のうちどれ。',
    a: '水上置換法',
    b: '水中置換法',
    c: '下方置換法',
    d: '上方置換法',
    explanation: 'この問題の解説\n水に溶けにくい気体はすべて水上置換法です。\n水に溶けやすい気体は空気より重ければ下方置換法、空気より軽ければ上方置換法で集めます。\nただし、上方置換法で集める気体は『アンモニア』しかありません。',
    correct: 'd'
  },
  {
    check: 'G1_taisho_SI',
    question: '酸素の特徴は次のうちどれ。',
    a: 'ものが燃えるのを助けるはたらきがある。',
    b: '気体の中で最も軽い。',
    c: '石灰水を通すと白く濁る。',
    d: '火を近づけると音を立てて燃える',
    explanation: 'この問題の解説\n酸素のこのはたらきを『助燃性』といい、火のついた線香を近づけると炎を上げて燃えます。',
    correct: 'a'
  },
  {
    check: 'G1_taisho_SI',
    question: '二酸化炭素の集め方として適切でないものはどれ。',
    a: '水上置換法',
    b: '下方置換法',
    c: '上方置換法',
    d: 'a～cの中に答えはない。',
    explanation: 'この問題の解説\n二酸化炭素は水に『少し溶ける』気体なので、水上置換法でも下方置換法でも集められます。',
    correct: 'c'
  },
  {
    check: 'G1_taisho_SI',
    question: '塩素の色は次のうちどれ。',
    a: '無色',
    b: '赤色',
    c: '赤褐色',
    d: '黄緑色',
    explanation: 'この問題の解説\n塩素は数少ない有色の気体です。',
    correct: 'd'
  },
  {
    check: 'G1_taisho_SI',
    question: '次のうち、空気より軽い気体はどれ。',
    a: '酸素',
    b: 'アンモニア',
    c: '二酸化硫黄',
    d: '二酸化炭素',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_taisho_SI',
    question: '次のうち刺激臭をもつ気体はどれ。',
    a: '塩化水素',
    b: '窒素',
    c: '水素',
    d: '二酸化炭素',
    explanation: 'この問題の解説\nこの他に塩素・アンモニア(刺激臭)、二酸化硫黄(腐卵臭)なども特有のにおいを持つ気体です。。',
    correct: 'a'
  },
  {
    check: 'G1_taisho_SI',
    question: '酸素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n過酸化水素水は、オキシドールでも正解です。',
    correct: 'a'
  },
  {
    check: 'G1_taisho_SI',
    question: '水素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n金属片は、亜鉛や鉄、アルミニウムなどでも正解です。',
    correct: 'b'
  },
  {
    check: 'G1_taisho_SI',
    question: '二酸化炭素の製法は次のうちどれ。',
    a: '二酸化マンガン＋過酸化水素水',
    b: '金属片＋うすい塩酸',
    c: '石灰石＋うすい塩酸',
    d: '水酸化カルシウム＋塩化アンモニウム',
    explanation: 'この問題の解説\n石灰水は、炭酸カルシウムや貝殻などでも正解です。',
    correct: 'c'
  },

  // 中１ 曙南 英語

  {
    check: 'G1_akenan_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n私の父は高校で数学を教えています。',
    a: 'My father teach math at high school.',
    b: 'My father teachs math at high school.',
    c: 'My father teaches math at high school.',
    d: 'My father teachers math at high school.',
    explanation: '主語が三人称単数になる場合、一般動詞の語尾にはsをつけます。\nただしteachなどのように元々の語尾がo, s, ch, sh, xの場合はesをつけます。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nあなたのお兄さんはお母さんの手伝いをしますか。',
    a: 'Do your brother help your mother?',
    b: 'Does your brother help your mother?',
    c: 'Do your brother helps your mother?',
    d: 'Does your brother helps your mother?',
    explanation: '否定文・疑問文の場合、一般動詞の語尾のsはdoに吸われてdoesになります。\nその場合、一般動詞のsはなくなり原形になります。',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: "次の文章の和訳として最も適切なものはどれ？\nShe doesn't like math very much.",
    a: '彼女は数学が大好きです。',
    b: '彼女は数学が全然好きではありません。',
    c: '彼女は数学があまり好きではありません。',
    d: '彼女は数学を勉強したくありません',
    explanation: 'very muchは通常「とても～」と訳しますが、\n否定文のvery muchは「あまり～ではない」となることに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nWhat does Mr.Brown do every morning?',
    a: 'ブラウンさんは毎朝何をしますか。',
    b: '毎朝何かをしているのはブラウンさんですか。',
    c: 'ブラウンさんは毎朝何のために起きますか。',
    d: '毎朝ブラウンさんがそれをするのですか。',
    explanation: 'whatで始まっているので、何かを尋ねる文章です。\n動詞はdoなので、何をしているのか尋ねています。',
    correct: 'a'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nJohn usually (＿＿＿) the piano.',
    a: 'play',
    b: 'plays',
    c: "isn't play",
    d: "isn't playing",
    explanation: '主語が三人称単数なので語尾にsがつきます。\nusuallyは習慣を表すため、現在進行形にはなりません。',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nGeorge and Edwin (＿＿＿) Japanese every day.',
    a: 'study',
    b: 'studies',
    c: "don't studies",
    d: "doesn't study",
    explanation: '主語はGeorge and Edwin（ジョージとエドウィン）、\nつまり三人称複数なので、sはつけず原形が正しいです。',
    correct: 'a'
  },
  {
    check: 'G1_akenan_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( not / speak / does / brother / English / my ) .',
    a: 'not',
    b: 'speak',
    c: 'does',
    d: "brother",
    explanation: 'My brother does not speak English.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( and / you / brother / know / he / your / does ) ?',
    a: 'and',
    b: 'you',
    c: 'brother',
    d: "know",
    explanation: 'Does he know you and your brother?(your brother and youでも可)\nが正しい文章です。\ndoesがあることから主語が三人称単数であること、\nもしyour brotherが主語だとするとheが目的語のhimになってしまうことなどに注意しましょう。',
    correct: 'd'
  },
  {
    check: 'G1_akenan_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nDoes Mr.Kevin open the window in his room every morning?',
    a: 'Yes, he do.',
    b: "No, he doesn't.",
    c: 'Yes, he is.',
    d: "No, he isn't.",
    explanation: 'doesで聞かれているため、doesで返答しましょう。\n',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWhat does your sister drink every morning?',
    a: 'Yes, she does.',
    b: "She drink some milk.",
    c: "She drinks a lot of coffee.",
    d: "Well, it's so clever.",
    explanation: '「あなたのお姉さんは毎朝何を飲んでいますか」と尋ねています。\n三単現のsに注意しましょう。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の英訳として最も適切なものはどれ？\n彼は本を読んでいるところです。',
    a: 'He reads a book.',
    b: 'He reading a book.',
    c: 'He is read a book.',
    d: 'He is reading a book.',
    explanation: '現在進行形の基本は「be動詞 ＋ ～ing」です。\n「読んでいるところ」は「is reading」になります。',
    correct: 'd'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の英訳として最も適切なものはどれ？\nメアリーは今宿題をしていますか。',
    a: 'Do Mary doing her homework now?',
    b: 'Does Mary do her homework now?',
    c: 'Is Mary do her homework now?',
    d: 'Is Mary doing her homework now?',
    explanation: '現在進行形を疑問文にする場合は、be動詞を最初に持ってきます。',
    correct: 'd'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nTom is talking about his father now.',
    a: 'トムは今、彼のお父さんの話を聞いているところです。',
    b: 'トムは今、彼にお父さんの話をしているところです。',
    c: 'トムは今、彼のお父さんに話を聞いたところです。',
    d: 'トムは今、彼のお父さんの話をしているところです。',
    explanation: 'is talkingはtalk（話す）の現在進行形なので、\n「話しているところです」になります。',
    correct: 'd'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の和訳として最も適切なものはどれ？\nMr.Smith is not listening to music now.',
    a: 'スミスさんは今、音楽を聞いているところです。',
    b: 'スミスさんは今、音楽を聞いているところではありません。',
    c: 'スミスさんは今から音楽を聞きません。',
    d: 'スミスさん以外の人は今、音楽を聞いているところです。',
    explanation: 'is not listeningはlisten（聞く）の現在進行形の否定なので、\n「聞いているところではない」になります。',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nWe are (＿＿＿) video games.',
    a: 'not playing',
    b: 'playing not',
    c: 'play not',
    d: 'play with',
    explanation: 'be動詞のあとなので、～ingの形が入ります。\n否定文の場合、その前にnotを入れるので、適切なものは「not playing」です。',
    correct: 'a'
  },
  {
    check: 'G1_akenan_E',
    question: '次の文章の空欄にあてはまるものとして最も適切なものはどれ？\nMany fishes (＿＿＿) swimming in the sea.',
    a: 'is',
    b: 'are',
    c: 'not',
    d: "don't",
    explanation: 'Many fishesは複数形で、後ろが～ing形なので、be動詞の中でもareが入ります。',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( to / the / walking / library / am / now / I ) .',
    a: 'to',
    b: 'the',
    c: 'walking',
    d: "library",
    explanation: 'I am walking to the library now.\nが正しい文章です。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_E',
    question: '次の単語を意味が通る順番に並べ替えるとき、3番目に来る単語はどれ？\n( father / teaching / is / your / Japanese ) ?',
    a: 'father',
    b: 'teaching',
    c: 'is',
    d: "your",
    explanation: 'Is your father teaching Japanese?\nが正しい文章です。',
    correct: 'a'
  },
  {
    check: 'G1_akenan_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nIs Yumi cleaning her room now?',
    a: 'Yes, she does.',
    b: "No, she isn't.",
    c: 'Yes, she doing.',
    d: "No, she doesn't.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。',
    correct: 'b'
  },
  {
    check: 'G1_akenan_E',
    question: '次の質問文の返答として最も適切なものはどれ？\nWho is playing the guitar now?',
    a: 'Tom is.',
    b: "My brother does.",
    c: "I'm playing the piano.",
    d: "Of course.",
    explanation: '現在進行形の疑問文はbe動詞を用いて答えます。\n疑問詞としてwhoが使われているため、誰がギターを弾いているのかを尋ねています。',
    correct: 'a'
  },


  // 中１ 曙南 理科

  {
    check: 'G1_akenan_SI',
    question: '光の性質として当てはまらないものを選びなさい。',
    a: '光は直進する',
    b: '光は共鳴する',
    c: '光は屈折する',
    d: '光は反射する',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_akenan_SI', 
    question: '光の性質として常に成り立つものを次から選びなさい。',
    a: '入射角＝反射角',
    b: '入射角＝屈折角',
    c: '反射角＝屈折角',
    d: 'a～cに成り立つものはない。',
    explanation: 'この問題の解説\nこの性質を反射の法則と呼びます。。',
    correct: 'a'
  },
  {
    check: 'G1_akenan_SI', 
    question: '光の反射において、光が物体にあたる角度を何というか。',
    a: '反射角',
    b: '入射角',
    c: '屈折角',
    d: '直進角',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G1_akenan_SI', 
    question: '光が空気中から水中(ガラス中)に進み入るときどのようになるか。',
    a: '入射角＞屈折角',
    b: '入射角＜屈折角',
    c: '入射角＝屈折角',
    d: 'a～cの中に正しいものはない。',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_akenan_SI', 
    question: '光において、屈折が起こらず、すべてが反射する現象を何というか。',
    a: '直進',
    b: '反射',
    c: '全反射',
    d: '回折',
    explanation: 'この問題の解説\n全反射は光が水中(ガラス中)から空気中に出るときに起こります。',
    correct: 'c'
  },
  {
    check: 'G1_akenan_SI', 
    question: '凸レンズを用いたとき、凸レンズを挟んで光源の反対側にできる像を何というか。',
    a: '正立虚像',
    b: '倒立虚像',
    c: '正立実像',
    d: '倒立実像',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G1_akenan_SI', 
    question: '凸レンズを用いたとき、凸レンズを境として、光源と同じ側にできる像を何というか。',
    a: '正立虚像',
    b: '倒立虚像',
    c: '正立実像',
    d: '倒立実像',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G1_akenan_SI', 
    question: '凸レンズの光軸に平行な光を当てたとき、凸レンズで屈折した光が集まる点を何というか。',
    a: '中点',
    b: '支点',
    c: '焦点',
    d: '力点',
    explanation: '',
    correct: 'c'
  }, 


  ////// 中２

  // 中２ 亀井

  // 中２ 亀井 英語

  {
    check: 'G2_kamei_E',
    question:'「私は彼に財布をあげるでしょう。」\n正しい英文を選べ。',
    a:'I will give a wallet him.',
    b:'I will gave a wallet to him.',
    c:'I will give him a wallet.',
    d:'I will give him to a wallet.',
    explanation:'答え：c\n解説：giveやshowなどの動詞は人・物の順番で２つ目的語を取る。',
    correct:'c'
  },
  {
    check: 'G2_kamei_E',
    question:'「私たちは彼をトムと呼びます。」\n正しい英文を選べ。',
    a:'We call him Tom.',
    b:'We call him to Tom.',
    c:'We call Tom him.',
    d:'We call him for Tom.',
    explanation:'答え:a\n解説：callやnameなどの動詞は、後ろに名前や名称が来る。',
    correct:'a'
  },
  {
    check: 'G2_kamei_E',
    question:'「そのニュースは私を幸せにした。」\n正しい英文を選べ。',
    a:'The news make me happy.',
    b:'Tne news made me happy.',
    c:'The news make happy me.',
    d:'The news made happy me.',
    explanation:'答え:b\n解説：make A Bで「AをBさせる」という意味になりAには人・Bには形容詞がくる事が多い。今回は過去形の文章なのでmadeを使う。',
    correct:'b'
  },
  {
    check: 'G2_kamei_E',
    question:'「彼は生徒たちに数学を教えます。」\n正しい英文を選べ。',
    a:'He teaches math to his students.',
    b:'He teaches math for his students.',
    c:'He taught math his students math.',
    d:'He teaches math his students to math.',
    explanation:'答え：a\n解説：相手が必要な動作ならto、一人でできる動作ならfor を使う。今回のteachは相手がいないと教えることできないのでtoを使う。',
    correct:'a'
  },
  {
    check: 'G2_kamei_E',
    question:' 私は彼に時計を買った。',
    a:'I buy him a watch.',
    b:'I bought a watch to him.',
    c:'I buy a watch to him.',
    d:'I bought a watch for him.',
    explanation:'答え：d\n解説：「彼に買った」と人がいるが買う動作は1人で出来るのでforを使う。',
    correct:'d'
  },
  {
    check: 'G2_kamei_E',
    question:'「私は宿題をしなければならない」正しい英文を選べ。',
    a:'I must do my homework.',
    b:'I must did my homework.',
    c:'I must does my homework.',
    d:'I must doing my homework.',
    explanation:'答え:a\n解説：助動詞の後ろの動詞は絶対に動詞の原形',
    correct:'a'
  },
  {
    check: 'G2_kamei_E',
    question:'あなたは学校へ行く必要はない。',
    a:'You must not go to school.',
    b:"You didn't have to go to school.",
    c:"You don't have to go to school.",
    d:"You doesn't have to go to school.",
    explanation:"答え:c\n解説：don't have to「～する必要がない」must notは「～してはいけない」と禁止の意味を表す。",
    correct:'c'
  },
  {
    check: 'G2_kamei_E',
    question:'My car is older than yours.正しい和訳を選べ。',
    a:'私の車はあなたのよりも最も古い。',
    b:'私の車はあなたのよりも古い。',
    c:'あなたの車は私のよりも古い。',
    d:'あなたの車はの私よりも古くはない。',
    explanation:'答え:b\n解説：比較級の形は形容詞にerを付けて、「～よりも」の意味のthanを後ろに付ける。',
    correct:'b'
  },
  {
    check: 'G2_kamei_E',
    question:'「大阪と東京はどちらが暑いですか？」Which is (    ), Osaka or Tokyo?\n(    )に入るのはどれか正しいのを選べ。',
    a:'hot',
    b:'hoter',
    c:'hotter',
    d:'hotting',
    explanation:'答え:c\n解説：短母音（小文字）が含まれている単語はerの前の単語を重ねる。\n例：hotter・biggerなど',
    correct:'c'
  },
  {
    check: 'G2_kamei_E',
    question:'「この犬はあの犬よりで可愛い。」正しい英文を選べ。',
    a:'This dog is prettier than that one.',
    b:'This dog is prettier than that it',
    c:'This dog is prettyer than that one.',
    d:'This dog is prettyer than that it.',
    explanation:'答え:a\n解説：yの前が子音で終わる形容詞の比較級はyをiに変えてerを付ける。\n代名詞はitでは「全く同じ物」になってしまうので、「種類」が同じのoneを使う。',
    correct:'a'
  },
  {
    check: 'G2_kamei_E',
    question:'「彼は家族の中でいちばん若い。」正しい英文を選べ。',
    a:'He is youngest in his family.',
    b:'He is youngest at his family.',
    c:'He is the youngest in his family.',
    d:'He is the youngest at his family.',
    explanation:'答え:c\n解説：最上級は形容詞にestを付けて、付け方はerと同じ。\nthe 最上級 in(of)の形なのでtheの置き忘れに注意。\inは「範囲」の時に使い、ofは「数」の時使う。allは「of」を使うので注意。',
    correct:'c'
  },
  {
    check: 'G2_kamei_E',
    question:'「日本語は英語よりも難しい。」正しい英文を選べ。',
    a:'Japanese is difficulter than English.',
    b:'Japanese is more difficulter than English.',
    c:'Japanese is difficult than English.',
    d:'Japanese is more difficult than English.',
    explanation:'答え:d\n解説：6文字以上かつ母音が3つ以上の形容詞の比較級は、前にmoreを付けて形容詞の形はそのままにする。',
    correct:'d'
  },
  {
    check: 'G2_kamei_E',
    question:'「これは世界で最も美しい湖です。」',
    a:'This is the most beautiful lake of the world.',
    b:'This is the most beautiful lake in the world.',
    c:'This is most beautiful lake in the world.',
    d:'This is most beautiful lake of the world.',
    explanation:'答え:b\n解説：6文字以上かつ母音が3つ以上の形容詞の最上級は、theと最上級の形容詞の間にmostを付けて形容詞の形はそのままにする。',
    correct:'b'
  },

  // 中２ 亀井 理科
  // {
  //   check: 'G2_kamei_SI',
  //   question: '次の式は硫酸酸性条件下での過マンガン酸カリウムと硫化鉄（Ⅱ）の酸化還元反応の化学反応式です。\n①②③にあてはまる数字の組み合わせとして正しいものを選びなさい。\nただし式中の(SO₄)₃は、S1個とO4個が結合した分子のパーツが3組あることを表します。\n①KMnO₄ ＋ 10FeSO₄ ＋ 8H₂SO₄ → 2MnSO₄ ＋ ②Fe₂(SO₄)₃ ＋ ③H₂O ＋ K₂SO₄',
  //   a: '①：2　②：5　③：8',
  //   b: '①：2　②：7　③：4',
  //   c: '①：3　②：5　③：4',
  //   d: '①：3　②：7　③：8',
  //   explanation: '一見非常に難しい化学反応式ですが、化学変化の前後で原子の数は変わりません。\n①はKやMnの、②はFeの、③はHの数に注目してみましょう。\n正しい式は2KMnO₄ ＋ 10FeSO₄ ＋ 8H₂SO₄ → 2MnSO₄ ＋ 5Fe₂(SO₄)₃ ＋ 8H₂O ＋ K₂SO₄となります。',
  //   correct: 'a'
  // },

  {
    check: 'G2_kamei_SI',
    question: '次のうちHはどれ？',
    a: '水素',
    b: '酸素',
    c: '炭素',
    d: '窒素',
    explanation: '水素はH、酸素はO、炭素はC、窒素はNです。',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうちCuはどれ？',
    a: '金',
    b: '銀',
    c: '銅',
    d: '鉄',
    explanation: '金はAu、銀はAg、銅はCu、鉄はFeです。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうちCO₂はどれ？',
    a: 'アンモニア',
    b: '二酸化炭素',
    c: '水',
    d: '炭酸カルシウム',
    explanation: 'CO₂は酸素（O）が2つと炭素（C）が1つ\nつまり「二酸化炭素」になります。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうち硫黄の化学式はどれ？',
    a: 'Si',
    b: 'P',
    c: 'S',
    d: 'Cl',
    explanation: '硫黄はSです。\nSiはケイ素、Pはリン、Clは塩素の化学式です。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうちナトリウムの化学式はどれ？',
    a: 'Mg',
    b: 'Na',
    c: 'Ca',
    d: 'Fe',
    explanation: 'ナトリウムは「Na」なので答えはbです。\n「Mg」はマグネシウム、「Ca」はカルシウム、「Fe」は鉄の化学式です。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうち水の化学式はどれ？',
    a: 'NaOH',
    b: 'CH₄',
    c: 'CuO',
    d: 'H₂O',
    explanation: '水は「H₂O」なので答えはdです。\n「NaOH」は水酸化ナトリウム、「CH₄」はメタン、「CuO」は酸化銅の化学式です。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうちN₂の性質として正しいのはどれ？',
    a: '火を近づけると音を立てて燃える',
    b: '空気中に約78％含まれる',
    c: 'これが含まれた物質を有機物と呼ぶ',
    d: '常温で液体である',
    explanation: '空気は窒素（N₂）が約78％、酸素（O₂）が約21％含まれています。\n有機物は炭素・水素を含む物質のことです。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうち化合物はどれ？',
    a: 'アルゴン',
    b: 'マグネシウム',
    c: 'アンモニア',
    d: '水銀',
    explanation: '2種類以上の原子が結びついてできたものを化合物といいます。\nアンモニアの化学式はNH₃で、これだけが化合物です。\nアルゴンはAr、マグネシウムはMg、水銀はHgで、それぞれ化合物ではありません。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうち、水の電気分解の式として正しいものはどれ？',
    a: '2H₂ ＋ O₂ → 2H₂O',
    b: '2H₂O → 2H₂ ＋ O₂',
    c: 'H₂O → H₂ ＋ O',
    d: 'H₂O → H₂ ＋ O₂',
    explanation: '原子は化学変化の前後で数が増えたり減ったりしません。\n左右の原子の数が同じものを選びましょう。\n「2H₂O → 2H₂ ＋ O₂」が正解です。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SI',
    question: '多くの金属の性質として正しくないものはどれ？',
    a: '磁石に引かれる',
    b: '電気をよく通す',
    c: '熱をよく通す',
    d: '叩くと広がる',
    explanation: '磁石に引かれるのは鉄、ニッケル、コバルトなど一部の金属だけです。\nそれ以外はほとんどの金属の性質です。',
    correct: 'a'
  }, 
  {
    check: 'G2_kamei_SI',
    question: '塩化アンモニウムと水酸化バリウムの反応のように、温度が下がる反応を何という？',
    a: '低温反応',
    b: '冷却反応',
    c: '昇華反応',
    d: '吸熱反応',
    explanation: '温度が下がる反応を「吸熱反応」といいます。\n逆に温度が上がる反応は「発熱反応」です。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SI',
    question: '化学反応の前後で、反応にかかわる物質の重さの合計が変わらない法則を何という？',
    a: '質量保存の法則',
    b: '定比例の法則',
    c: 'エネルギー保存の法則',
    d: '質量不変の法則',
    explanation: '正解は「質量保存の法則」です。',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SI',
    question: '酸化に関する説明として適切でないものはどれ？',
    a: '酸化とは物質と酸素が結びつく反応のことである',
    b: '燃焼とは光と熱を出しながら激しく進む酸化のことである',
    c: '酸化の速度は温度が高いほど遅くなる',
    d: '水素が燃焼すると水になる',
    explanation: '酸化は温度が高いほど速くなります。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SI',
    question: '次のうち、還元反応はどれ？',
    a: '2CuO ＋ C → 2Cu ＋ CO₂',
    b: '2Mg ＋ O₂ → 2MgO',
    c: 'C₃H₈ ＋ 5O₂ → 3CO₂ ＋ 4H₂O',
    d: '2HCl → H₂ ＋ Cl₂',
    explanation: '還元反応とは物質から酸素を取り除く反応のことです。\n酸素が含まれる化合物から酸素が取り除かれている反応を選びましょう。',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SI',
    question: '銅の酸化反応において、反応する銅と酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: '銅と酸素は4:1の質量比で反応します。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SI',
    question: 'マグネシウムの酸化反応において、反応するマグネシウムと酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: 'マグネシウムと酸素は3:2の質量比で反応します。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SI',
    question: '銅4.0gと過不足なく反応する酸素の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅4.0gと反応する酸素は1.0gです。',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SI',
    question: '酸素4.0gと過不足なく反応する銅の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素4.0gと反応する銅は16.0gです。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SI',
    question: '銅2.0gを十分な量の酸素と完全に反応させたときにできる酸化銅の質量は？',
    a: '2.0g',
    b: '2.5g',
    c: '10.0g',
    d: '20.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅2.0gと反応する酸素は0.5gです。\nよって反応でできる酸化銅の質量は2.5gです。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SI',
    question: '密閉した容器の中に銅10.0gと酸素2.0gを入れて完全に反応させたとき、反応後に容器の中にあるものは？',
    a: '酸化銅12.0g',
    b: '酸素1.5gと酸化銅10.5g',
    c: '銅2.0gと酸化銅10.0g',
    d: '銅8.0gと酸化銅4.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素2.0gと反応する銅は8.0gです。\nよって酸化銅が10.0gでき、反応しなかった銅2.0gが残ります。',
    correct: 'c'
  },

  // 中２ 亀井 社会
  {
    check: 'G2_kamei_SS',
    question: '第１問\n火山活動によって、山の頂上が円形に陥没しており、スペイン語で「なべ」を意味する地形を何というか？',
    a: 'カラス',
    b: 'シラス',
    c: 'カルデラ',
    d: 'ベホイミ',
    explanation: 'この問題の解説\n答え：c\n阿蘇山や富士山などにみられ、\n阿蘇山のカルデラは世界最大級です。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SS',
    question: '第２問\n長崎県と熊本県の間に位置し、筑後川などの河川が運んだ土砂でできた干潟が広がる海を何という？',
    a: '瀬戸内海',
    b: '有明海',
    c: '東シナ海',
    d: 'オホーツク海',
    explanation: 'この問題の解説\n答え：b\nのりの養殖が有名です！\naは中国地方と四国地方の間\ncは朝鮮半島と九州の間\ndは北海道の北側です！',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SS',
    question: '第３問\n九州は冬には日本海側で降雪がみられるが、この原因となる季節によって吹く向きの変わる風を何という？',
    a: 'からっ風',
    b: '季節風',
    c: 'やませ',
    d: 'ピカチュウ',
    explanation: 'この問題の解説\n答え：b\n冬には北西から、夏には南東から吹き、\nモンスーンとも呼ばれます。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SS',
    question: '第４問\n沖縄県は日本の一部になる前、何という国でしたか？',
    a: '琉球王国',
    b: '対馬',
    c: 'パイナップル王国',
    d: 'The さとうきび',
    explanation: 'この問題の解説\n答え：a\n戦後、1972年にアメリカから日本に返還され、\n今年で50年目です！',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SS',
    question: '第５問\n自然豊かな沖縄で、岩や植物のように見える海底で生きる動物は？',
    a: 'ゼニガメ',
    b: 'ウミガメ',
    c: '子ガメ',
    d: 'サンゴ礁',
    explanation: 'この問題の解説\n答え：d\nこれは間違えようがないですね！(笑)',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SS',
    question: '第６問\n沖縄県には、日本にあるアメリカ軍基地の面積の約何分の何が集中していますか？',
    a: '２分の１',
    b: '３分の１',
    c: '３分の２',
    d: '４分の３',
    explanation: 'この問題の解説\n答え：d\nこれは難問です！\n教科書165ページに載っているので、細かいところまでcheck！',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SS',
    question: '第７問\n桜島付近では、火山灰が積もってできた地形がみられるが、何台地？',
    a: '牧ノ原台地',
    b: 'シラス台地',
    c: 'メガ台地',
    d: 'つぼみ台地',
    explanation: 'この問題の解説\n答え：b\nこれは難問です！\naの牧ノ原台地はお茶の生産がさかんな静岡県の台地です。',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SS',
    question: '第８問\n九州には火山が多く、温泉水や地熱を利用した発電を何という？',
    a: '足湯発電',
    b: '火力発電',
    c: '水力発電',
    d: '地熱発電',
    explanation: 'この問題の解説\n答え：d\n火山の熱を利用した発電方法で、\n環境にやさしい発電方法なので持続可能な社会のために注目されています。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SS',
    question: '第９問\n土砂災害や津波など、地域の危険度をあらかじめ住民に知らせる地図は？',
    a: 'ハザードマップ',
    b: 'バイオハザード',
    c: 'グランドライン',
    d: 'カーナビ',
    explanation: 'この問題の解説\n答え：a\nこれは・・・楽勝！',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１０問\n九州では、畜産業が盛んですが、飼育頭数が多い順に、１位：鹿児島、２位：宮崎である家畜は何？',
    a: '豚',
    b: 'にわとり',
    c: '肉用牛',
    d: 'ダチョウ俱楽部',
    explanation: 'この問題の解説\n答え：a\nbのにわとりは、１位が宮崎、\ncの肉用牛は、１位が北海道です！\ncは・・・お笑いグループです！',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１１問\n家畜のふん尿やたい肥をエネルギーとして利用する循環型農業への取り組みが進められているが、このようなエネルギーを何という？',
    a: 'うんちエネルギー',
    b: '循環型エネルギー',
    c: 'バイオマスエネルギー',
    d: 'リサイクルエネルギー',
    explanation: 'この問題の解説\n答え：c\nバイオマスとは、生物を表す「バイオ」と、\nまとまった量を意味する「マス」を合成してつくられた言葉です。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１２問\nコンピューターなどに使用される様々な機能を持たせた電子回路を何という？',
    a: 'キーボード',
    b: 'ホッカイロ',
    c: '思考回路',
    d: '集積回路',
    explanation: 'この問題の解説\n答え：d\n集積回路をICとも呼びます。\nパソコンや携帯、ゲームなどの中に入っています。',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１３問\n電子部品産業が盛んなことから、九州は何アイランドと呼ばれる？',
    a: 'ヨッシーアイランド',
    b: '明太子アイランド',
    c: 'ジャパンアイランド',
    d: 'シリコンアイランド',
    explanation: 'この問題の解説\n答え：d\nアメリカの西海岸、シリコンバレーに由来しています！',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１４問\n中国・四国地方を３つの地方に分けると、中国山地より北側を何という？',
    a: '山陽',
    b: '山陰',
    c: '太陽',
    d: 'サンベルト',
    explanation: 'この問題の解説\n答え：b\n中国山地のせいで、東から昇るお日さんの陰になってしまうという由来ですね！',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１５問\n中国・四国地方では多くの人々が大都市に流出することにより、病院やバスなど、社会活動を維持することが難しい問題を抱えています。この社会問題を何という？',
    a: '田舎化',
    b: '少子化',
    c: '過疎',
    d: '過密',
    explanation: 'この問題の解説\n答え：c\ndの過密は、逆に人口が集中しすぎることですね！！',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１６問\n宮崎平野や高知平野などで盛んな、ビニールハウスを利用して、出荷時期を早める栽培方法を何という？',
    a: '促成栽培',
    b: '抑制栽培',
    c: '高冷地栽培',
    d: '室内栽培',
    explanation: 'この問題の解説\n答え：a\nbの抑制栽培は、涼しい気候を利用して、出荷時期を遅らせる方法ですね！',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１７問\n広島市が1980年に全国で10番目に指定された、人口が50万人以上の都市のことを何という？',
    a: '大都市',
    b: '中心都市',
    c: '政令指定都市',
    d: '記念都市',
    explanation: 'この問題の解説\n答え：c\n他にも広島は、平和記念都市！\n中枢都市（人口が多くその地方の中心的な役割を果たしている都市）にも指定されています。',
    correct: 'c'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１８問\n宮崎平野や高知平野などで盛んな、ビニールハウスを利用して、出荷時期を早める栽培方法を何という？',
    a: '促成栽培',
    b: '抑制栽培',
    c: '高冷地栽培',
    d: '室内栽培',
    explanation: 'この問題の解説\n答え：a\nbの抑制栽培は、涼しい気候を利用して、出荷時期を遅らせる方法ですね！',
    correct: 'a'
  },
  {
    check: 'G2_kamei_SS',
    question: '第１９問\n本州と淡路島を結ぶ橋を何という？',
    a: '瀬戸大橋',
    b: '明石海峡大橋',
    c: 'しまなみ海道',
    d: 'レインボーブリッジ',
    explanation: 'この問題の解説\n答え：b\naの瀬戸大橋は、岡山県と香川県を結ぶ橋、\ncのしまなみ海道は愛媛県と広島県を結ぶ橋、\ndのレインボーブリッジは東京ですね！',
    correct: 'b'
  },
  {
    check: 'G2_kamei_SS',
    question: '第２０問\n岡山県倉敷市の水島地区では、海岸沿いにパイプでつながった工場が並んでいます。この工場地帯をを何という？',
    a: 'サンベルト',
    b: '中小工場',
    c: '石油化学コンビナート',
    d: 'マクドナルド',
    explanation: 'この問題の解説\n答え：c\naのサンベルトは、アメリカの北緯37°以南の工業が発達した地域ですね！',
    correct: 'c'
  },


  // 中２ 龍華

  // 中２ 龍華 英語

  {
    check: 'G2_ryuge_E',
    question:'「私は彼に財布をあげるでしょう。」\n正しい英文を選べ。',
    a:'I will give a wallet him.',
    b:'I will gave a wallet to him.',
    c:'I will give him a wallet.',
    d:'I will give him to a wallet.',
    explanation:'答え：c\n解説：giveやshowなどの動詞は人・物の順番で２つ目的語を取る。',
    correct:'c'
  },
  {
    check: 'G2_ryuge_E',
    question:'「私たちは彼をトムと呼びます。」\n正しい英文を選べ。',
    a:'We call him Tom.',
    b:'We call him to Tom.',
    c:'We call Tom him.',
    d:'We call him for Tom.',
    explanation:'答え:a\n解説：callやnameなどの動詞は、後ろに名前や名称が来る。',
    correct:'a'
  },
  {
    check: 'G2_ryuge_E',
    question:'「そのニュースは私を幸せにした。」\n正しい英文を選べ。',
    a:'The news make me happy.',
    b:'Tne news made me happy.',
    c:'The news make happy me.',
    d:'The news made happy me.',
    explanation:'答え:b\n解説：make A Bで「AをBさせる」という意味になりAには人・Bには形容詞がくる事が多い。今回は過去形の文章なのでmadeを使う。',
    correct:'b'
  },
  {
    check: 'G2_ryuge_E',
    question:'「彼は生徒たちに数学を教えます。」\n正しい英文を選べ。',
    a:'He teaches math to his students.',
    b:'He teaches math for his students.',
    c:'He taught math his students math.',
    d:'He teaches math his students to math.',
    explanation:'答え：a\n解説：相手が必要な動作ならto、一人でできる動作ならfor を使う。今回のteachは相手がいないと教えることできないのでtoを使う。',
    correct:'a'
  },
  {
    check: 'G2_ryuge_E',
    question:' 私は彼に時計を買った。',
    a:'I buy him a watch.',
    b:'I bought a watch to him.',
    c:'I buy a watch to him.',
    d:'I bought a watch for him.',
    explanation:'答え：d\n解説：「彼に買った」と人がいるが買う動作は1人で出来るのでforを使う。',
    correct:'d'
  },
  {
    check: 'G2_ryuge_E',
    question:'「私は宿題をしなければならない」正しい英文を選べ。',
    a:'I must do my homework.',
    b:'I must did my homework.',
    c:'I must does my homework.',
    d:'I must doing my homework.',
    explanation:'答え:a\n解説：助動詞の後ろの動詞は絶対に動詞の原形',
    correct:'a'
  },
  {
    check: 'G2_ryuge_E',
    question:'あなたは学校へ行く必要はない。',
    a:'You must not go to school.',
    b:"You didn't have to go to school.",
    c:"You don't have to go to school.",
    d:"You doesn't have to go to school.",
    explanation:"答え:c\n解説：don't have to「～する必要がない」must notは「～してはいけない」と禁止の意味を表す。",
    correct:'c'
  },
  {
    check: 'G2_ryuge_E',
    question:'My car is older than yours.正しい和訳を選べ。',
    a:'私の車はあなたのよりも最も古い。',
    b:'私の車はあなたのよりも古い。',
    c:'あなたの車は私のよりも古い。',
    d:'あなたの車はの私よりも古くはない。',
    explanation:'答え:b\n解説：比較級の形は形容詞にerを付けて、「～よりも」の意味のthanを後ろに付ける。',
    correct:'b'
  },
  {
    check: 'G2_ryuge_E',
    question:'「大阪と東京はどちらが暑いですか？」Which is (    ), Osaka or Tokyo?\n(    )に入るのはどれか正しいのを選べ。',
    a:'hot',
    b:'hoter',
    c:'hotter',
    d:'hotting',
    explanation:'答え:c\n解説：短母音（小文字）が含まれている単語はerの前の単語を重ねる。\n例：hotter・biggerなど',
    correct:'c'
  },
  {
    check: 'G2_ryuge_E',
    question:'「この犬はあの犬よりで可愛い。」正しい英文を選べ。',
    a:'This dog is prettier than that one.',
    b:'This dog is prettier than that it',
    c:'This dog is prettyer than that one.',
    d:'This dog is prettyer than that it.',
    explanation:'答え:a\n解説：yの前が子音で終わる形容詞の比較級はyをiに変えてerを付ける。\n代名詞はitでは「全く同じ物」になってしまうので、「種類」が同じのoneを使う。',
    correct:'a'
  },
  {
    check: 'G2_ryuge_E',
    question:'「彼は家族の中でいちばん若い。」正しい英文を選べ。',
    a:'He is youngest in his family.',
    b:'He is youngest at his family.',
    c:'He is the youngest in his family.',
    d:'He is the youngest at his family.',
    explanation:'答え:c\n解説：最上級は形容詞にestを付けて、付け方はerと同じ。\nthe 最上級 in(of)の形なのでtheの置き忘れに注意。\inは「範囲」の時に使い、ofは「数」の時使う。allは「of」を使うので注意。',
    correct:'c'
  },
  {
    check: 'G2_ryuge_E',
    question:'「日本語は英語よりも難しい。」正しい英文を選べ。',
    a:'Japanese is difficulter than English.',
    b:'Japanese is more difficulter than English.',
    c:'Japanese is difficult than English.',
    d:'Japanese is more difficult than English.',
    explanation:'答え:d\n解説：6文字以上かつ母音が3つ以上の形容詞の比較級は、前にmoreを付けて形容詞の形はそのままにする。',
    correct:'d'
  },
  {
    check: 'G2_ryuge_E',
    question:'「これは世界で最も美しい湖です。」',
    a:'This is the most beautiful lake of the world.',
    b:'This is the most beautiful lake in the world.',
    c:'This is most beautiful lake in the world.',
    d:'This is most beautiful lake of the world.',
    explanation:'答え:b\n解説：6文字以上かつ母音が3つ以上の形容詞の最上級は、theと最上級の形容詞の間にmostを付けて形容詞の形はそのままにする。',
    correct:'b'
  },
  {
    check: 'G2_ryuge_E',
    question:'My cat is as cute as yours.正しい和訳を選べ。',
    a:'私のネコはあなたのネコと同じくらい可愛いです。',
    b:'私のネコはあなたのネコよりも可愛いです。',
    c:'私のネコとあなたのネコは同じくらい可愛いです。',
    d:'私のネコとあなたのネコの可愛さは同じくらいです。',
    explanation:'答え:a\n解説：as …（形容詞副詞） as～の形で「～と同じくらい…です」という意味になる。\n意味合いではa・c・dも同じだが、主語がMy catなので「私のネコは～」という風に文を始める',
    correct:'a'
  },

  // 中２ 龍華 理科
  {
    check: 'G2_ryuge_SI',
    question: '次のうちHはどれ？',
    a: '水素',
    b: '酸素',
    c: '炭素',
    d: '窒素',
    explanation: '水素はH、酸素はO、炭素はC、窒素はNです。',
    correct: 'a'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうちCuはどれ？',
    a: '金',
    b: '銀',
    c: '銅',
    d: '鉄',
    explanation: '金はAu、銀はAg、銅はCu、鉄はFeです。',
    correct: 'c'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうちCO₂はどれ？',
    a: 'アンモニア',
    b: '二酸化炭素',
    c: '水',
    d: '炭酸カルシウム',
    explanation: 'CO₂は酸素（O）が2つと炭素（C）が1つ\nつまり「二酸化炭素」になります。',
    correct: 'b'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうち硫黄の化学式はどれ？',
    a: 'Si',
    b: 'P',
    c: 'S',
    d: 'Cl',
    explanation: '硫黄はSです。\nSiはケイ素、Pはリン、Clは塩素の化学式です。',
    correct: 'c'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうちナトリウムの化学式はどれ？',
    a: 'Mg',
    b: 'Na',
    c: 'Ca',
    d: 'Fe',
    explanation: 'ナトリウムは「Na」なので答えはbです。\n「Mg」はマグネシウム、「Ca」はカルシウム、「Fe」は鉄の化学式です。',
    correct: 'b'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうち水の化学式はどれ？',
    a: 'NaOH',
    b: 'CH₄',
    c: 'CuO',
    d: 'H₂O',
    explanation: '水は「H₂O」なので答えはdです。\n「NaOH」は水酸化ナトリウム、「CH₄」はメタン、「CuO」は酸化銅の化学式です。',
    correct: 'd'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうちN₂の性質として正しいのはどれ？',
    a: '火を近づけると音を立てて燃える',
    b: '空気中に約78％含まれる',
    c: 'これが含まれた物質を有機物と呼ぶ',
    d: '常温で液体である',
    explanation: '空気は窒素（N₂）が約78％、酸素（O₂）が約21％含まれています。\n有機物は炭素・水素を含む物質のことです。',
    correct: 'b'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうち化合物はどれ？',
    a: 'アルゴン',
    b: 'マグネシウム',
    c: 'アンモニア',
    d: '水銀',
    explanation: '2種類以上の原子が結びついてできたものを化合物といいます。\nアンモニアの化学式はNH₃で、これだけが化合物です。\nアルゴンはAr、マグネシウムはMg、水銀はHgで、それぞれ化合物ではありません。',
    correct: 'c'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうち、水の電気分解の式として正しいものはどれ？',
    a: '2H₂ ＋ O₂ → 2H₂O',
    b: '2H₂O → 2H₂ ＋ O₂',
    c: 'H₂O → H₂ ＋ O',
    d: 'H₂O → H₂ ＋ O₂',
    explanation: '原子は化学変化の前後で数が増えたり減ったりしません。\n左右の原子の数が同じものを選びましょう。\n「2H₂O → 2H₂ ＋ O₂」が正解です。',
    correct: 'b'
  },
  {
    check: 'G2_ryuge_SI',
    question: '多くの金属の性質として正しくないものはどれ？',
    a: '磁石に引かれる',
    b: '電気をよく通す',
    c: '熱をよく通す',
    d: '叩くと広がる',
    explanation: '磁石に引かれるのは鉄、ニッケル、コバルトなど一部の金属だけです。\nそれ以外はほとんどの金属の性質です。',
    correct: 'a'
  }, 
  {
    check: 'G2_ryuge_SI',
    question: '塩化アンモニウムと水酸化バリウムの反応のように、温度が下がる反応を何という？',
    a: '低温反応',
    b: '冷却反応',
    c: '昇華反応',
    d: '吸熱反応',
    explanation: '温度が下がる反応を「吸熱反応」といいます。\n逆に温度が上がる反応は「発熱反応」です。',
    correct: 'd'
  },
  {
    check: 'G2_ryuge_SI',
    question: '化学反応の前後で、反応にかかわる物質の重さの合計が変わらない法則を何という？',
    a: '質量保存の法則',
    b: '定比例の法則',
    c: 'エネルギー保存の法則',
    d: '質量不変の法則',
    explanation: '正解は「質量保存の法則」です。',
    correct: 'a'
  },
  {
    check: 'G2_ryuge_SI',
    question: '酸化に関する説明として適切でないものはどれ？',
    a: '酸化とは物質と酸素が結びつく反応のことである',
    b: '燃焼とは光と熱を出しながら激しく進む酸化のことである',
    c: '酸化の速度は温度が高いほど遅くなる',
    d: '水素が燃焼すると水になる',
    explanation: '酸化は温度が高いほど速くなります。',
    correct: 'c'
  },
  {
    check: 'G2_ryuge_SI',
    question: '次のうち、還元反応はどれ？',
    a: '2CuO ＋ C → 2Cu ＋ CO₂',
    b: '2Mg ＋ O₂ → 2MgO',
    c: 'C₃H₈ ＋ 5O₂ → 3CO₂ ＋ 4H₂O',
    d: '2HCl → H₂ ＋ Cl₂',
    explanation: '還元反応とは物質から酸素を取り除く反応のことです。\n酸素が含まれる化合物から酸素が取り除かれている反応を選びましょう。',
    correct: 'a'
  },
  {
    check: 'G2_ryuge_SI',
    question: '銅の酸化反応において、反応する銅と酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: '銅と酸素は4:1の質量比で反応します。',
    correct: 'd'
  },
  {
    check: 'G2_ryuge_SI',
    question: 'マグネシウムの酸化反応において、反応するマグネシウムと酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: 'マグネシウムと酸素は3:2の質量比で反応します。',
    correct: 'c'
  },
  {
    check: 'G2_ryuge_SI',
    question: '銅4.0gと過不足なく反応する酸素の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅4.0gと反応する酸素は1.0gです。',
    correct: 'a'
  },
  {
    check: 'G2_ryuge_SI',
    question: '酸素4.0gと過不足なく反応する銅の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素4.0gと反応する銅は16.0gです。',
    correct: 'd'
  },
  {
    check: 'G2_ryuge_SI',
    question: '銅2.0gを十分な量の酸素と完全に反応させたときにできる酸化銅の質量は？',
    a: '2.0g',
    b: '2.5g',
    c: '10.0g',
    d: '20.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅2.0gと反応する酸素は0.5gです。\nよって反応でできる酸化銅の質量は2.5gです。',
    correct: 'b'
  },
  {
    check: 'G2_ryuge_SI',
    question: '密閉した容器の中に銅10.0gと酸素2.0gを入れて完全に反応させたとき、反応後に容器の中にあるものは？',
    a: '酸化銅12.0g',
    b: '酸素1.5gと酸化銅10.5g',
    c: '銅2.0gと酸化銅10.0g',
    d: '銅8.0gと酸化銅4.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素2.0gと反応する銅は8.0gです。\nよって酸化銅が10.0gでき、反応しなかった銅2.0gが残ります。',
    correct: 'c'
  },
  
  //// 中２ 大正

  //中２ 大正 英語
  {
    check: 'G2_taisho_E',
    question:'「私は彼に財布をあげるでしょう。」\n正しい英文を選べ。',
    a:'I will give a wallet him.',
    b:'I will gave a wallet to him.',
    c:'I will give him a wallet.',
    d:'I will give him to a wallet.',
    explanation:'答え：c\n解説：giveやshowなどの動詞は人・物の順番で２つ目的語を取る。',
    correct:'c'
  },
  {
    check: 'G2_taisho_E',
    question:'「私たちは彼をトムと呼びます。」\n正しい英文を選べ。',
    a:'We call him Tom.',
    b:'We call him to Tom.',
    c:'We call Tom him.',
    d:'We call him for Tom.',
    explanation:'答え:a\n解説：callやnameなどの動詞は、後ろに名前や名称が来る。',
    correct:'a'
  },
  {
    check: 'G2_taisho_E',
    question:'「そのニュースは私を幸せにした。」\n正しい英文を選べ。',
    a:'The news make me happy.',
    b:'Tne news made me happy.',
    c:'The news make happy me.',
    d:'The news made happy me.',
    explanation:'答え:b\n解説：make A Bで「AをBさせる」という意味になりAには人・Bには形容詞がくる事が多い。今回は過去形の文章なのでmadeを使う。',
    correct:'b'
  },
  {
    check: 'G2_taisho_E',
    question:'「彼は生徒たちに数学を教えます。」\n正しい英文を選べ。',
    a:'He teaches math to his students.',
    b:'He teaches math for his students.',
    c:'He taught math his students math.',
    d:'He teaches math his students to math.',
    explanation:'答え：a\n解説：相手が必要な動作ならto、一人でできる動作ならfor を使う。今回のteachは相手がいないと教えることできないのでtoを使う。',
    correct:'a'
  },
  {
    check: 'G2_taisho_E',
    question:' 私は彼に時計を買った。',
    a:'I buy him a watch.',
    b:'I bought a watch to him.',
    c:'I buy a watch to him.',
    d:'I bought a watch for him.',
    explanation:'答え：d\n解説：「彼に買った」と人がいるが買う動作は1人で出来るのでforを使う。',
    correct:'d'
  },
  {
    check: 'G2_taisho_E',
    question:'「私は宿題をしなければならない」正しい英文を選べ。',
    a:'I must do my homework.',
    b:'I must did my homework.',
    c:'I must does my homework.',
    d:'I must doing my homework.',
    explanation:'答え:a\n解説：助動詞の後ろの動詞は絶対に動詞の原形',
    correct:'a'
  },
  {
    check: 'G2_taisho_E',
    question:'あなたは学校へ行く必要はない。',
    a:'You must not go to school.',
    b:"You didn't have to go to school.",
    c:"You don't have to go to school.",
    d:"You doesn't have to go to school.",
    explanation:"答え:c\n解説：don't have to「～する必要がない」must notは「～してはいけない」と禁止の意味を表す。",
    correct:'c'
  },
  {
    check: 'G2_taisho_E',
    question:'「あなたは病院へ行くべきだ。」正しい英文を選べ。',
    a:'You may go to the hospital.',
    b:'You should go to the hospital.',
    c:'You must go to the hospital',
    d:'You will go to the hospital',
    explanation:'答え:b\n解説：may「～してもよい・～かもしれない」should「～すべき」の意味なのでshouldを選ぶ。',
    correct:'b'
  },
  {
    check: 'G2_taisho_E',
    question:'I enjoy (     ) baseball.正しい単語を選べ。',
    a:'play',
    b:'played',
    c:'playing',
    d:'plays',
    explanation:'答え:c\n解説：enjoy・finish・stopの後ろの動詞は動名詞になるのでingを付ける。',
    correct:'c'
  },

  // 中２ 大正 理科
  {
    check: 'G2_taisho_SI',
    question: '次のうちHはどれ？',
    a: '水素',
    b: '酸素',
    c: '炭素',
    d: '窒素',
    explanation: '水素はH、酸素はO、炭素はC、窒素はNです。',
    correct: 'a'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうちCuはどれ？',
    a: '金',
    b: '銀',
    c: '銅',
    d: '鉄',
    explanation: '金はAu、銀はAg、銅はCu、鉄はFeです。',
    correct: 'c'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうちCO₂はどれ？',
    a: 'アンモニア',
    b: '二酸化炭素',
    c: '水',
    d: '炭酸カルシウム',
    explanation: 'CO₂は酸素（O）が2つと炭素（C）が1つ\nつまり「二酸化炭素」になります。',
    correct: 'b'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうち硫黄の化学式はどれ？',
    a: 'Si',
    b: 'P',
    c: 'S',
    d: 'Cl',
    explanation: '硫黄はSです。\nSiはケイ素、Pはリン、Clは塩素の化学式です。',
    correct: 'c'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうちナトリウムの化学式はどれ？',
    a: 'Mg',
    b: 'Na',
    c: 'Ca',
    d: 'Fe',
    explanation: 'ナトリウムは「Na」なので答えはbです。\n「Mg」はマグネシウム、「Ca」はカルシウム、「Fe」は鉄の化学式です。',
    correct: 'b'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうち水の化学式はどれ？',
    a: 'NaOH',
    b: 'CH₄',
    c: 'CuO',
    d: 'H₂O',
    explanation: '水は「H₂O」なので答えはdです。\n「NaOH」は水酸化ナトリウム、「CH₄」はメタン、「CuO」は酸化銅の化学式です。',
    correct: 'd'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうちN₂の性質として正しいのはどれ？',
    a: '火を近づけると音を立てて燃える',
    b: '空気中に約78％含まれる',
    c: 'これが含まれた物質を有機物と呼ぶ',
    d: '常温で液体である',
    explanation: '空気は窒素（N₂）が約78％、酸素（O₂）が約21％含まれています。\n有機物は炭素・水素を含む物質のことです。',
    correct: 'b'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうち化合物はどれ？',
    a: 'アルゴン',
    b: 'マグネシウム',
    c: 'アンモニア',
    d: '水銀',
    explanation: '2種類以上の原子が結びついてできたものを化合物といいます。\nアンモニアの化学式はNH₃で、これだけが化合物です。\nアルゴンはAr、マグネシウムはMg、水銀はHgで、それぞれ化合物ではありません。',
    correct: 'c'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうち、水の電気分解の式として正しいものはどれ？',
    a: '2H₂ ＋ O₂ → 2H₂O',
    b: '2H₂O → 2H₂ ＋ O₂',
    c: 'H₂O → H₂ ＋ O',
    d: 'H₂O → H₂ ＋ O₂',
    explanation: '原子は化学変化の前後で数が増えたり減ったりしません。\n左右の原子の数が同じものを選びましょう。\n「2H₂O → 2H₂ ＋ O₂」が正解です。',
    correct: 'b'
  },
  {
    check: 'G2_taisho_SI',
    question: '多くの金属の性質として正しくないものはどれ？',
    a: '磁石に引かれる',
    b: '電気をよく通す',
    c: '熱をよく通す',
    d: '叩くと広がる',
    explanation: '磁石に引かれるのは鉄、ニッケル、コバルトなど一部の金属だけです。\nそれ以外はほとんどの金属の性質です。',
    correct: 'a'
  }, 
  {
    check: 'G2_taisho_SI',
    question: '塩化アンモニウムと水酸化バリウムの反応のように、温度が下がる反応を何という？',
    a: '低温反応',
    b: '冷却反応',
    c: '昇華反応',
    d: '吸熱反応',
    explanation: '温度が下がる反応を「吸熱反応」といいます。\n逆に温度が上がる反応は「発熱反応」です。',
    correct: 'd'
  },
  {
    check: 'G2_taisho_SI',
    question: '化学反応の前後で、反応にかかわる物質の重さの合計が変わらない法則を何という？',
    a: '質量保存の法則',
    b: '定比例の法則',
    c: 'エネルギー保存の法則',
    d: '質量不変の法則',
    explanation: '正解は「質量保存の法則」です。',
    correct: 'a'
  },
  {
    check: 'G2_taisho_SI',
    question: '酸化に関する説明として適切でないものはどれ？',
    a: '酸化とは物質と酸素が結びつく反応のことである',
    b: '燃焼とは光と熱を出しながら激しく進む酸化のことである',
    c: '酸化の速度は温度が高いほど遅くなる',
    d: '水素が燃焼すると水になる',
    explanation: '酸化は温度が高いほど速くなります。',
    correct: 'c'
  },
  {
    check: 'G2_taisho_SI',
    question: '次のうち、還元反応はどれ？',
    a: '2CuO ＋ C → 2Cu ＋ CO₂',
    b: '2Mg ＋ O₂ → 2MgO',
    c: 'C₃H₈ ＋ 5O₂ → 3CO₂ ＋ 4H₂O',
    d: '2HCl → H₂ ＋ Cl₂',
    explanation: '還元反応とは物質から酸素を取り除く反応のことです。\n酸素が含まれる化合物から酸素が取り除かれている反応を選びましょう。',
    correct: 'a'
  },
  {
    check: 'G2_taisho_SI',
    question: '銅の酸化反応において、反応する銅と酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: '銅と酸素は4:1の質量比で反応します。',
    correct: 'd'
  },
  {
    check: 'G2_taisho_SI',
    question: 'マグネシウムの酸化反応において、反応するマグネシウムと酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: 'マグネシウムと酸素は3:2の質量比で反応します。',
    correct: 'c'
  },
  {
    check: 'G2_taisho_SI',
    question: '銅4.0gと過不足なく反応する酸素の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅4.0gと反応する酸素は1.0gです。',
    correct: 'a'
  },
  {
    check: 'G2_taisho_SI',
    question: '酸素4.0gと過不足なく反応する銅の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素4.0gと反応する銅は16.0gです。',
    correct: 'd'
  },
  {
    check: 'G2_taisho_SI',
    question: '銅2.0gを十分な量の酸素と完全に反応させたときにできる酸化銅の質量は？',
    a: '2.0g',
    b: '2.5g',
    c: '10.0g',
    d: '20.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅2.0gと反応する酸素は0.5gです。\nよって反応でできる酸化銅の質量は2.5gです。',
    correct: 'b'
  },
  {
    check: 'G2_taisho_SI',
    question: '密閉した容器の中に銅10.0gと酸素2.0gを入れて完全に反応させたとき、反応後に容器の中にあるものは？',
    a: '酸化銅12.0g',
    b: '酸素1.5gと酸化銅10.5g',
    c: '銅2.0gと酸化銅10.0g',
    d: '銅8.0gと酸化銅4.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素2.0gと反応する銅は8.0gです。\nよって酸化銅が10.0gでき、反応しなかった銅2.0gが残ります。',
    correct: 'c'
  },

  ////中２ 曙南
  // 中２ 曙南 英語
  {
    check: 'G2_akenan_E',
    question:'「私は彼に財布をあげるでしょう。」\n正しい英文を選べ。',
    a:'I will give a wallet him.',
    b:'I will gave a wallet to him.',
    c:'I will give him a wallet.',
    d:'I will give him to a wallet.',
    explanation:'答え：c\n解説：giveやshowなどの動詞は人・物の順番で２つ目的語を取る。',
    correct:'c'
  },
  {
    check: 'G2_akenan_E',
    question:'「私たちは彼をトムと呼びます。」\n正しい英文を選べ。',
    a:'We call him Tom.',
    b:'We call him to Tom.',
    c:'We call Tom him.',
    d:'We call him for Tom.',
    explanation:'答え:a\n解説：callやnameなどの動詞は、後ろに名前や名称が来る。',
    correct:'a'
  },
  {
    check: 'G2_akenan_E',
    question:'「そのニュースは私を幸せにした。」\n正しい英文を選べ。',
    a:'The news make me happy.',
    b:'Tne news made me happy.',
    c:'The news make happy me.',
    d:'The news made happy me.',
    explanation:'答え:b\n解説：make A Bで「AをBさせる」という意味になりAには人・Bには形容詞がくる事が多い。今回は過去形の文章なのでmadeを使う。',
    correct:'b'
  },
  {
    check: 'G2_akenan_E',
    question:'「彼は生徒たちに数学を教えます。」\n正しい英文を選べ。',
    a:'He teaches math to his students.',
    b:'He teaches math for his students.',
    c:'He taught math his students math.',
    d:'He teaches math his students to math.',
    explanation:'答え：a\n解説：相手が必要な動作ならto、一人でできる動作ならfor を使う。今回のteachは相手がいないと教えることできないのでtoを使う。',
    correct:'a'
  },
  {
    check: 'G2_akenan_E',
    question:' 私は彼に時計を買った。',
    a:'I buy him a watch.',
    b:'I bought a watch to him.',
    c:'I buy a watch to him.',
    d:'I bought a watch for him.',
    explanation:'答え：d\n解説：「彼に買った」と人がいるが買う動作は1人で出来るのでforを使う。',
    correct:'d'
  },
  {
    check: 'G2_akenan_E',
    question:'「私は宿題をしなければならない」正しい英文を選べ。',
    a:'I must do my homework.',
    b:'I must did my homework.',
    c:'I must does my homework.',
    d:'I must doing my homework.',
    explanation:'答え:a\n解説：助動詞の後ろの動詞は絶対に動詞の原形',
    correct:'a'
  },
  {
    check: 'G2_akenan_E',
    question:'あなたは学校へ行く必要はない。',
    a:'You must not go to school.',
    b:"You didn't have to go to school.",
    c:"You don't have to go to school.",
    d:"You doesn't have to go to school.",
    explanation:"答え:c\n解説：don't have to「～する必要がない」must notは「～してはいけない」と禁止の意味を表す。",
    correct:'c'
  },
  {
    check: 'G2_akenan_E',
    question:'「あなたは病院へ行くべきだ。」正しい英文を選べ。',
    a:'You may go to the hospital.',
    b:'You should go to the hospital.',
    c:'You must go to the hospital',
    d:'You will go to the hospital',
    explanation:'答え:b\n解説：may「～してもよい・～かもしれない」should「～すべき」の意味なのでshouldを選ぶ。',
    correct:'b'
  },

  // 中２ 曙南 理科

  {
    check: 'G2_akenan_SI',
    question: '次のうちHはどれ？',
    a: '水素',
    b: '酸素',
    c: '炭素',
    d: '窒素',
    explanation: '水素はH、酸素はO、炭素はC、窒素はNです。',
    correct: 'a'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうちCuはどれ？',
    a: '金',
    b: '銀',
    c: '銅',
    d: '鉄',
    explanation: '金はAu、銀はAg、銅はCu、鉄はFeです。',
    correct: 'c'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうちCO₂はどれ？',
    a: 'アンモニア',
    b: '二酸化炭素',
    c: '水',
    d: '炭酸カルシウム',
    explanation: 'CO₂は酸素（O）が2つと炭素（C）が1つ\nつまり「二酸化炭素」になります。',
    correct: 'b'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうち硫黄の化学式はどれ？',
    a: 'Si',
    b: 'P',
    c: 'S',
    d: 'Cl',
    explanation: '硫黄はSです。\nSiはケイ素、Pはリン、Clは塩素の化学式です。',
    correct: 'c'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうちナトリウムの化学式はどれ？',
    a: 'Mg',
    b: 'Na',
    c: 'Ca',
    d: 'Fe',
    explanation: 'ナトリウムは「Na」なので答えはbです。\n「Mg」はマグネシウム、「Ca」はカルシウム、「Fe」は鉄の化学式です。',
    correct: 'b'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうち水の化学式はどれ？',
    a: 'NaOH',
    b: 'CH₄',
    c: 'CuO',
    d: 'H₂O',
    explanation: '水は「H₂O」なので答えはdです。\n「NaOH」は水酸化ナトリウム、「CH₄」はメタン、「CuO」は酸化銅の化学式です。',
    correct: 'd'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうちN₂の性質として正しいのはどれ？',
    a: '火を近づけると音を立てて燃える',
    b: '空気中に約78％含まれる',
    c: 'これが含まれた物質を有機物と呼ぶ',
    d: '常温で液体である',
    explanation: '空気は窒素（N₂）が約78％、酸素（O₂）が約21％含まれています。\n有機物は炭素・水素を含む物質のことです。',
    correct: 'b'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうち化合物はどれ？',
    a: 'アルゴン',
    b: 'マグネシウム',
    c: 'アンモニア',
    d: '水銀',
    explanation: '2種類以上の原子が結びついてできたものを化合物といいます。\nアンモニアの化学式はNH₃で、これだけが化合物です。\nアルゴンはAr、マグネシウムはMg、水銀はHgで、それぞれ化合物ではありません。',
    correct: 'c'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうち、水の電気分解の式として正しいものはどれ？',
    a: '2H₂ ＋ O₂ → 2H₂O',
    b: '2H₂O → 2H₂ ＋ O₂',
    c: 'H₂O → H₂ ＋ O',
    d: 'H₂O → H₂ ＋ O₂',
    explanation: '原子は化学変化の前後で数が増えたり減ったりしません。\n左右の原子の数が同じものを選びましょう。\n「2H₂O → 2H₂ ＋ O₂」が正解です。',
    correct: 'b'
  },
  {
    check: 'G2_akenan_SI',
    question: '多くの金属の性質として正しくないものはどれ？',
    a: '磁石に引かれる',
    b: '電気をよく通す',
    c: '熱をよく通す',
    d: '叩くと広がる',
    explanation: '磁石に引かれるのは鉄、ニッケル、コバルトなど一部の金属だけです。\nそれ以外はほとんどの金属の性質です。',
    correct: 'a'
  }, 
  {
    check: 'G2_akenan_SI',
    question: '塩化アンモニウムと水酸化バリウムの反応のように、温度が下がる反応を何という？',
    a: '低温反応',
    b: '冷却反応',
    c: '昇華反応',
    d: '吸熱反応',
    explanation: '温度が下がる反応を「吸熱反応」といいます。\n逆に温度が上がる反応は「発熱反応」です。',
    correct: 'd'
  },
  {
    check: 'G2_akenan_SI',
    question: '化学反応の前後で、反応にかかわる物質の重さの合計が変わらない法則を何という？',
    a: '質量保存の法則',
    b: '定比例の法則',
    c: 'エネルギー保存の法則',
    d: '質量不変の法則',
    explanation: '正解は「質量保存の法則」です。',
    correct: 'a'
  },
  {
    check: 'G2_akenan_SI',
    question: '酸化に関する説明として適切でないものはどれ？',
    a: '酸化とは物質と酸素が結びつく反応のことである',
    b: '燃焼とは光と熱を出しながら激しく進む酸化のことである',
    c: '酸化の速度は温度が高いほど遅くなる',
    d: '水素が燃焼すると水になる',
    explanation: '酸化は温度が高いほど速くなります。',
    correct: 'c'
  },
  {
    check: 'G2_akenan_SI',
    question: '次のうち、還元反応はどれ？',
    a: '2CuO ＋ C → 2Cu ＋ CO₂',
    b: '2Mg ＋ O₂ → 2MgO',
    c: 'C₃H₈ ＋ 5O₂ → 3CO₂ ＋ 4H₂O',
    d: '2HCl → H₂ ＋ Cl₂',
    explanation: '還元反応とは物質から酸素を取り除く反応のことです。\n酸素が含まれる化合物から酸素が取り除かれている反応を選びましょう。',
    correct: 'a'
  },
  {
    check: 'G2_akenan_SI',
    question: '銅の酸化反応において、反応する銅と酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: '銅と酸素は4:1の質量比で反応します。',
    correct: 'd'
  },
  {
    check: 'G2_akenan_SI',
    question: 'マグネシウムの酸化反応において、反応するマグネシウムと酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: 'マグネシウムと酸素は3:2の質量比で反応します。',
    correct: 'c'
  },
  {
    check: 'G2_akenan_SI',
    question: '銅4.0gと過不足なく反応する酸素の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅4.0gと反応する酸素は1.0gです。',
    correct: 'a'
  },
  {
    check: 'G2_akenan_SI',
    question: '酸素4.0gと過不足なく反応する銅の質量は？',
    a: '1.0g',
    b: '2.0g',
    c: '4.0g',
    d: '16.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素4.0gと反応する銅は16.0gです。',
    correct: 'd'
  },
  {
    check: 'G2_akenan_SI',
    question: '銅2.0gを十分な量の酸素と完全に反応させたときにできる酸化銅の質量は？',
    a: '2.0g',
    b: '2.5g',
    c: '10.0g',
    d: '20.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n銅2.0gと反応する酸素は0.5gです。\nよって反応でできる酸化銅の質量は2.5gです。',
    correct: 'b'
  },
  {
    check: 'G2_akenan_SI',
    question: '密閉した容器の中に銅10.0gと酸素2.0gを入れて完全に反応させたとき、反応後に容器の中にあるものは？',
    a: '酸化銅12.0g',
    b: '酸素1.5gと酸化銅10.5g',
    c: '銅2.0gと酸化銅10.0g',
    d: '銅8.0gと酸化銅4.0g',
    explanation: '銅の酸化反応における銅と酸素の質量比は4:1なので、\n酸素2.0gと反応する銅は8.0gです。\nよって酸化銅が10.0gでき、反応しなかった銅2.0gが残ります。',
    correct: 'c'
  },

  ////// 中３

  //// 中３ 亀井

  // 中３ 亀井 英語
  {
    check: 'G3_kamei_E',
    question:'I have a friend (    ) can speak English.(    )に入るのを選べ。',
    a:'who',
    b:'which',
    c:'where',
    d:'when',
    explanation:'答え:a\n解説：先行詞が人で（　　）の後が主語無しの不完全文なので主格のwhoが入る。先行詞が物ならwhichを使う。',
    correct:'a'
  },
  {
    check: 'G3_kamei_E',
    question:'I want a bag which has a lot of pockets正しい和訳を選べ。',
    a:'私はポケットがたくさんあるカバンが欲しかった。',
    b:'私はポケットがたくさんあるカバンが欲しい。',
    c:'私はポケットがたくさんあるカバンを手に入れたい。',
    d:'私はポケットがたくさんあるカバンのどれか欲しい。',
    explanation:'答え:b\n解説：which～poketsまでのカタマリがa bagを修飾している。',
    correct:'b'
  },
  {
    check: 'G3_kamei_E',
    question:'The shop is popular among children. It sell colorful sweets.２つの文を正しくくっつけた文章を選べ。',
    a:'The shop is popular which sell colorful sweets among children.',
    b:'The shop is popular among children who sell colorful sweets.',
    c:'The shop is popular among children it which sell colorful sweets.',
    d:'The shop which sell colorful sweets is popular among children.',
    explanation:'答え:d\n解説：The shopとItがイコール関係なので主語のThe shopの後にwhichの関係代名詞節を置く。',
    correct:'d'
  },
  {
    check: 'G3_kamei_E',
    question:'「ユミはメガネをかけている背の高い女の子です。」（Yumi/wearing/tall/who/is/girl/glasses/is/a）５番目に来る単語は？',
    a:'girl',
    b:'who',
    c:'wearing',
    d:'a',
    explanation:'答え:a\n解説：正文Yumi is a tall girl who is wearing glasses.まず、ユミは背の高い女の子の文章を考えて、後から女の子の説明になるwhoの関係代名詞節を置く。',
    correct:'a'
  },
  {
    check: 'G3_kamei_E',
    question:'「スピーチをしている男性は興奮しているようです。」(excited/making/is/looks/that/a speech/the man)３番目に来る単語は？',
    a:'that',
    b:'excited',
    c:'is',
    d:'looks',
    explanation:'答え:c\n解説：正文The man that is making a speech looks excited.男性は興奮をしているという文章を考えて、今回は男性を説明しているのでThe manとlooksの間にthat is making a speechの関係代名詞節を入れる。',
    correct:'c'
  },
  {
    check: 'G3_kamei_E',
    question:'「マイクは青い目をした少年です。」正しい英文を選べ。',
    a:'Mike is the boy which has blue eyes.',
    b:'Mike is the boy who has blue eyes',
    c:'Mike who has blue eyes is the boy.',
    d:'Mike which has blue eyes is the boy.',
    explanation:'答え:b\n解説：cを選ぶと「青い目をしたマイクは少年です」となるので間違い。',
    correct:'b'
  },

  // 中３ 亀井 理科
  {
    check: 'G3_kamei_SI',
    question: '酸とアルカリが互いの性質を打ち消しあうような反応を何というか。',
    a: '化学反応',
    b: '吸熱反応',
    c: '中和反応',
    d: '中性反応',
    explanation: '',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SI',
    question: 'すべての中和反応で発生するものにおいて適当でないものは次のうちどれ。',
    a: '塩化ナトリウム',
    b: '塩',
    c: '水',
    d: '熱',
    explanation: 'この問題の解説\n中和反応では、水と塩(えん)、さらに熱も発生します。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '次のうち酸性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '炭酸水素ナトリウム',
    d: '硫酸',
    explanation: 'この問題の解説\n〇〇酸となるものは酸性を示します。',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SI',
    question: '次のうちアルカリ性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '硫酸',
    d: '酢酸',
    explanation: 'この問題の解説\n水酸化〇〇となるものはアルカリ性を示しますが、アルカリ性の物質の中にはアンモニア水のように『水酸化』がつかない物質もあります。',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SI',
    question: '次のうち、酸性を示すイオンはどれ。',
    a: '水素イオン',
    b: '水酸化物イオン',
    c: '塩化物イオン',
    d: '硫酸イオン',
    explanation: 'この問題の解説\n酸性の物質が電離すると水素イオンが発生します。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '次のうちアルカリ性を示すイオンはどれ。',
    a: '水素イオン',
    b: '水酸化物イオン',
    c: '塩化物イオン',
    d: 'ナトリウムイオン',
    explanation: 'この問題の解説\nアルカリ性の物質が電離すると水酸化物イオンが発生します。',
    correct: 'b'
  },
  {
   check: 'G3_kamei_SI',
   question: '中性を示すpHは次のうちどれ。',
    a: '0',
    b: '6',
    c: '7',
    d: '14',
    explanation: 'この問題の解説\npHは0～14で小さくなるほど強い酸性を示し、大きくなるほど強いアルカリ性を示します。',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SI',
    question: 'BTB溶液に塩酸を滴下したとき、溶液は何色になるか。',
    a: '青色',
    b: '黄色',
    c: '緑色',
    d: '赤色',
    explanation: 'この問題の解説\nBTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色を示します。',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SI',
    question: '塩化銅水溶液を電気分解するとき、陽極のほうへ移動するイオンはどれ。',
    a: '銅イオン',
    b: '塩化物イオン',
    c: '水素イオン',
    d: '水酸化物イオン',
    explanation: 'この問題の解説\n電気分解をすると陽極に陰イオンが、陰極に陽イオンが移動します。',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SI',
    question: '塩酸と水酸化ナトリウム水溶液の中和でできる塩はどれ。',
    a: '硫酸バリウム',
    b: '水',
    c: '硝酸ナトリウム',
    d: '塩化ナトリウム',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SI',
    question: '次のうち、一次電池はどれ。',
    a: 'ニッケル水素電池',
    b: 'リチウムイオン電池',
    c: '鉛蓄電池',
    d: '乾電池',
    explanation: 'この問題の解説\n使い捨ての電池を『一次電池』、充電して繰り返し使える電池を『二次電池』といいます。',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SI',
    question: 'ある濃度のうすい塩酸15cm³に、ある濃度のうすい水酸化ナトリウム水溶液10cm³を加えると、過不足なく反応し中性となった。この塩酸が10cm3あるとき、水酸化ナトリウム水溶液は何cm3で中性になるか。',
    a: '6cm³',
    b: '8cm³',
    c: '10cm³',
    d: '12cm³',
    explanation: 'この問題の解説\n塩酸と水酸化ナトリウムの反応比は3：2です。比例計算を使って解きましょう。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '水の重さによって生じる圧力を何というか。',
    a: '浮力',
    b: '気圧',
    c: '水圧',
    d: '張力',
    explanation: 'この問題の解説\n水圧は深さに比例します。',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SI',
    question: '水中にある物体が水から受ける上向きの力を何というか。',
    a: '浮力',
    b: '張力',
    c: '弾性力',
    d: '摩擦力',
    explanation: 'この問題の解説\n浮力は、深さの違いによって生まれる水圧の差によって生じます。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '１つの物体にはたらく２力を、それと同じはたらきをする１つの力に置き換えることを『力の〇〇』という。',
    a: '分解',
    b: '合成',
    c: '屈折',
    d: '反射',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SI',
    question: '一直線上で同じ向きにはたらく２力の合力の大きさは、２力の大きさの何と等しくなるか。',
    a: '和',
    b: '差',
    c: '積',
    d: '商',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '一直線上で反対向きにはたらく２力の合力の大きさは、２力の大きさの何と等しくなるか。',
    a: '和',
    b: '差',
    c: '積',
    d: '商',
    explanation: '',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SI',
    question: '角度をもった２力の合力は、２力を２辺とする何という図形の対角線で表されるか。',
    a: '三角形',
    b: '台形',
    c: '正方形',
    d: '平行四辺形',
    explanation: 'この問題の解説\nこのように合力が示されることを力の平行四辺形の法則といいます。',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SI',
    question: '1秒間に60打点する記録タイマーは、何秒ごとに打点するか。',
    a: '1/60秒',
    b: '1/50秒',
    c: '1/70秒',
    d: '1/40秒',
    explanation: 'この問題の解説\n記録タイマーは、西日本では1秒間に60打点、東日本では1秒間に50打点します。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SI',
    question: '物体が一定の速さで移動したと考えて求めた速さを何というか。',
    a: '瞬間の速さ',
    b: '平均の速さ',
    c: '合計の速さ',
    d: '１時間の速さ',
    explanation: 'この問題の解説\nこれに対し、ごく短い時間に移動した距離をもとに求める速さを『瞬間の速さ』といいます。',
    correct: 'b'
  },


  // 中３ 亀井 社会
  {
    check: 'G3_kamei_SS',
    question: '第１問\n代表者の話し合いによって政治を行うシステムを何という？',
    a: '直接民主制',
    b: '間接民主制',
    c: '王様じゃんけん',
    d: '井戸端会議',
    explanation: 'この問題の解説\n答え：b\naの直接民主制はみんなで話し合う、\ndの井戸端会議はお母さんたちの世間話ですね！',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SS',
    question: '第２問\n憲法は、「国の○○○○」と位置付けられているが〇に入る４文字は？',
    a: '最高法律',
    b: '最高規律',
    c: '最高法規',
    d: 'ベホイミ',
    explanation: 'この問題の解説\n答え：c\n本当にある言葉はcとdだけですね。\ndのベホイミはドラクエの回復する魔法ですね！',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SS',
    question: '第３問\n政治権力を分散させて、権力の集中を防ぐしくみを何という？',
    a: '地方分権',
    b: '権力分立',
    c: '絶対王政',
    d: '仲良しこよし',
    explanation: 'この問題の解説\n答え：b\nこれも・・・bしかないっすね！\n(^^)/ちなみに、日本の場合は「三権分立」とも呼びますね！',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SS',
    question: '第４問\n権力分立の重要性を主張したフランス人はだれ？',
    a: 'ロック',
    b: 'ルソー',
    c: 'ナポレオン',
    d: 'モンテスキュー',
    explanation: 'この問題の解説\n答え：d\nこれはSランク！\naは『統治論』\nbは『社会契約論』\ncはフランス革命後に皇帝になりましたね！\ndは『法の精神』',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SS',
    question: '第５問\n三権分立で、国会は○○権をもつ。○○に入る２文字は？',
    a: '立法',
    b: '司法',
    c: '行政',
    d: '営業',
    explanation: 'この問題の解説\n答え：a\n立法権とは、法律を定めることができる権利ですね！\n国の「唯一の立法機関」と定められています！',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SS',
    question: '第６問\n絶対王政のような人の支配ではなく、権力を持つ人も法に従わなければならないという考え方を何の支配という？',
    a: '神',
    b: '法',
    c: '鬼',
    d: 'サーモン',
    explanation: 'この問題の解説\n答え：b\n「法の支配」とは、国王や政府も法（ルールや基準）を守らなければならない！ってことです！',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SS',
    question: '第７問\n大日本帝国憲法をつくるとき、参考にした国は？',
    a: 'プロイセン',
    b: 'イギリス',
    c: 'フランス',
    d: '集まれどうぶつの森',
    explanation: 'この問題の解説\n答え：a\nプロイセンとは今のドイツのことです！',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SS',
    question: '第８問\n現在の日本国憲法の公布日は？',
    a: '1945年11月3日',
    b: '1946年11月3日',
    c: '1946年 5月3日',
    d: '1947年 5月3日',
    explanation: 'この問題の解説\n答え：b\n「公布」とは発表することです！\n憲法を使い始めることになったのは、dの1947年5月3日が「施行」日です！',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SS',
    question: '第９問\n日本国憲法では、主権者はだれ？',
    a: '国民',
    b: '内閣総理大臣',
    c: '天皇',
    d: 'くまモン',
    explanation: 'この問題の解説\n答え：a\n現在は、「国民主権」ですね！\n大日本帝国憲法の時代は、「天皇主権」です！',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１０問\n憲法第１条「天皇は、日本国の○○」・・・○に入る２文字は？',
    a: '神様',
    b: '仏様',
    c: '象徴',
    d: '代表',
    explanation: 'この問題の解説\n答え：c\n「象徴」とは「シンボル」のことです！',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１１問\n天皇の仕事のことを漢字４文字で何という？',
    a: '国事行為',
    b: '重要任務',
    c: '代表行為',
    d: '国際行為',
    explanation: 'この問題の解説\n答え：a\n国事行為には、内閣総理大臣と最高裁判所長官の任命や、法律の公布、表彰などがあります！',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１２問\n国民が国会を通じて政治のあり方を決めるしくみを何という？',
    a: '議院内閣制',
    b: '小選挙区比例代表並立制',
    c: '議会制民主主義',
    d: '効率と公正',
    explanation: 'この問題の解説\n答え：c\n議会とは国会のことです。\n国会で、国民がそれぞれ選んだ代表者が話し合います。',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１３問\n憲法改正の手続きについては、第何条に書かれていますか？',
    a: '前文',
    b: '第１条',
    c: '第９条',
    d: '第９６条',
    explanation: 'この問題の解説\n答え：d\n第１条は、天皇について。\n第９条は平和主義について。',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１４問\n憲法を改正してよいか、国民に問うことを４文字で何という？',
    a: '国民投票',
    b: '国民審査',
    c: '国民確認',
    d: '阪神優勝',
    explanation: 'この問題の解説\n答え：a\n第１条は、天皇について。\n第９条は平和主義について。',
    correct: 'a'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１５問\n1689年に制定された、議会の承認なしには国王は課税や法律の変更ができないと定めた章典は？',
    a: 'ハムラビ章典',
    b: '自由の章典',
    c: '国語辞典',
    d: '権利の章典',
    explanation: 'この問題の解説\n答え：d\n名誉革命のあと、権利の章典が定められました。',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１６問\n二院制について、第二次世界大戦終戦までは、衆議院と何院で構成されていましたか？',
    a: '華族院',
    b: '貴族院',
    c: '参議院',
    d: '病院',
    explanation: 'この問題の解説\n答え：b\n戦後、GHQにより、貴族院が解散させられ、参議院がつくられました。',
    correct: 'b'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１７問\n衆議院議員の被選挙権は何歳以上？',
    a: '１８歳',
    b: '２０歳',
    c: '２５歳',
    d: '３０歳',
    explanation: 'この問題の解説\n答え：c\n参議院と都道府県知事の被選挙権が30歳！\n選挙権はどれも18歳！',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１８問\n衆議院議員の任期は何年？',
    a: '１年',
    b: '２年',
    c: '４年',
    d: '６年',
    explanation: 'この問題の解説\n答え：c\n参議院は６年で、３年ごとに改選します！！',
    correct: 'c'
  },
  {
    check: 'G3_kamei_SS',
    question: '第１９問\n通常国会の会期は何日？',
    a: '１日',
    b: '３０日',
    c: '９０日',
    d: '１５０日',
    explanation: 'この問題の解説\n答え：d\n通常国会は１月に召集され、予算の議決を行います！',
    correct: 'd'
  },
  {
    check: 'G3_kamei_SS',
    question: '第２０問\n内閣について、内閣総理大臣以外の大臣を何といいますか？',
    a: '社長',
    b: '大蔵大臣',
    c: '国務大臣',
    d: 'おっさん',
    explanation: 'この問題の解説\n答え：c\n国務大臣の過半数は国会議員であること、\nすべて文民であることが必要と定められています！',
    correct: 'c'
  },


  //// 中３ 龍華

  // 中３ 龍華 英語
  {
    check: 'G3_ryuge_E',
    question:'I have a friend (    ) can speak English.(    )に入るのを選べ。',
    a:'who',
    b:'which',
    c:'where',
    d:'when',
    explanation:'答え:a\n解説：先行詞が人で（　　）の後が主語無しの不完全文なので主格のwhoが入る。先行詞が物ならwhichを使う。',
    correct:'a'
  },
  {
    check: 'G3_ryuge_E',
    question:'I want a bag which has a lot of pockets正しい和訳を選べ。',
    a:'私はポケットがたくさんあるカバンが欲しかった。',
    b:'私はポケットがたくさんあるカバンが欲しい。',
    c:'私はポケットがたくさんあるカバンを手に入れたい。',
    d:'私はポケットがたくさんあるカバンのどれか欲しい。',
    explanation:'答え:b\n解説：which～poketsまでのカタマリがa bagを修飾している。',
    correct:'b'
  },
  {
    check: 'G3_ryuge_E',
    question:'The shop is popular among children. It sell colorful sweets.２つの文を正しくくっつけた文章を選べ。',
    a:'The shop is popular which sell colorful sweets among children.',
    b:'The shop is popular among children who sell colorful sweets.',
    c:'The shop is popular among children it which sell colorful sweets.',
    d:'The shop which sell colorful sweets is popular among children.',
    explanation:'答え:d\n解説：The shopとItがイコール関係なので主語のThe shopの後にwhichの関係代名詞節を置く。',
    correct:'d'
  },
  {
    check: 'G3_ryuge_E',
    question:'「ユミはメガネをかけている背の高い女の子です。」（Yumi/wearing/tall/who/is/girl/glasses/is/a）５番目に来る単語は？',
    a:'girl',
    b:'who',
    c:'wearing',
    d:'a',
    explanation:'答え:a\n解説：正文Yumi is a tall girl who is wearing glasses.まず、ユミは背の高い女の子の文章を考えて、後から女の子の説明になるwhoの関係代名詞節を置く。',
    correct:'a'
  },
  {
    check: 'G3_ryuge_E',
    question:'「スピーチをしている男性は興奮しているようです。」(excited/making/is/looks/that/a speech/the man)３番目に来る単語は？',
    a:'that',
    b:'excited',
    c:'is',
    d:'looks',
    explanation:'答え:c\n解説：正文The man that is making a speech looks excited.男性は興奮をしているという文章を考えて、今回は男性を説明しているのでThe manとlooksの間にthat is making a speechの関係代名詞節を入れる。',
    correct:'c'
  },
  {
    check: 'G3_ryuge_E',
    question:'「マイクは青い目をした少年です。」正しい英文を選べ。',
    a:'Mike is the boy which has blue eyes.',
    b:'Mike is the boy who has blue eyes',
    c:'Mike who has blue eyes is the boy.',
    d:'Mike which has blue eyes is the boy.',
    explanation:'答え:b\n解説：cを選ぶと「青い目をしたマイクは少年です」となるので間違い。',
    correct:'b'
  },
  {
    check: 'G3_ryuge_E',
    question:'These are pictures (     ) I took on August 20.',
    a:'who',
    b:'when',
    c:'what',
    d:'which',
    explanation:'答え:d\n解説：先行詞が物でtookの目的語が無いので目的格のwhichを選ぶ。目的格のwhichやthatは省略できる。',
    correct:'d'
  },
  {
    check: 'G3_ryuge_E',
    question:'「私が昨日釣った魚は父によって料理されました。」正しい英文を選べ。',
    a:'The fish was cooked by my father that I caught yesterday.',
    b:'The fish that I caught was cooked by my father yesterday.',
    c:'The fish that I caught yesterday was cooked by my father.',
    d:'The fish was that I caught yesterday cooked by my father.',
    explanation:'答え:c\n解説：「昨日釣った」の部分が関係代名詞節になるのでyesterdayは文末じゃなく関係代名詞節のなかに入れる。',
    correct:'c'
  },

  // 中３ 龍華 理科

  {
    check: 'G3_ryuge_E',
    question: '酸とアルカリが互いの性質を打ち消しあうような反応を何というか。',
    a: '化学反応',
    b: '吸熱反応',
    c: '中和反応',
    d: '中性反応',
    explanation: '',
    correct: 'c'
  },
  {
    check: 'G3_ryuge_E',
    question: 'すべての中和反応で発生するものにおいて適当でないものは次のうちどれ。',
    a: '塩化ナトリウム',
    b: '塩',
    c: '水',
    d: '熱',
    explanation: 'この問題の解説\n中和反応では、水と塩(えん)、さらに熱も発生します。',
    correct: 'a'
  },
  {
    check: 'G3_ryuge_E',
    question: '次のうち酸性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '炭酸水素ナトリウム',
    d: '硫酸',
    explanation: 'この問題の解説\n〇〇酸となるものは酸性を示します。',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: '次のうちアルカリ性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '硫酸',
    d: '酢酸',
    explanation: 'この問題の解説\n水酸化〇〇となるものはアルカリ性を示しますが、アルカリ性の物質の中にはアンモニア水のように『水酸化』がつかない物質もあります。',
    correct: 'b'
  },
  {
  check: 'G3_ryuge_E',
  question: '次のうち、酸性を示すイオンはどれ。',
  a: '水素イオン',
  b: '水酸化物イオン',
  c: '塩化物イオン',
  d: '硫酸イオン',
  explanation: 'この問題の解説\n酸性の物質が電離すると水素イオンが発生します。',
  correct: 'a'
  },
  {
    check: 'G3_ryuge_E',
    question: '次のうちアルカリ性を示すイオンはどれ。',
    a: '水素イオン',
    b: '水酸化物イオン',
    c: '塩化物イオン',
    d: 'ナトリウムイオン',
    explanation: 'この問題の解説\nアルカリ性の物質が電離すると水酸化物イオンが発生します。',
    correct: 'b'
  },
  {
    check: 'G3_ryuge_E',
    question: '中性を示すpHは次のうちどれ。',
    a: '0',
    b: '6',
    c: '7',
    d: '14',
    explanation: 'この問題の解説\npHは0～14で小さくなるほど強い酸性を示し、大きくなるほど強いアルカリ性を示します。',
    correct: 'c'
  },
  {
    check: 'G3_ryuge_E',
    question: 'BTB溶液に塩酸を滴下したとき、溶液は何色になるか。',
    a: '青色',
    b: '黄色',
    c: '緑色',
    d: '赤色',
    explanation: 'この問題の解説\nBTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色を示します。',
    correct: 'b'
  },
  {
    check: 'G3_ryuge_E',
    question: '塩化銅水溶液を電気分解するとき、陽極のほうへ移動するイオンはどれ。',
    a: '銅イオン',
    b: '塩化物イオン',
    c: '水素イオン',
    d: '水酸化物イオン',
    explanation: 'この問題の解説\n電気分解をすると陽極に陰イオンが、陰極に陽イオンが移動します。',
    correct: 'b'
  },
  {
    check: 'G3_ryuge_E',
    question: '塩酸と水酸化ナトリウム水溶液の中和でできる塩はどれ。',
    a: '硫酸バリウム',
    b: '水',
    c: '硝酸ナトリウム',
    d: '塩化ナトリウム',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: '次のうち、一次電池はどれ。',
    a: 'ニッケル水素電池',
    b: 'リチウムイオン電池',
    c: '鉛蓄電池',
    d: '乾電池',
    explanation: 'この問題の解説\n使い捨ての電池を『一次電池』、充電して繰り返し使える電池を『二次電池』といいます。',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: 'ある濃度のうすい塩酸15cm³に、ある濃度のうすい水酸化ナトリウム水溶液10cm³を加えると、過不足なく反応し中性となった。この塩酸が10cm3あるとき、水酸化ナトリウム水溶液は何cm3で中性になるか。',
    a: '6cm³',
    b: '8cm³',
    c: '10cm³',
    d: '12cm³',
    explanation: 'この問題の解説\n塩酸と水酸化ナトリウムの反応比は3：2です。比例計算を使って解きましょう。',
    correct: 'a'
  },
  {
    check: 'G3_ryuge_E',
    question: '天体が、中心を通る軸を中心に自ら回転することを何というか。',
    a: '回転',
    b: '周回',
    c: '自転',
    d: '公転',
    explanation: 'この問題の解説\n地球は地軸を中心として自転します。',
    correct: 'c'
  },
  {
    check: 'G3_ryuge_E',
    question: '地球の自転の向きは、次のうちどの方位からどの方位か。',
    a: '北から南',
    b: '南から北',
    c: '東から西',
    d: '西から東',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: '天体は、東から西へ１日に１回転するように見える。このような天体の見かけの運動を何というか。',
    a: '日周運動',
    b: '年周運動',
    c: '見かけ運動',
    d: '天体運動',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G3_ryuge_E',
    question: '日周運動では、天体は一時間あたりに約何°の割合で動いているように見えるか。',
    a: '30°',
    b: '15°',
    c: '45°',
    d: '60°',
    explanation: 'この問題の解説\n日周運動において、天体は24時間で360°動いているように見えます。。',
    correct: 'b'
  },
  {
    check: 'G3_ryuge_E',
    question: '観測地から見て、太陽が真南にくることを何というか。',
    a: '天頂',
    b: '天球',
    c: '南中',
    d: '南中時刻',
    explanation: '',
    correct: 'c'
  },
  {
    check: 'G3_ryuge_E',
    question: '天体がほかの天体のまわりを回転することを何というか。',
    a: '回転',
    b: '周回',
    c: '自転',
    d: '公転',
    explanation: 'この問題の解説\n地球は太陽を中心として、その周りを公転します。',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: '地球は太陽のまわりを一年で何°回転するか。',
    a: '1°',
    b: '15°',
    c: '30°',
    d: '360°',
    explanation: 'この問題の解説\n地球は太陽のまわりを一年間で１周します。。',
    correct: 'd'
  },
  {
    check: 'G3_ryuge_E',
    question: '年周運動における、１年間の太陽の通り道を何というか。',
    a: '黄道',
    b: '赤道',
    c: '太道',
    d: '陽道',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G3_ryuge_E',
    question: '一年のうちで、日の出・日の入りが最も北よりになるのはいつか。',
    a: '春分の日',
    b: '夏至の日',
    c: '秋分の日',
    d: '冬至の日',
    explanation: 'この問題の解説\n夏至の日は、北半球において、一年の中で最も昼の長さが長くなり、南中高度も高くなります。',
    correct: 'b'
  },
  {
    check: 'G3_ryuge_E',
    question: '一年のうち、地軸の北側が太陽と反対側を向いているのはいつか。',
    a: '春分の日',
    b: '夏至の日',
    c: '秋分の日',
    d: '冬至の日',
    explanation: 'この問題の解説\n冬至の日は、北半球において、一年の中で最も昼の長さが短くなり、南中高度も低くなります。',
    correct: 'd'
  },

  //// 中３ 大正

  // 中３ 大正 英語

  {
    check: 'G3_taisho_E',
    question:'I have a friend (    ) can speak English.(    )に入るのを選べ。',
    a:'who',
    b:'which',
    c:'where',
    d:'when',
    explanation:'答え:a\n解説：先行詞が人で（　　）の後が主語無しの不完全文なので主格のwhoが入る。先行詞が物ならwhichを使う。',
    correct:'a'
  },
  {
    check: 'G3_taisho_E',
    question:'I want a bag which has a lot of pockets正しい和訳を選べ。',
    a:'私はポケットがたくさんあるカバンが欲しかった。',
    b:'私はポケットがたくさんあるカバンが欲しい。',
    c:'私はポケットがたくさんあるカバンを手に入れたい。',
    d:'私はポケットがたくさんあるカバンのどれか欲しい。',
    explanation:'答え:b\n解説：which～poketsまでのカタマリがa bagを修飾している。',
    correct:'b'
  },
  {
    check: 'G3_taisho_E',
    question:'The shop is popular among children. It sell colorful sweets.２つの文を正しくくっつけた文章を選べ。',
    a:'The shop is popular which sell colorful sweets among children.',
    b:'The shop is popular among children who sell colorful sweets.',
    c:'The shop is popular among children it which sell colorful sweets.',
    d:'The shop which sell colorful sweets is popular among children.',
    explanation:'答え:d\n解説：The shopとItがイコール関係なので主語のThe shopの後にwhichの関係代名詞節を置く。',
    correct:'d'
  },
  {
    check: 'G3_taisho_E',
    question:'「ユミはメガネをかけている背の高い女の子です。」（Yumi/wearing/tall/who/is/girl/glasses/is/a）５番目に来る単語は？',
    a:'girl',
    b:'who',
    c:'wearing',
    d:'a',
    explanation:'答え:a\n解説：正文Yumi is a tall girl who is wearing glasses.まず、ユミは背の高い女の子の文章を考えて、後から女の子の説明になるwhoの関係代名詞節を置く。',
    correct:'a'
  },
  {
    check: 'G3_taisho_E',
    question:'「スピーチをしている男性は興奮しているようです。」(excited/making/is/looks/that/a speech/the man)３番目に来る単語は？',
    a:'that',
    b:'excited',
    c:'is',
    d:'looks',
    explanation:'答え:c\n解説：正文The man that is making a speech looks excited.男性は興奮をしているという文章を考えて、今回は男性を説明しているのでThe manとlooksの間にthat is making a speechの関係代名詞節を入れる。',
    correct:'c'
  },
  {
    check: 'G3_taisho_E',
    question:'「マイクは青い目をした少年です。」正しい英文を選べ。',
    a:'Mike is the boy which has blue eyes.',
    b:'Mike is the boy who has blue eyes',
    c:'Mike who has blue eyes is the boy.',
    d:'Mike which has blue eyes is the boy.',
    explanation:'答え:b\n解説：cを選ぶと「青い目をしたマイクは少年です」となるので間違い。',
    correct:'b'
  },

  //中３ 大正 理科
  {
    check: 'G3_taisho_SI',
    question: '酸とアルカリが互いの性質を打ち消しあうような反応を何というか。',
    a: '化学反応',
    b: '吸熱反応',
    c: '中和反応',
    d: '中性反応',
    explanation: '',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SI',
    question: 'すべての中和反応で発生するものにおいて適当でないものは次のうちどれ。',
    a: '塩化ナトリウム',
    b: '塩',
    c: '水',
    d: '熱',
    explanation: 'この問題の解説\n中和反応では、水と塩(えん)、さらに熱も発生します。',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SI',
    question: '次のうち酸性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '炭酸水素ナトリウム',
    d: '硫酸',
    explanation: 'この問題の解説\n〇〇酸となるものは酸性を示します。',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SI',
    question: '次のうちアルカリ性を示す物質はどれ。',
    a: '塩化ナトリウム',
    b: '水酸化ナトリウム',
    c: '硫酸',
    d: '酢酸',
    explanation: 'この問題の解説\n水酸化〇〇となるものはアルカリ性を示しますが、アルカリ性の物質の中にはアンモニア水のように『水酸化』がつかない物質もあります。',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SI',
    question: '次のうち、酸性を示すイオンはどれ。',
    a: '水素イオン',
    b: '水酸化物イオン',
    c: '塩化物イオン',
    d: '硫酸イオン',
    explanation: 'この問題の解説\n酸性の物質が電離すると水素イオンが発生します。',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SI',
    question: '次のうちアルカリ性を示すイオンはどれ。',
    a: '水素イオン',
    b: '水酸化物イオン',
    c: '塩化物イオン',
    d: 'ナトリウムイオン',
    explanation: 'この問題の解説\nアルカリ性の物質が電離すると水酸化物イオンが発生します。',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SI',
    question: '中性を示すpHは次のうちどれ。',
    a: '0',
    b: '6',
    c: '7',
    d: '14',
    explanation: 'この問題の解説\npHは0～14で小さくなるほど強い酸性を示し、大きくなるほど強いアルカリ性を示します。',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SI',
    question: 'BTB溶液に塩酸を滴下したとき、溶液は何色になるか。',
    a: '青色',
    b: '黄色',
    c: '緑色',
    d: '赤色',
    explanation: 'この問題の解説\nBTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色を示します。',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SI',
    question: '塩化銅水溶液を電気分解するとき、陽極のほうへ移動するイオンはどれ。',
    a: '銅イオン',
    b: '塩化物イオン',
    c: '水素イオン',
    d: '水酸化物イオン',
    explanation: 'この問題の解説\n電気分解をすると陽極に陰イオンが、陰極に陽イオンが移動します。',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SI',
    question: '塩酸と水酸化ナトリウム水溶液の中和でできる塩はどれ。',
    a: '硫酸バリウム',
    b: '水',
    c: '硝酸ナトリウム',
    d: '塩化ナトリウム',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SI',
    question: '次のうち、一次電池はどれ。',
    a: 'ニッケル水素電池',
    b: 'リチウムイオン電池',
    c: '鉛蓄電池',
    d: '乾電池',
    explanation: 'この問題の解説\n使い捨ての電池を『一次電池』、充電して繰り返し使える電池を『二次電池』といいます。',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SI',
    question: 'ある濃度のうすい塩酸15cm³に、ある濃度のうすい水酸化ナトリウム水溶液10cm³を加えると、過不足なく反応し中性となった。この塩酸が10cm3あるとき、水酸化ナトリウム水溶液は何cm3で中性になるか。',
    a: '6cm³',
    b: '8cm³',
    c: '10cm³',
    d: '12cm³',
    explanation: 'この問題の解説\n塩酸と水酸化ナトリウムの反応比は3：2です。比例計算を使って解きましょう。',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SI',
    question: '石油を原料として人工的につくられた有機物である素材を何というか。',
    a: 'プラスチック',
    b: 'ガラス',
    c: '無機物',
    d: '炭素',
    explanation: '',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SI',
    question: 'ポリエチレンテレフタラートの略称をアルファベットで表すと何か。',
    a: 'PE',
    b: 'PVC',
    c: 'PET',
    d: 'PP',
    explanation: 'この問題の解説\n他の選択肢は順に、PE→ポリエチレン、PVC→ポリ塩化ビニル、PP→ポリプロピレンです。\nまたPETは、透明で圧力に強いという特性から、ペットボトルなどに使われます。',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SI',
    question: '化石燃料を燃焼させて高温・高圧の水蒸気をつくり、発電機のタービンを回す発電方法を何というか。',
    a: '風力発電',
    b: '水力発電',
    c: '原子力発電',
    d: '火力発電',
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SI',
    question: 'ウラン原子が核分裂するときのエネルギーで高温・高圧の水蒸気をつくり、発電機のタービンを回す発電方法を何というか。',
    a: '風力発電',
    b: '水力発電',
    c: '原子力発電',
    d: '火力発電',
    explanation: '',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SI',
    question: '稲わら、家畜の糞尿、間伐材などの、エネルギーとして利用できる生物体を使って発電する方法を何というか。',
    a: '火力発電',
    b: 'バイオマス発電',
    c: '原子力発電',
    d: '太陽光発電',
    explanation: '',
    correct: 'b'
  },

  // 中３ 大正 社会
  {
    check: 'G3_taisho_SS',
    question: '第１問\n代表者の話し合いによって政治を行うシステムを何という？',
    a: '直接民主制',
    b: '間接民主制',
    c: '王様じゃんけん',
    d: '井戸端会議',
    explanation: 'この問題の解説\n答え：b\naの直接民主制はみんなで話し合う、\ndの井戸端会議はお母さんたちの世間話ですね！',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SS',
    question: '第２問\n憲法は、「国の○○○○」と位置付けられているが〇に入る４文字は？',
    a: '最高法律',
    b: '最高規律',
    c: '最高法規',
    d: 'ベホイミ',
    explanation: 'この問題の解説\n答え：c\n本当にある言葉はcとdだけですね。\ndのベホイミはドラクエの回復する魔法ですね！',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SS',
    question: '第３問\n政治権力を分散させて、権力の集中を防ぐしくみを何という？',
    a: '地方分権',
    b: '権力分立',
    c: '絶対王政',
    d: '仲良しこよし',
    explanation: 'この問題の解説\n答え：b\nこれも・・・bしかないっすね！\n(^^)/ちなみに、日本の場合は「三権分立」とも呼びますね！',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SS',
    question: '第４問\n権力分立の重要性を主張したフランス人はだれ？',
    a: 'ロック',
    b: 'ルソー',
    c: 'ナポレオン',
    d: 'モンテスキュー',
    explanation: 'この問題の解説\n答え：d\nこれはSランク！\naは『統治論』\nbは『社会契約論』\ncはフランス革命後に皇帝になりましたね！\ndは『法の精神』',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SS',
    question: '第５問\n三権分立で、国会は○○権をもつ。○○に入る２文字は？',
    a: '立法',
    b: '司法',
    c: '行政',
    d: '営業',
    explanation: 'この問題の解説\n答え：a\n立法権とは、法律を定めることができる権利ですね！\n国の「唯一の立法機関」と定められています！',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SS',
    question: '第６問\n絶対王政のような人の支配ではなく、権力を持つ人も法に従わなければならないという考え方を何の支配という？',
    a: '神',
    b: '法',
    c: '鬼',
    d: 'サーモン',
    explanation: 'この問題の解説\n答え：b\n「法の支配」とは、国王や政府も法（ルールや基準）を守らなければならない！ってことです！',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SS',
    question: '第７問\n大日本帝国憲法をつくるとき、参考にした国は？',
    a: 'プロイセン',
    b: 'イギリス',
    c: 'フランス',
    d: '集まれどうぶつの森',
    explanation: 'この問題の解説\n答え：a\nプロイセンとは今のドイツのことです！',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SS',
    question: '第８問\n現在の日本国憲法の公布日は？',
    a: '1945年11月3日',
    b: '1946年11月3日',
    c: '1946年 5月3日',
    d: '1947年 5月3日',
    explanation: 'この問題の解説\n答え：b\n「公布」とは発表することです！\n憲法を使い始めることになったのは、dの1947年5月3日が「施行」日です！',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SS',
    question: '第９問\n日本国憲法では、主権者はだれ？',
    a: '国民',
    b: '内閣総理大臣',
    c: '天皇',
    d: 'くまモン',
    explanation: 'この問題の解説\n答え：a\n現在は、「国民主権」ですね！\n大日本帝国憲法の時代は、「天皇主権」です！',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１０問\n憲法第１条「天皇は、日本国の○○」・・・○に入る２文字は？',
    a: '神様',
    b: '仏様',
    c: '象徴',
    d: '代表',
    explanation: 'この問題の解説\n答え：c\n「象徴」とは「シンボル」のことです！',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１１問\n天皇の仕事のことを漢字４文字で何という？',
    a: '国事行為',
    b: '重要任務',
    c: '代表行為',
    d: '国際行為',
    explanation: 'この問題の解説\n答え：a\n国事行為には、内閣総理大臣と最高裁判所長官の任命や、法律の公布、表彰などがあります！',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１２問\n国民が国会を通じて政治のあり方を決めるしくみを何という？',
    a: '議院内閣制',
    b: '小選挙区比例代表並立制',
    c: '議会制民主主義',
    d: '効率と公正',
    explanation: 'この問題の解説\n答え：c\n議会とは国会のことです。\n国会で、国民がそれぞれ選んだ代表者が話し合います。',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１３問\n憲法改正の手続きについては、第何条に書かれていますか？',
    a: '前文',
    b: '第１条',
    c: '第９条',
    d: '第９６条',
    explanation: 'この問題の解説\n答え：d\n第１条は、天皇について。\n第９条は平和主義について。',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１４問\n憲法を改正してよいか、国民に問うことを４文字で何という？',
    a: '国民投票',
    b: '国民審査',
    c: '国民確認',
    d: '阪神優勝',
    explanation: 'この問題の解説\n答え：a\n第１条は、天皇について。\n第９条は平和主義について。',
    correct: 'a'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１５問\n1689年に制定された、議会の承認なしには国王は課税や法律の変更ができないと定めた章典は？',
    a: 'ハムラビ章典',
    b: '自由の章典',
    c: '国語辞典',
    d: '権利の章典',
    explanation: 'この問題の解説\n答え：d\n名誉革命のあと、権利の章典が定められました。',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１６問\n二院制について、第二次世界大戦終戦までは、衆議院と何院で構成されていましたか？',
    a: '華族院',
    b: '貴族院',
    c: '参議院',
    d: '病院',
    explanation: 'この問題の解説\n答え：b\n戦後、GHQにより、貴族院が解散させられ、参議院がつくられました。',
    correct: 'b'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１７問\n衆議院議員の被選挙権は何歳以上？',
    a: '１８歳',
    b: '２０歳',
    c: '２５歳',
    d: '３０歳',
    explanation: 'この問題の解説\n答え：c\n参議院と都道府県知事の被選挙権が30歳！\n選挙権はどれも18歳！',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１８問\n衆議院議員の任期は何年？',
    a: '１年',
    b: '２年',
    c: '４年',
    d: '６年',
    explanation: 'この問題の解説\n答え：c\n参議院は６年で、３年ごとに改選します！！',
    correct: 'c'
  },
  {
    check: 'G3_taisho_SS',
    question: '第１９問\n通常国会の会期は何日？',
    a: '１日',
    b: '３０日',
    c: '９０日',
    d: '１５０日',
    explanation: 'この問題の解説\n答え：d\n通常国会は１月に召集され、予算の議決を行います！',
    correct: 'd'
  },
  {
    check: 'G3_taisho_SS',
    question: '第２０問\n内閣について、内閣総理大臣以外の大臣を何といいますか？',
    a: '社長',
    b: '大蔵大臣',
    c: '国務大臣',
    d: 'おっさん',
    explanation: 'この問題の解説\n答え：c\n国務大臣の過半数は国会議員であること、\nすべて文民であることが必要と定められています！',
    correct: 'c'
  },

];

export { quizDataJp }