//define functions here

$(document).ready(function(){

// call functions here
$('p').on("getIt", function() {
  alert("Hey!");
}


$("form").on("submit", function() {
  submitIt()
})
});

function submitIt() {
  alert('Your form is going to be submitted now.')
})
}