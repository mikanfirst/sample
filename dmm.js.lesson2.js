// ◇　関数　◇

// メイン部分
// var alertString;
// alertString = addString("WebCamp");

// 作成した関数を呼び出す
// alert(alertString);

// 作成した関数
// function addString(strA){
//   var addStr = "Hello " + strA;
//   return addStr
// }

// ◇　ダイアログを表示させて値を入力させる
// var promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);


//  ◇　複数の関数を定義　◇
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
alert('あなたの選んだ手は' + user_hand + 'です。');

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavascriptの選んだ手は' + js_hand + 'です。 \n結果は' + judge + 'です。');

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  // 関数内の「3」は、ランダム生成したい整数値の+1を指定　　つまり↓の整数値の最大整数値2であるから+1の[3]を記入
  var hand_name;
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け"
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;
}