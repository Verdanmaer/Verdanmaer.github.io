$(function() {
  // Smooth scroll
  $(".arrow-down-link").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000
      );
    }
  });
});
