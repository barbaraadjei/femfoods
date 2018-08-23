
$(document).ready(function(){

//hide elements
$('.main').hide();
window.sr = ScrollReveal();
sr.reveal('#descr', { duration : 1000});
sr.reveal('.center-con', { delay : 1500});
//show elements
$(".round").click(function() {
  $('.main').show();
});
  $(".round").click(function() {
    $('html,body').animate({
        scrollTop: $("#breakfast-header").offset().top},
        'slow');
});
$("#breakfast").click(function() {
  $('.main').show();
  $('html,body').animate({
      scrollTop: $("#breakfast-header").offset().top},
      'slow');
});
$("#comfort-food").click(function() {
  $('.main').show();
  $('html,body').animate({
      scrollTop: $("#comfortfood-header").offset().top},
      'slow');
});
$("#japanese").click(function() {
  $('.main').show();
  $('html,body').animate({
      scrollTop: $("#japanese-header").offset().top},
      'slow');
});
$("#italian").click(function() {
  $('.main').show();
  $('html,body').animate({
      scrollTop: $("#italian-header").offset().top},
      'slow');
});
$("#sweets").click(function() {
  $('.main').show();
  $('html,body').animate({
      scrollTop: $("#sweets-header").offset().top},
      'slow');
});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 720) {
				$('.nav').fadeIn();

			} else {
				$('.nav').fadeOut();
			}
		});
    sr.reveal('.words', { duration: 1500, viewFactor: 0.8 });
    sr.reveal('.img', { duration: 1500, viewFactor: 0.3 } );
});




//if the
