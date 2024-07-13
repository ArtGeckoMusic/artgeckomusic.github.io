$(document).ready(() => {
  

});

function showOrHideProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productValue = urlParams.get('product');
  // console.log(productValue);  

  $('#' + productValue).css('display', 'flex');
}

// wait for shopify cart bizness to show up
var checkExist = setInterval(function() {
  if ($('.shopify-buy-frame--toggle').find('iframe').length) {
    //  console.log("Exists!");
     clearInterval(checkExist);
     customizeCartButton();
  }
  
  else {
    // console.log('nope');
  }
}, 10); // check every 50ms


function customizeCartButton() {
  console.log('modding cart button');
  
  let cssLink = document.createElement('link');
  cssLink.href = '../css/style.css'; 
  cssLink.rel = 'stylesheet'; 
  cssLink.type = 'text/css'; 
  $('.shopify-buy-frame--toggle').find('iframe').contents()[0].head.appendChild(cssLink);


  let cart = $('.shopify-buy-frame--toggle').find('iframe').contents().find('.shopify-buy__cart-toggle')[0];

  // let newCartIcon = document.createElement('img');
  // newCartIcon.src = '../icons/cartWhite.png';

  // cart.appendChild(newCartIcon);
}