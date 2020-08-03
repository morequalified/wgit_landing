$(function() {
  var header = $('#header'),
      introH = $('#intro').innerHeight(),
      scrollOffset = $(window).scrollTop();

      checkScroll(scrollOffset);

  /* Fixed Header */
  $(window).on("scroll", function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset)
  });

  function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Scroll */

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $('nav a').removeClass('active');
    $this.addClass('active');

    $("html, body").animate({
      scrollTop: blockOffset
    });

  })


  $("[data-collapse]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

        $this.toggleClass('active');
  })


  /*  Home work
    #nav_toggle -> 
    preventDefault
    toggleClass('active')

  */







});