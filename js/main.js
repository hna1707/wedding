$(function (){

    $('.btn_total').click(function(){
        console.log('햄버거버튼 클릭!!')
        $('.nav-wrapper').addClass('open')
    });
    
    $('.btn_totalClose').click(function(){
        $('.nav-wrapper').removeClass('open')
    });

    new WOW().init();
    
});

