// a를 클릭했을때 위로 튕기는 이벤트 제거
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});


//gnb open & close
$(function () {
    $(".innerHeader .menuOpen").on("click", function () {
        $(".gnb").addClass("on");
    });
    $(".menuClose").on("click", function () {
        $(".gnb").removeClass("on");
    });
});


// header 영역 스크롤 방향 이벤트 (스크롤 없애기)
$(function () {
    var prevScrollTop = 0;
    document.addEventListener('scroll', function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
});


// 스크롤라
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});


// splitting.js
$(function () {
    Splitting();
});

$(function () {

    $("#scroller4").simplyScroll({
        frameRate: 8
    });

    $("#scroller5").simplyScroll({
        frameRate: 8
    });
});




// foter> svg - deco1
$(function () {
    $('.svgAni').find('#svg01').each(function (i, path) {
        var length = path.getTotalLength();
        //alert(length);  
    });
});