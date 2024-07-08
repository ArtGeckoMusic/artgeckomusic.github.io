$(document).ready(() => {
  
});


function showOrHideProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productValue = urlParams.get('product');
  console.log(productValue);  

  $('#' + productValue).css('display', 'block');
}
