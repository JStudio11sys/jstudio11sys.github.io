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


document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

   ripple.style.animation = "ripple-effect .4s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);

}