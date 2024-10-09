window.onload = function () {
    var SLIDE_TIME = 600,
        AUTO_TIME = 4000,

        $slideCnt = null,
        $slideBtnPrev = null,
        $slideBtnNext = null,
        $slideBtnIndi = null,
        $autoBtn = null,

        slideCntLength = 0,
        nextNum = 0,
        prevNum = 0,
        moveIng = false,
        play = null;

    $(document).ready(function () {
        init();
        initEvent();
    });

    function init() {
        $slideCnt = $(".slideCnt li");
        $slideBtnPrev = $(".btn .prev");
        $slideBtnNext = $(".btn .next");
        $slideBtnIndi = $(".indicator a");
        $autoBtn = $(".autoBtn");
        slideCntLength = $slideCnt.length;
    };

    function initEvent() {
        reset();
        $slideBtnNext.on("click", function () {
            next();
        });
        $slideBtnPrev.on("click", function () {
            prev();
        });
        $slideBtnIndi.on("click", function () {
            indi($(this).index());
        });
        $autoBtn.on("click", function () {
            autoMove();
        });
        autoPlay();
    };

    function autoMove() {
        if ($autoBtn.text() == "멈춤") {
            stopPlay();
        } else {
            autoPlay();
        };
    };

    function autoPlay() {
        $autoBtn.text("멈춤");
        play = setInterval(function () {
            next();
        }, AUTO_TIME);
    };

    function stopPlay() {
        $autoBtn.text("계속");
        clearInterval(play);
    };

    function reset() {
        $slideCnt.eq(0).siblings().css("left", "100%");
        $slideBtnIndi.eq(0).addClass("on");
    };

    function prev() {
        if (moveIng == false) {
            moveIng = true;
            nextNum--;
            if (nextNum < 0) {
                nextNum = slideCntLength - 1;
            };
            move(nextNum, prevNum, "-100%", "0", "100%");
            prevNum = nextNum;
        };
    };

    function next() {
        if (moveIng == false) {
            moveIng = true;
            nextNum++;
            if (nextNum >= slideCntLength) {
                nextNum = 0;
            };
            move(nextNum, prevNum, "100%", "0", "-100%");
            prevNum = nextNum;
        };
    };

    function move(after, before, afterSet, afterSpace, beforeSpace) {
        $slideCnt.eq(after).css("left", afterSet).animate({
            left: afterSpace
        }, SLIDE_TIME);
        $slideCnt.eq(before).animate({
            left: beforeSpace
        }, SLIDE_TIME, function () {
            moveIng = false;
        });
        $slideBtnIndi.eq(nextNum).addClass("on").siblings().removeClass("on");
    };

    function indi(indiNum) {
        if (moveIng == false) {
            moveIng = true;
            nextNum = indiNum;
            if (nextNum > prevNum) {
                move(nextNum, prevNum, "100%", "0", "-100%");
            } else if (nextNum < prevNum) {
                move(nextNum, prevNum, "-100%", "0", "100%");
            };
            prevNum = nextNum;
        };
    };
}