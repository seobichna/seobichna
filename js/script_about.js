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


// about > timeline > 배경색 변경

$(function () {

    gsap.timeline({
        scrollTrigger: {
            trigger: '.timeline',
            start: '-30% 0%',
            end: '0% 0%',
            scrub: 1,
            //markers : true
        }
    })

        .to('.timeline', { backgroundColor: '#FEEDE2', ease: 'none', duration: '0.05' }, 0)
});

// about > hobby > 배경색 변경

$(function () {

    gsap.timeline({
        scrollTrigger: {
            trigger: '.hobby',
            start: '-50% 0%',
            end: '0% 0%',
            scrub: 1,
            //markers : true
        }
    })

        .to('.hobby', { backgroundColor: '#FFFAF4', ease: 'none', duration: '0.05' }, 0)
});


//about > hobby > simplyscroll
$(function () {
    $("#scroller1").simplyScroll({
        frameRate: 8
    });
});


// about > hobby > ScrollTrigger

$(function () {
    gsap.registerPlugin(ScrollTrigger);

    let list = gsap.utils.toArray('.hobby .imgScroll li')
    let listA = gsap.utils.toArray('.hobby .imgScroll .a')
    let listB = gsap.utils.toArray('.hobby .imgScroll .b')
    let listC = gsap.utils.toArray('.hobby .imgScroll .c')
    let listD = gsap.utils.toArray('.hobby .imgScroll .d')
    let listE = gsap.utils.toArray('.hobby .imgScroll .e')
    let listF = gsap.utils.toArray('.hobby .imgScroll .f')
    let listG = gsap.utils.toArray('.hobby .imgScroll .g')

    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.hobby',
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '150%',
            //   markers : true
        }
    });

    gsap.to(listA, {
        y: 50,
        x: 10,
        rotation: -20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listB, {
        y: 80,
        x: 20,
        rotation: 20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listC, {
        y: 30,
        rotation: -20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listD, {
        y: 30,
        rotation: 20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listE, {
        y: 50,
        rotation: -20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listF, {
        y: 30,
        rotation: 20,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });

    gsap.to(listG, {
        y: 30,
        rotation: -15,
        scrollTrigger: {
            trigger: '.hobby',
            spin: true,
            scrub: 1,
            end: '150%',
        }
    });
});


// about > visual 이미지 커버업

$(function () {
    gsap.utils.toArray('.visual').forEach(function (visual) {

        gsap.timeline({

            scrollTrigger: {
                trigger: visual,
                start: '50% 100%',
                toggleClass: { 'targets': visual, className: 'active' },
                // markers:true,
                scrub: 1
            }
        })
    })
});


