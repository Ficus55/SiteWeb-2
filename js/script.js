const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 250;

        if (c < target) {
            counter.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
})


let year=new Date().getFullYear()+".";
let copyrightYear=document.querySelector(".copyright-year").innerHTML=year;



const toTop = document.querySelector(".ui-to-top");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100){
        toTop.classList.add("ui-to-top-active");
    }else{
        toTop.classList.remove("ui-to-top-active");
    }
})