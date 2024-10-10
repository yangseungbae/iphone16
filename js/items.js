// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.
window.onload = function(){
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