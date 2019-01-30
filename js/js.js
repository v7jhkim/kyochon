



$(function(){
    $(".depth2").hide();

    $(".depth1 > li").hover(
        function(){
        $(this).find(".depth2").stop().slideDown();
        },
        function(){
        $(this).find(".depth2").stop().slideUp();}
    )
})
