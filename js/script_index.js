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


// foter> svg - deco1
$(function () {
    $('.svgAni').find('#svg01').each(function (i, path) {
        var length = path.getTotalLength();
        //alert(length);  
    });
});


//index > introducebg > container > opacity 조정
$(function () {

    gsap.timeline({
        scrollTrigger: {
            trigger: '.introducebg .container',
            start: '-200% 0%',
            end: '-100% 0%',
            scrub: 1,
            //markers : true
        }
    })

        .to('.introducebg .container', { opacity: '1', ease: 'none', duration: '0.05' }, 0)
});

// index > about > 배경색 변경

$(function () {

    gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: '-30% 0%',
            end: '0% 0%',
            scrub: 1,
            // markers : true
        }
    })

        .to('.about', { backgroundColor: '#FFFAF4', ease: 'none', duration: '0.05' }, 0)

});

// index > visual

$(function () {

    // index > visualBg 움직임    

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.visual .inner .visualBg',

            start: '10% 90%',
            end: '+=700',
            scrub: 3,
            Transform: 'top center',
            //markers: true
        }
    });

    tl.to('.visual .inner .visualBg', {
        y: 10,
        rotation: 12,

    })

    tl.to('.visual .inner .visualBg', {
        y: 40,
        rotation: -6,
    })

    tl.to('.visual .inner .visualBg', {
        y: 40,
        rotation: 6,
    })

    tl.to('.visual .inner .visualBg', {
        y: 60,
        rotation: 0,
    })

    // index > ball 움직임

    gsap.to('.visual .inner .ball', {
        scrollTrigger: {
            trigger: '.visual .inner .ball',
            start: 'center center',
            end: '0%',
            scrub: 3,
            //markers: true,
        },
        x: 1300,
        y: 200,
        rotation: 360,

    });
});

// index > visual > visualBg > svg - deco2
$(function () {
    $('.waveLine').find('#svg02').each(function (i, path) {
        var length = path.getTotalLength();
        //alert(length);  
    });
});


// index> about ballBtn
$(function () {
    $('.about .ballBtn li').on('click', function () {
        $('.about .ballBtn li').removeClass('on');
        $(this).addClass('on');
    });

    $('.about .ballBtn li').on('click', function () {
        var index2 = $('.about .ballBtn li').index($(this));
        $('.about .photoBall li').removeClass('on');
        $('.about .textBall li').removeClass('on');
        $('.about .photoBall li:eq(' + index2 + ')').addClass('on');
        $('.about .textBall li:eq(' + index2 + ')').addClass('on');
        $(this).addClass('on');
    });

});
