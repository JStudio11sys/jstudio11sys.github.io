$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});


function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 80) {
      document.getElementById("nav-scroll").style.paddingTop = "2px";
      document.getElementById("logo").style.fontSize = "18px";
      document.getElementById("sta_logo").style.maxWidth = "50px";
    } else {
      document.getElementById("nav-scroll").style.paddingTop = "70px";
      document.getElementById("logo").style.fontSize = "25px";
      document.getElementById("sta_logo").style.maxWidth = "80px";
    }
}