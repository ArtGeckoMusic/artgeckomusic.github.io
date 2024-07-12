$(document).ready(() => {
  

});

function showOrHideProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productValue = urlParams.get('product');
  console.log(productValue);  

  $('#' + productValue).css('display', 'flex');
}

// wait for shopify cart bizness to show up
var checkExist = setInterval(function() {
  if ($('.shopify-buy-frame--toggle').find('iframe').contents().find('.shopify-buy__cart-toggle').length) {
     console.log("Exists!");
     clearInterval(checkExist);
     customizeCartButton();
  }
  else {
    console.log('nope');
  }
}, 100); // check every 100ms


function customizeCartButton() {
  console.log('moving cart button');
  let cart = $('.shopify-buy-frame--toggle').find('iframe').contents().find('.shopify-buy__cart-toggle');
  cart.css('background', 'blue');
}