const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link =>{
    link.addEventListener('click' , () =>{
        navMenu.classList.add('hidden');
    })
})


closeIcon.addEventListener('click' , () =>{
    navMenu.classList.add('hidden');
})

hamburger.addEventListener('click' , ()=> {
        navMenu.classList.remove('hidden')
})

const tabs = document.querySelectorAll(".tabs_warp ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverage = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        tab.classList.add("active");

        const tabval =  tab.getAttribute('data-tabs');

        all.forEach(item => {
            item.style.display = 'none'
        })

        if(tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        } else if (tabval == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })
})


const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem('mode') == 'dark'){
    darkMode();
}else {
    lightMode();
}

themeBtn.addEventListener('click', (e)=> {
    if (localStorage.getItem('mode') == 'light') {
        darkMode();
    }else{
    lightMode();
}
} )

function darkMode (){
    html.classList.add("dark");
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('mode','dark')
}


function lightMode () {
    html.classList.remove("dark");
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('mode','light')
}