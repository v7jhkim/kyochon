
// script.js

$(function(){

    // 2단계 메뉴 닫기
  
    $('.depth2').hide();
  
   
  
    // 2단계 메뉴 hover
  
    $('.depth1 > li').hover(
  
      // 마우스 올라갔을때
  
      function(){
  
        // 현재 선택한 목록만 열리는 거
  
        // $(this).find('.depth2').stop().slideDown();
  
        
  
        // 다 열리게
  
        $('.depth2').stop().slideDown(),
        $(this).find(".depth2").stop().slideDown().css({"background":"rgba(200, 200, 200, 1"});

  
      },
  
      // 마우스 나갔을때
  
      function(){
  
        $('.depth2').stop().slideUp(),
        $(this).find(".depth2").stop().slideUp().css({"background":"rgba(200, 200, 200, 0.5"}) 
      }
  
    );
    // 페이지 다운 효과
    var s1 = $("#utv").offset().top;
    var s3 = $("#sns_photo").offset().top;
    var s2 = $("#news_box").offset().top;
    var s4 = $("#foundation").offset().top;
    $(document).scroll(function(){
    
      var s= $(window).scrollTop();
      if(s>=s1){
        $("#news img").fadeIn(2000);
        $(".circle1").css({"background":"#bf2428"})
        $(".circle2").css({"background":"#ccc"})
        $(".circle3").css({"background":"#ccc"})
        
      }
      if(s>=s3){
        $("#news_box").fadeIn(2000);
        $(".circle2").css({"background":"#bf2428"})
        $(".circle1").css({"background":"#ccc"})
        $(".circle3").css({"background":"#ccc"})
      }
      if(s>=s4){
        $(".circle3").css({"background":"#bf2428"})
        $(".circle1").css({"background":"#ccc"})
        $(".circle2").css({"background":"#ccc"})
      }
      
      
    })
    
  });