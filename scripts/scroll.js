var fontLoad = false;
FontFaceOnload("Montserrat", {
  success: function() {
    if (!fontLoad) {
      fontLoad = true;
      var serviceItem = $('.service-item'),
          elementsCount = serviceItem.length,
          servicesListWidth = 0,
          servicesLastWidth = 0,
          arrowPath = $('.header .container').width(),
          sceneOffset = $('.header .container').offset().left + 15;

      if($('.services').length && $(window).width() > 767){
        //SERVICES SCENE
        for (var i = 0;i<elementsCount;i++){
          servicesListWidth += $(serviceItem[i]).innerWidth();
          servicesLastWidth = servicesListWidth - $(serviceItem[i]).innerWidth();
        }

        $('.services-list').css({
          'width': servicesListWidth
        });

        var sceneDuration =  Math.floor((servicesListWidth / $(window).width())*100);

        var controller = new ScrollMagic.Controller();
        var horizontalSlide = new TimelineMax().add([
          TweenMax.to(".services-list", 0.2,{
            css: {
              className: '+=half-position'
            }
          }, 'half-position')
        ]);
        horizontalSlide.add([
          TweenMax.fromTo(".services-list", 1.2,
              {css:{x: sceneOffset}},
              {css:{x: -(servicesLastWidth-sceneOffset+15)}}, ('half-position')),
          TweenMax.fromTo(".services-arrow", 1.2,
              {css:{x: sceneOffset}},
              {css:{x: sceneOffset+arrowPath-100}}), ('half-position')]);

        // create scene to pin and link animation
        var scene = new ScrollMagic.Scene({
          triggerElement: "#js-wrapper",
          triggerHook: "onLeave",
          duration: '300%'

        })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            .addTo(controller);
      }
    }
  }
});
