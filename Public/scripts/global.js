jQuery(function ($) {
    // var mod = $('#globalNav');
    console.log('global js start...');

    // bootstrap dropdown trigger: click -> hover
    $('.dropdown').hover(function(){
        $(this).toggleClass('open');
    });

    // global nav scroll event
    (function () {
        if (!$(document.body).hasClass('p-index')) return;
        var t1, t2, st, wh = $(window).height(),
            gn = $('#globalNav');
            nh = gn.outerHeight();
        $(window).resize(function () {
            clearTimeout(t1);
            t1 = setTimeout(function () {
                wh = $(window).height();
            }, 150);
        }).scroll(function () {
            var isFixed = gn.hasClass('navbar-fixed-top');
            st = $(window).scrollTop();
            // navbar-in-index navbar-fixed-top navbar-mid-animate
            // not be fixed
            if (st < wh - nh) {
                if (isFixed) {
                    gn.removeClass('navbar-fixed-top');
                    gn.addClass('navbar-mid-animate');
                    t2 = setTimeout(function(){
                        gn.removeClass('navbar-mid-animate');
                        gn.addClass('navbar-in-index');
                    }, 500);
                }
            }
            // be fixed
            else {
                if (!isFixed) {
                    clearTimeout(t2);
                    gn.removeClass('navbar-in-index navbar-mid-animate');
                    gn.addClass('navbar-fixed-top');
                }
            }
        });
    })();
});