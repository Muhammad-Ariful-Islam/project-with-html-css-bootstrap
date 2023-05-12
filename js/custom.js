
$('.feature-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-btn-style-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slider-btn-style-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    dots: true,
    centerMode: true,
    centerPadding: '10px',
  });


new VenoBox({
  venobox: ".my-link",
  autoplay: true,
  spinner: 'wave',
  overlayColor: 'black',
  bgcolor: 'none'
});