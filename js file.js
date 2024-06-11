$(function(){
    $("#button").click(function(){
        $("body").toggleClass("change-background")
        $("span").text($("span").text() === "Light Mode" ? "Dark Mode": "Light Mode")
    });
    $("#button").click(function(){
        $(this).find("i").toggleClass("fa-moon-o fa-sun-o")
    });
});