//define functions here

$(document).ready(function(){

// call functions here
$('p').on("click", function() {
  alert("Hey!");
});

$('img').on('load', function(){
  frameIt();
});

$("form").on("submit", function() {
  submitIt()
});

$(document).on('keyup', function(key) {
  if (key.which == 71){
    pressIt();
  }
});


}

function frameIt() {
  this.addClass(".tasty");
}

function pressIt() {
  alert('You clicked G')
}

function submitIt() {
  alert('Your form is going to be submitted now.')
}
