const menuIcon = document.getElementById("menuicon")
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () =>{
    if(menu.className === "hidden"){
    menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
})


const form = document.querySelector("form");
const names = form.querySelector("#name")
const email = form.querySelector("#email")
const messege = document.querySelector("#messege")

form.addEventListener("submit", formhandle)
function formhandle(e){
    e.preventDefault()

    const userInfo = {
        name: names.value,
        email: email.value
    }

    console.log(userInfo);
    names.value = "";
    email.value = "";
   }
