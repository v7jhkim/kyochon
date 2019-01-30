$(function(){
    var mySlider =$(".bxslider").bxSlider({
        auto:true, //자동재생
        pager:false, // 하단 위치 이동 버튼
        autoHover: true, //마우스 올라가면 정지
        controls: false, //이전 다음 버튼 표시
        autoControls: false, // 정지 재생버튼 표시
        mode : "fade",
        });

    $(".bxslider")
    .stop()
    .on("click", function(){
        mySlider.goToNextSlide();
        return false;
    })
        
})