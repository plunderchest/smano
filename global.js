$(document).ready(

    function(){

        $("#homePage").show();
        $("#homeBtn").parents("li").addClass("active");
        
        $("#resumeBtn").click(function(){
            resetNav();
            $(this).parents("li").addClass("active");
            $("#resumePage").show();
        });
        $("#samplesBtn").click(function(){
            resetNav();
            $(this).parents("li").addClass("active");
            $("#samplesPage").show();
        });
        $("#contactBtn").click(function(){
            resetNav();
            $(this).parents("li").addClass("active");
            $("#contactPage").show();
        });
        $("#homeBtn").click(function(){
            resetNav();
            $(this).parents("li").addClass("active");
            $("#homePage").show();
        });

    }
   
);

function resetNav() {
    $(".actions li").removeClass("active");
    $(".page").hide();
}