$(document).ready(function () {

    $('.moBtn').on('click', function () {

        var isOn = $('#moPanel').hasClass('on');

        if (isOn) {
            $('#moPanel').removeClass('on');
            $(this).removeClass('on');
        } else {
            $('#moPanel').addClass('on');
            $(this).addClass('on');
        }
    });

    $('#moPanel>li').on('click', function () {
        var depOn = $(this).children('.moDepth').hasClass('on');

        if (depOn) {
            $(this).children('.moDepth').removeClass('on');
            $(this).children('.moDepth').slideUp();
        } else {
            $(this).children('.moDepth').addClass('on');
            $(this).children('.moDepth').stop().slideDown();
        }


    });

    $('#header>ul>li').on("mouseenter", function () {

        $(this).children(".Depth").stop().slideDown();

    });

    $('#header>ul>li').on("mouseleave", function () {

        $(this).children(".Depth").stop().slideUp();
    });


    function showRotate() {
        $('#contents>.con2>.pan1>div').first().appendTo('#contents>.con2>.pan1');
        $('#contents>.con2>.pan1>div').removeClass('on');
        $('#contents>.con2>.pan1>div').first().addClass('on');

        $('#contents>.con2>.pan2>div').first().appendTo('#contents>.con2>.pan2');
        $('#contents>.con2>.pan2>div').removeClass('on');
        $('#contents>.con2>.pan2>div').first().addClass('on');

        $('#contents>.con2>.pan3>div').first().appendTo('#contents>.con2>.pan3');
        $('#contents>.con2>.pan3>div').removeClass('on');
        $('#contents>.con2>.pan3>div').first().addClass('on');

        $('#contents>.con2>.pan4>div').first().appendTo('#contents>.con2>.pan4');
        $('#contents>.con2>.pan4>div').removeClass('on');
        $('#contents>.con2>.pan4>div').first().addClass('on');
    }
    setInterval(showRotate, 5000);

    var slideImg = $(".img2");

    var slides = slideImg.find(">img");

    var currentIndex = 0;

    var slideCount = slides.size();


    function showNext() {
        var nextIndex = (currentIndex + 1) % slideCount;

        slides.eq(currentIndex).fadeOut(800);
        slides.eq(nextIndex).fadeIn(800);
        currentIndex = nextIndex;
    }
    setInterval(showNext, 3000);

    $('.btn').on('click', function (e) {
        e.preventDefault();

        var isOn2 = $(this).next('div').hasClass('on');
        var isOn1 = $(this).next('div').hasClass('on');

        if (isOn1) {
            $(this).next('div').removeClass('on');
        } else if (isOn2) {
            $(this).next('div').removeClass('on');
        } else {
            $(this).next('div').addClass('on');
        }
    });

});