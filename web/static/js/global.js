---
sitemap:
  exclude: true
---

{% include bower_components/jquery/dist/jquery.min.js %}

{% include bower_components/randombackground.js/dist/jquery.randombackground.min.js %}

;(function ( $ ){
  $(document).ready(function() {

    // To extend the default config settings
    // pass a object as an argument for the init function
    // eg. randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });

    randomBackground.init( { parent: '.hero__image', background: '.hero', path: '{{ site.media }}/hero/', images: ['hero_001.jpg', 'hero_002.jpg', 'hero_003.jpg', 'hero_004.jpg', 'hero_005.jpg', 'hero_006.jpg'], bgcolor: ['#304946', '#20110c', '#000', '#ea5c50', '#052534', '#242424'] });

  });

})( jQuery );

/**
 * Responsive Navigation
 */
;(function ( $ ) {

  $(document).ready(function() {


    $("#js-menu__icon").click(function () {
      $("#js-nav__main").toggleClass("is-active");
    });

  });

}(jQuery));

{% include bower_components/FitVids/jquery.fitvids.js %}
