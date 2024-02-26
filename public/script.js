// mood for desktop
const toggleThemeBtn = document.querySelector("#toggle-theme");
const btnmenu = document.querySelector(".sub-btn")
const submenu = document.querySelector(".submenu")
const colortext =document.querySelector(".color-text")
const toggleThemeBtn1 = document.querySelector("#toggle-theme-mobile");
const navicon = document.querySelector(".nav-icon")
const nav = document.querySelector(".nav")
const overlay = document.querySelector(".overlay")
const closicon = document.querySelector(".clos-icon") 
const navbaricon = document.querySelector(".navbar-icon")
const closiconshop = document.querySelector(".clos-icon-shop") 
const opene = document.querySelector(".open")



// mood for desktop
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
}

// mood for mobile
toggleThemeBtn1.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
}

// style menu for mobile
btnmenu.addEventListener("click" , () => {
    colortext.classList.toggle("text-orange-300")
    btnmenu.classList.toggle("rotate-180")
    submenu.classList.toggle("flex")
    submenu.classList.toggle("flex-col")
    submenu.classList.toggle("gap-y-3")
    submenu.classList.toggle("pr-7")
    submenu.classList.toggle("mt-3")
    submenu.classList.toggle("text-sm")
    submenu.classList.toggle("text-zinc-600")
    submenu.classList.toggle("dark:text-white")
})
// open nav mobile
navicon.addEventListener("click" , () => {
    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")
    overlay.classList.add("visible")
    overlay.classList.add("opacity-100")
})
//close nav mobile
closicon.addEventListener("click" , () => {
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    overlay.classList.remove("visible")
    overlay.classList.remove("opacity-100")
})
// close whit disply
overlay.addEventListener("click" , () => {
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    overlay.classList.remove("visible")
    overlay.classList.remove("opacity-100")
})
// open shop cart in mobile
navbaricon.addEventListener("click" , () => {
    opene.classList.remove("-left-64")
    opene.classList.add("left-0")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")
    overlay.classList.add("visible")
    overlay.classList.add("opacity-100")
})
//close shop cart mobile
closiconshop.addEventListener("click" , () => {
    opene.classList.add("-left-64")
    opene.classList.remove("left-0")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    overlay.classList.remove("visible")
    overlay.classList.remove("opacity-100")
})
// close whit disply shop cart
overlay.addEventListener("click" , () => {
    opene.classList.add("-left-64")
    opene.classList.remove("left-0")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    overlay.classList.remove("visible")
    overlay.classList.remove("opacity-100")
})

// arayy for product
AllProduct = [
    {id:1 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "190,000 تومان" , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:2 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "190,000 تومان " , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:3 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "" , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:4 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "فعلا موجود نیست " , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:5 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "" , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:6 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "فعلا موجود نیست " , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:7 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "190,000 تومان " , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
    {id:8 , img: "img/products/p1.png" ,  price: "154,000" , takhfif: "190,000 تومان " , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"},
]

let userbasket = []



 
AllProduct.foreach(function(products){
    
})














































let divcontiner = document.querySelector(".div-continer")



let div1elem = document.createElement("div")
div1elem.classList.add("div1")

let imgelem = document.createElement("img")
imgelem.classList.add("img")
imgelem.setAttribute("src" , products.img)

let div2elem = document.createElement("div")
div2elem.classList.add("div2")

let h4elem = document.createElement("h4")
h4elem.classList.add|("h4")
h4elem.innerHTML = products.title

let span1elem = document.createElement("span")
span1elem.classList.add("span1")
span1elem.innerHTML = products.takhfif

let div3elem = document.createElement("div")
div3elem.classList.add("div3")

let spanelem = document.createElement("span")
spanelem.classList.add("span2")
spanelem.innerHTML = products.price

let span3elem = document.createElement("span")
span3elem.classList.add("span3")
span3elem.innerHTML = "تومان"

div3elem.append(spanelem , span3elem)
div2elem.append(div3elem , h4elem , span1elem)
div1elem.append(div2elem , imgelem)
divcontiner.append(div1elem)