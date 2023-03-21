function scrollFunction() {
        let sky = document.getElementById('sky');
        let clouds = document.getElementById('clouds');
        let facade = document.getElementById('facade');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let students = document.getElementById('students');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            sky.style.top = value * 0.25 + 'px';
            clouds.style.top = value * -1 + 'px';
            facade.style.top = value * 0 + 'px';
            students.style.left = value * -1 + 'px';
        })
}

