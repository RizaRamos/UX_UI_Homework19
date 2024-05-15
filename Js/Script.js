console.log ("your index file is working")

$(".navigation-bar").on("click", function(){
    if ($(this).hasClass("regular")) {
      $("#navigation-container").attr("href", "css/blank.css")
    }
    else if ($(this).hasClass("blue")){
      $("#navigation-container").attr("href", "css/blue.css")
    }
    else if ($(this).hasClass("dark")){
      $("#navigation-container").attr("href", "css/dark.css")
    }
  });
