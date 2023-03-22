function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.padding = "80px 10px";
          document.getElementById("logo").style.fontSize = "20px";
          document.getElementById("logo").style.paddingTop = "15px";
          document.getElementById("sta_logo").style.maxWidth = "50px";
        } else {
          document.getElementById("navbar").style.padding = "90px 10px";
          document.getElementById("logo").style.fontSize = "35px";
          document.getElementById("logo").style.paddingTop = "26px";
          document.getElementById("sta_logo").style.maxWidth = "80px";
        }
      
        let sky = document.getElementById('sky');
        let clouds = document.getElementById('clouds');
        let facade = document.getElementById('facade');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let students = document.getElementById('students');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            sky.style.top = value * 0.25 + 'px';
            clouds.style.top = value * -0.5 + 'px';
            facade.style.top = value * 0 + 'px';
            students.style.left = value * -1 + 'px';
        })
}

