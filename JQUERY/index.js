$("button").click(function () {
   
    $(this).addClass("pressed");
    setTimeout(function()  {
        $("button").removeClass("pressed")
    }, 500);
})