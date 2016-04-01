var $Body = $('body');

var $btnShowHide = $('.btn-show-hide');
var $Box = $('.box');

var $btnMove = $('.btn-move');
var $Diamond = $('.diamond');

var $btnColEx = $('.btn-collapse-expand');
var $Panel = $('.panel');

var $btnAppend = $('.btn-append');
var $List = $('.list');

var $btnBounce = $('.btn-bounce');
var $Circle = $('.circle');

$btnShowHide.on('click, function' (){
  $box.toggleClass('showbox');
});

$btnMove.on('click, function' (){
  $diamond.toggleClass('button-slide');
});

$btnColEx.on('click, function' (){
  $panel.toggleClass('collapse-panel');
});

$btnBounce.on('click, function' (){
  $circle.toggleClass('bounce');
});
