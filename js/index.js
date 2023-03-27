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

  let sky = document.getElementById('sky');
  let clouds = document.getElementById('clouds');
  let facade = document.getElementById('facade');
  let text = document.getElementById('text');
  let btn = document.getElementById('btn');
  let students = document.getElementById('students');

  window.addEventListener('scroll', function () {
    let value = window.scrollY;
    sky.style.top = value * 0.25 + 'px';
    clouds.style.top = value * -0.5 + 'px';
    facade.style.top = value * 0 + 'px';
    students.style.left = value * -1 + 'px';
  })
}


$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});



