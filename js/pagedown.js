

$(function(){
    var s1=$(".bxslider").offset().top;
    var s2=$(".scrollup").offset().top;
    $(document).scroll(function(){
    
        var s= $(window).scrollTop();
        if(s>s1){
            $("#banner2").animate({
                marginTop: "100px"
                
            },3000);
        }
      })
})