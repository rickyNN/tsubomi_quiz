const quizDataJp = [
  // {
  //   check: 'G2_kamei_SI',
  //   question: '答えはb ２年亀井',
  //   a: 'Take My Hand',
  //   b: 'When The Sun Goes Down',
  //   c: 'Song 2',
  //   d: 'Rewind',
  //   explanation: 'この問題の解説',
  //   correct: 'b'
  // },
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
  // {
  //   check: 'G1_kamei',
  //   question: '2個目の問題',
  //   a: 'Take My Hand',
  //   b: 'When The Sun Goes Down',
  //   c: 'Song 2',
  //   d: 'Rewind',
  //   explanation: 'この問題の解説',
  //   correct: 'd'
  // },
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
    question: '窒素の性質として正しいのはどれ？',
    a: '火を近づけると音を立てて燃える',
    b: '空気中に約78％含まれる',
    c: '窒素が含まれた物質を有機物と呼ぶ',
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
    explanation: '',
    correct: 'd'
  },
  {
    check: 'G2_kamei_SI',
    question: 'マグネシウムの酸化反応において、反応するマグネシウムと酸素の質量比は？',
    a: '1:4',
    b: '2:3',
    c: '3:2',
    d: '4:1',
    explanation: '',
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

];

export { quizDataJp }