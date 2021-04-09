
// ◇　変数の書き方↓　◇
// var hello = 'Hello World';
// alert(hello);


// ◇　字列を結合↓　◇
// alert('Hello' + 'World');


// ◇　文字列を変数に入れて結合↓　◇
// var str1 = 'Hello'
// var str2 = 'World!!'
// alert(str1 + str2)


// ◇　条件分岐　if文　↓　◇
// var orange = 120;
// var apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }


// ◇　while文　◇
// var max = 300;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num *5;
//   count = count + 1;
// }
// alert('5を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// ◇　for文　◇

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');