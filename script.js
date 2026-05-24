const sections = document.querySelectorAll('.content');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.4
});

sections.forEach((section) => {
    observer.observe(section);
});

const panels = document.querySelectorAll('.panel');
const navDots = document.querySelectorAll('.nav-dot');

window.addEventListener('scroll', () => {

    let current = '';

    panels.forEach(panel => {

        const panelTop = panel.offsetTop;

        if(pageYOffset >= panelTop - window.innerHeight / 2){
            current = panel.getAttribute('id');
        }

    });

    navDots.forEach(dot => {

        dot.classList.remove('active');

        const href = dot.getAttribute('href').replace('#', '');

        if(href === current){
            dot.classList.add('active');
        }

    });

});