
window.onload = function () {
  //첫번째 dot
  const wrapper = document.querySelector('.phone');
  // console.log(wrapper.clientWidth);

  // grab the dots
  const dots = document.querySelectorAll('.color');
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
      if (clickedDotNum == activeDotNum) {
        // console.log('active');
        return;
      }
      else {
        // console.log('not active');
        // shift the wrapper
        let displayArea = wrapper.parentElement.clientWidth;
        // let 픽셀 = -wrapper의부모너비 * 클릭하는 dot의 넘버
        let pixels = -displayArea * clickedDotNum
        wrapper.style.transform = 'translateX(' + pixels + 'px)';
        //       remove the active class from the active dot
        dots[activeDotNum].classList.remove('active');
        //       add the active class to the clicked dot
        dots[clickedDotNum].classList.add('active');
        //       now set the active dot number to the clicked dot;
        activeDotNum = clickedDotNum;
      }
    });
  });

//hambtn
const hbg = document.querySelector('.hambtn');
const menu = document.querySelector('.menu');

hbg.addEventListener('click', () => {
    menu.classList.toggle('active');
});
}