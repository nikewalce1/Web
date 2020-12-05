new WOW().init();


$(document).ready(function () {
    $("[data-dropdown]").click(function () {
        let data = $(this).data('dropdown');
        $('[data-dropdown-container="' + data + '"').slideToggle({
            duration: 300,
            easing: "linear",
            queue: false
        });
    });

    $(".btn-mobile-menu").click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('active');

        $("html, body").toggleClass('no-scroll')
    });
});
