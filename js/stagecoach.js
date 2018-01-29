"use strict";
      
function animatedFAQ() {
  $('dd').hide();
  $('dt').click(function() {
    $(this).next().slideToggle();
  });
}

animatedFAQ();