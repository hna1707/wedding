$(function (){

    $('.btn_total').click(function(){
        console.log('햄버거버튼 클릭!!')
        $('.nav-wrapper').addClass('open')
    });
    
    $('.btn_totalClose').click(function(){
        $('.nav-wrapper').removeClass('open')
    });

    let mouseCursor = document.querySelector(".cursor");
        let Links = document.querySelectorAll("a"); //메뉴 링크
        //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
        window.addEventListener("scroll", cursor);
        window.addEventListener("mousemove", cursor);
        //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
        function cursor(e) {
          mouseCursor.style.left = e.pageX + "px";
          mouseCursor.style.top = e.pageY - scrollY + "px";
      }

    new WOW().init();
    
});

