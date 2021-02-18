$(function() {
    jQuery.fn.ScrollTo=function (options) {
        let settings = jQuery.extend({
            padding: 0

        }, options);
        $(this).each((function () {
            let $section=$(this);
            let x=$section.offset().left();
            $(html,body).animate({
                scrollLeft:x
                },800);


        }));
    }
});
