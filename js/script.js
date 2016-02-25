// Note that the following is a shorthand for the DOMReady event
$(function() {

});
var  n = 13;
$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$('#before p').first().before("<h1>Hello world</h1>")
});

$("#css1 button").click(function() {
  n++
  $('#css1 p').css("font-size",n+"px")
});

$("#css2 button").click(function() {
  $('#css2 p').css({"font-size":"15px","color":"salmon"})
});

$("#attr1 button").click(function() {
  console.log($('#attr1 a').attr("href"));
});

$("#attr2 button").click(function() {
  $('#attr2 a').attr("href","http://www.google.com")
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {

    if($("#class2 button").hasClass("lead")){
      alert("yes")
    }
});

$("#form1 button").click(function() {
  console.log($("#form1 input").val());
});

$("#form2 button").click(function() {
  $("#form2 input").val("Phil")
});

// handle the mouseover event here
$("#mouse img").mouseover(function() {
  $("#mouse img").css("width","50%")
})
$("#mouse img").mouseout(function() {
  $("#mouse img").css("width","20%")
})
// handle the form events here

$("#formEvents form").submit(function(event) {
  event.preventDefault()
  console.log($("#inputEmail3").val());
  console.log($("#inputPassword3").val());
  console.log($("#formEvents input[type=checkbox]").prop("checked"))
});