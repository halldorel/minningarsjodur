var skill_stars = $("ul#skills li b");

skill_stars.each(function(){
	// Replace normal stars with star-icons!
	this_el = $(this);
	star_string = this_el.html();
	star_string = star_string.replace(/\*/g, '<i class="fi-star"></i>');
	this_el.html(star_string);
});

var ih = window.innerHeight;

$("#hire_me").css('height', innerHeight);

/* GPU optimized parallax rendering */
    var parallax_ids = ['hero'];
    var parallax_elms = [];
    for(var i in parallax_ids)
    {
        parallax_elms.push(document.getElementById(parallax_ids[i]));
    }
    var ch = window.innerHeight;
    var lastScrollY = 0,
    tick = false,
    speedDiv = 2;

    var doScroll = function () {
        lastScrollY = window.scrollY;
        requestTick();
    }

    window.addEventListener('scroll', doScroll, false);

    var updatePosition = function () {

        for(var i in parallax_elms)
        {
            var el_top = $(parallax_elms[i]).parent().offset().top;
            var el_bottom = $(parallax_elms[i]).parent().offset().top + 500;
            
            var translateValue = (lastScrollY - el_top)/speedDiv;

            translateValue += el_top == 0 ? 0 : ch/speedDiv;

            if(translateValue < 0) translateValue = 0;

            if((lastScrollY < el_bottom) && (lastScrollY + ch > el_top))
            {
                translateY3d(parallax_elms[i], translateValue);
            }
       }

        tick = false;
    }

    var requestTick = function () {
        if(!tick) {
            window.requestAnimationFrame(updatePosition);
            tick = true;
        }
    }

    var translateY3d = function(elm, value) {
        var translate = 'translate3d(0px,' + value + 'px, 0px)';
        elm.style['-webkit-transform'] = translate;
        elm.style['-moz-transform'] = translate;
        elm.style['-ms-transform'] = translate;
        elm.style['-o-transform'] = translate;
        elm.style.transform = translate;
    };