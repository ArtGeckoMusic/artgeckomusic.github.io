$(document).ready(() => {
  $('#headerHamb').click(() => {
    // console.log('click');
    $('.sideNav').toggleClass('active');
  });
  $('.closeSideNav').click(() => {
    // console.log('click');
    $('.sideNav').toggleClass('active');
  });
});