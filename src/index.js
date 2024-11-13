import "./styles.css";
import { generateHome, generateAbout, generateMenu } from "./pages";
// get DOM
export const content = document.getElementById("content");
const btnHome = document.getElementById("home-btn");
export const btnNavMenu = document.getElementById("menu-btn");
const btnAbout = document.getElementById("about-btn");
const btns = [btnHome, btnNavMenu, btnAbout];

btns[0].classList.add("active")
generateHome(content) 

btnHome.addEventListener("click", function(){
    content.innerHTML = ""
    generateHome(content) 
    toggleBtns(btnHome);
});

btnAbout.addEventListener("click", function(){
    content.innerHTML = ""
    generateAbout(content) 
    toggleBtns(btnAbout)
});

btnNavMenu.addEventListener("click", function(){
    content.innerHTML = ""
    generateMenu(content) 
    toggleBtns(btnNavMenu)    
})


function toggleBtns(activeBtn){
    btns.forEach(btn=>{
        btn.classList.remove("active");

        if(activeBtn == btn){
            btn.classList.add("active");
        }               
    
    })
}

export {toggleBtns}




