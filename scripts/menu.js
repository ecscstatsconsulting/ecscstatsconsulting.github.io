$(document).ready(function () {

        // Smooth scrolling to any internal tags
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 80
                    }, 500);
                    return false;
                }
            }
        });
    
        var offset = 100,
            scroll_top_duration = 700,
            $back_to_top = $('.btn-top'),
            $thedial = $('.dial'),
            $progress_bar = $('.progress-bar');
    
        // Initialize the progress dial
        $thedial.knob({
            'min': 0,
            'max': 100,
            'width': 50,
            'height': 50,
            'fgColor': 'rgba(77, 91, 109, 0.8)',
            'skin': 'tron',
            'thickness': .2,
            'displayInput': false,
            'displayPreview': false,
            'readOnly': true
        });
    
        $(window).scroll(function () {
    
            // Hide or show the progress bar
            ($(this).scrollTop() > offset) ? $progress_bar.addClass('is-visible') : $progress_bar.removeClass('is-visible');
    
            // Get the window position and set it to a variale
            var s = $(window).scrollTop(),
                d = $(document).height();
            scrollPercent = (s / d) * 100;
            
            // Bind the window position to the progress dial
            $('.dial').val(scrollPercent).change();
    
            if (s > 0) {
                $('header').addClass('scrolled fade');
            }
    
            if (s <= 0) {
                $('header').removeClass('scrolled fade');
            }
    
        });
    
        //smooth scroll to top
        $back_to_top.on('click', function (e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
            );
        });

});