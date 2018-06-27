$(document).ready(function () {
    let lastScrollTop = 0;
    let navbar = $(".navbar");

    $(window).scroll(function () {
        let st = $(this).scrollTop();

        if (st > lastScrollTop) {
            navbar.fadeOut(135);
        } else {
            navbar.fadeIn(135);
        }
        lastScrollTop = st;
    });

    $("a").on("click", function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
