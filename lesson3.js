// DMMjslesson 6章

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// ------------------------------------------------

// DMMjavascript ７章

// slideUp　←Upが大文字（２語に分かれるため）

// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// ↑ class名のみ異なるイベントを4つも記述しなければならない

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });
//  ↑thisイベントについて

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});