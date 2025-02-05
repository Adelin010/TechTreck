let menu_icon = document.querySelector('#menu-sign');
let navbar = document.querySelector('.naviation');
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a'); 


menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('bx-x');
    menu_icon.classList.toggle('active');
});

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            nav_links.forEach(link => {
                link.classList.remove('active');
                console.log(`header nav a [href = ${id} ]`)
                document.querySelector('header nav a [href=' + id + ' ]').classList.add('active');
            })
        }
    })
}