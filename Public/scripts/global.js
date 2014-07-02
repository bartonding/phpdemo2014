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
        var t1, st, wh = $(window).height(),
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
            console.log(st);
            // navbar-in-index navbar-fixed-top
            // not be fixed
            if (st < wh - nh) {
                if (isFixed) {
                    gn.removeClass('navbar-fixed-top')
                      .addClass('navbar-in-index');
                }
            }
            // be fixed
            else {
                if (!isFixed) {
                    gn.removeClass('navbar-in-index');
                    gn.addClass('navbar-fixed-top');
                    // gn.addClass('gn-trans-mid');
                    // setTimeout(function () {
                    //     gn.addClass('navbar-fixed-top');
                    //     setTimeout(function() {
                    //         gn.removeClass('gn-trans-mid');
                    //     }, 100);
                    // }, 100);
                }
            }
        });
    })();
});