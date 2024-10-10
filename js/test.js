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




    //첫번째 dot
const wrapper = document.querySelector('.cards-wrapper');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0; //기본활성표시 도트번호 0번

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
// 각 점에 클릭이벤트 추가
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if=클릭한점이 이미 활성화 돼있으면 아무것도 하지 않는다
    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let 픽셀 = -wrapper의부모너비 * 클릭하는 dot의 넘버
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
      //       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
      //       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
      //       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});

//두번째 dot
const wrapper1 = document.querySelector('.cards-wrapper1');
// console.log(wrapper.clientWidth);

// grab the dots
const dots1 = document.querySelectorAll('.dot1');
// the default active dot num which is array[0]
let activeDot = 0; //기본활성표시 도트번호 0번

dots1.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
// 각 점에 클릭이벤트 추가
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if=클릭한점이 이미 활성화 돼있으면 아무것도 하지 않는다
    if(clickedDotNum == activeDot) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper1.parentElement.clientWidth;
      // let 픽셀 = -wrapper의부모너비 * 클릭하는 dot의 넘버
      let pixels = -displayArea * clickedDotNum
      wrapper1.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots1[activeDot].classList.remove('active');
//       add the active class to the clicked dot
      dots1[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDot = clickedDotNum;
    }
  });
});


//세번째 dot
const wrapper2 = document.querySelector('.cards-wrapper2');
// console.log(wrapper.clientWidth);

// grab the dots
const dots2 = document.querySelectorAll('.dot2');
// the default active dot num which is array[0]
let activeDot2 = 0; //기본활성표시 도트번호 0번

dots2.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
// 각 점에 클릭이벤트 추가
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if=클릭한점이 이미 활성화 돼있으면 아무것도 하지 않는다
    if(clickedDotNum == activeDot2) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper2.parentElement.clientWidth;
      // let 픽셀 = -wrapper의부모너비 * 클릭하는 dot의 넘버
      let pixels = -displayArea * clickedDotNum
      wrapper2.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots2[activeDot2].classList.remove('active');
//       add the active class to the clicked dot
      dots2[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDot2 = clickedDotNum;
    }
  });
});
}