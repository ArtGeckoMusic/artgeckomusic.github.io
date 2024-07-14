$(document).ready(() => {
  $('.shopify-buy__cart-toggle__count').on('DOMSubtreeModified', function(){
    console.log('changed');
  });
});

function awaitButton() {
  // wait for shopify buy button to show up so we can show or hide it
  var checkButtonExist = setInterval(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productValue = urlParams.get('product');

    if ($('#' + productValue).find('.shopify-buy-frame--product').length) {
      //  console.log("Exists!");
      clearInterval(checkButtonExist);
      showOrHideProduct(productValue);
    }
    
    else {
      // console.log('nope');
    }
  }, 10); // check every 10ms


  function showOrHideProduct(productValue) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const productValue = urlParams.get('product');
    console.log(productValue);  
  
    $('#' + productValue).css('display', 'flex');
  
    $('#' + productValue).find('.shopify-buy-frame--product')[0].style.setProperty('display', 'block', 'important');
  }
}



// wait for shopify cart bizness to show up
var checkCartExist = setInterval(function() {
  if ($('.shopify-buy-frame--toggle').find('iframe').length) {
    //  console.log("Exists!");
     clearInterval(checkCartExist);
     customizeCartButton();
  }
  
  else {
    // console.log('nope');
  }
}, 10); // check every 10ms


function customizeCartButton() {
  console.log('modding cart button');
  
  // inject my custom css into the iframe that shopify creates for the cart button
  // need to override the shitty styling it comes with
  let cssLink = document.createElement('link');
  if (document.body.id == 'homeBody') {
    cssLink.href = '../css/homeStyle.css'; 
  }
  else {
    cssLink.href = '../css/style.css'; 
  }
  cssLink.rel = 'stylesheet'; 
  cssLink.type = 'text/css'; 
  $('.shopify-buy-frame--toggle').find('iframe').contents()[0].head.appendChild(cssLink);

  // if cart has 0 items in it on this page load, hide the count icon
  // This way we can always show the cart, just not the number of items in it if zero
  let cartCount = $('.shopify-buy-frame--toggle').find('iframe').contents().find('.shopify-buy__cart-toggle__count')[0];
  if (cartCount.innerText == '0') {
    $(cartCount).css('visibility', 'hidden');
    console.log('cart empty');
  }

  // wait a sec to avoid default styling loading then immediately changing
  setTimeout(() => {
    $('.shopify-buy-frame--toggle').css('visibility', 'visible');
  }, '300');

  


  // look for changes to the cart count icon - if it's zero, hide it. 
  // This way we can always show the cart, just not the number of items in it if zero
  var observer = new MutationObserver(function(mutations) {
    if (cartCount.innerText == '0' && $(cartCount).css('visibility') == 'visible') {
      $(cartCount).css('visibility', 'hidden');
      console.log('cart empty');
    }  
  });
  observer.observe(cartCount, {
      attributes:    true,
      childList:     true,
      characterData: true,
      subtree:       true
  });
}