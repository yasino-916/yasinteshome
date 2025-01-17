

const a = new Typed ('.typing', {
    strings:['Full stack develioper', " Frontend Developer", "Web designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

const menu = document.querySelector('.menu')
const sideBar = document.querySelector('.aside')

menu.addEventListener("click", () => {
    sideBar.classList.toggle('close')
})