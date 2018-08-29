

$(document).ready(function(){

getIt();
frameIt();

});

function getIt() {
  $('p').on('click', function(e) {
    alert ('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty');
  })
}