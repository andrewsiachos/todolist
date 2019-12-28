//Check off specific todos by clicking
$("ul").on('click', "li", function () {

    $(this).toggleClass('completed');

});

//click on x to delete todos
$("ul").on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
   event.stopPropagation();
});


//Event when keypress
$("input[type='text']").keypress(function (event) {
   if(event.which === 13){
      var todoText =  $(this).val().toLowerCase();
      var arr = todoText.split(" ");
      for(let i=0;i<arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      todoText = arr.join(" ");
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
   }
});
$(".fa-plus").on('click', function () {
   $("input[type='text']").fadeToggle();
});


