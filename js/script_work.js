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


// work > simplyscroll
$(function () {

    $("#scroller2").simplyScroll({
        frameRate: 8
    });

    $("#scroller3").simplyScroll({
        frameRate: 8
    });
});


// work > myWork 이미지 스크롤

$(function () {
    gsap.registerPlugin(ScrollTrigger);
    //gellary
    let upBox = document.querySelectorAll('.upBox')

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.myWork',
            pin: true,
            scrub: 3,
            start: 'top top',
            end: '+=200%',
            //markers: true
        }
    })
    tl.from(upBox, { 'x': '250%', 'duration': '20', 'ease': 'none', 'stagger': '20' })
    tl.to(upBox, { 'x': '0' }, '+=0')

});


// work > workList1 >list 가로 스크롤

$(function () {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function () {

            let list = gsap.utils.toArray('.workList1 ul li');
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.workList1',
                    pin: true,
                    scrub: 3,
                    start: 'center center',
                    end: "200%",
                    //markers: true
                }
            });
        }
    })
});


// work > workList2 >li 스크롤

$(window).on('scroll resize', function () {
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    //alert(scrollPos);

    fixList();
    function fixList() {
        if (scrollPos > 7200) {
            $('.workList2 .inner ul li').removeClass('on');
            $('.workList2 .inner ul li:eq(0)').addClass('on');
        }

        if (scrollPos > 7600) {
            $('.workList2 .inner ul li').removeClass('on');
            $('.workList2 .inner ul li:eq(1)').addClass('on');
        }

        if (scrollPos > 8000) {
            $('.workList2 .inner ul li').removeClass('on');
            $('.workList2 .inner ul li:eq(2)').addClass('on');
        }

        if (scrollPos > 8400) {
            $('.workList2 .inner ul li').removeClass('on');
            $('.workList2 .inner ul li:eq(3)').addClass('on');
        }

        // if (scrollPos > 8800) {
        //     $('.workList2 .inner ul li').removeClass('on');
        //     $('.workList2 .inner ul li:eq(4)').addClass('on');
        // }
    }

});

//work > workList2 섹션 고정

$(function () {
    gsap.registerPlugin(ScrollTrigger);
    //gellary
    let upBox = document.querySelectorAll('.workList2')

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.workList2',
            pin: true,
            scrub: 3,
            start: 'top top',
            end: '+=200%', //시작부분에서 400% 스크롤 한 후 종료 (사진이 여러개면은 더 늘려야함)
            //markers: true
        }
    })
});


// work > NCS li 스크롤

$(window).on('scroll resize', function () {
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    //alert(scrollPos);

    fixList();
    function fixList() {
        if (scrollPos > 10019) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(0)').addClass('on');
        }

        if (scrollPos > 10219) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(1)').addClass('on');
        }

        if (scrollPos > 10419) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(2)').addClass('on');
        }

        if (scrollPos > 10619) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(3)').addClass('on');
        }

        if (scrollPos > 10819) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(4)').addClass('on');
        }

        if (scrollPos > 11019) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(5)').addClass('on');
        }

        if (scrollPos > 11219) {
            $('.NCS .inner ul li').removeClass('on');
            $('.NCS .inner ul li:eq(6)').addClass('on');
        }

    }

});


// work > NCS 섹션 고정

$(function () {
    gsap.registerPlugin(ScrollTrigger);
    //gellary
    let upBox = document.querySelectorAll('.NCS')

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.NCS',
            pin: true,
            scrub: 3,
            start: 'top top',
            end: '+=200%'
            //markers: true
        }
    })
});

// work > workList2 > 배경색 변경

$(function () {

    gsap.timeline({
        scrollTrigger: {
            trigger: '.workList2',
            start: '-50% 0%',
            end: '0% 0%',
            scrub: 1,
            //markers : true
        }
    })

        .to('.workList2', { backgroundColor: '#5B523E', ease: 'none', duration: '0.05' }, 0)
});