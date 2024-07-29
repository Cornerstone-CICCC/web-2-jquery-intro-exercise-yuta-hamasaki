$(function() {
  $('#toggleButton').click(function(){
    $('#myParagraph').toggle()
  });
  
  $('#colorButton').on("click", function(){
    $('#colorDiv').css("backgroundColor", "yellow");
  });

  $('#addClassButton').click(function(){
    $('#classDiv').clone().insertAfter("#classDiv:last")
  })
  $('#removeClassButton').click(function(){
    if($("div#classDiv").length > 1){
      $('#classDiv').remove()
    }
  })

  $("#fadeInButton").click(function(){
    $("#fadeDiv").fadeIn()
  })
  $("#fadeOutButton").click(function(){
    $("#fadeDiv").fadeOut()
  })


  $("#slideUpButton").click(function(){
    $("#slideDiv").slideUp()
  })
  $("#slideDownButton").click(function(){
    $("#slideDiv").slideDown()
  })
})