//define functions here

$(document).ready(function(){

// call functions here
$('p').on("click", function() {
  alert("Hey!");
});


$("form").on("submit", function() {
  submitIt()
});

$(document).on('keyup', function(key) {
  if (key.which == 71){
    alert('r was pressed');
  }
});


}

function window.submitIt() {
  alert('You clicked G')
}


function window.submitIt() {
  alert('Your form is going to be submitted now.')
}
