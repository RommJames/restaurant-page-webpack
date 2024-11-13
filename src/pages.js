import teamImage from "./media/team.jpg"
import ambianceImage from "./media/ambiance.jpg"
import menu from "./menu.js"
import { toggleBtns } from "./index.js";
import { btnNavMenu } from "./index.js";
import { content } from "./index.js";

function generateHome(container){  
    content.style.padding = "0px"
    let heroContainer = document.createElement("div");
    heroContainer.setAttribute("id", "hero-container");

    let cta = document.createElement("div");
    cta.setAttribute("id", "call-to-action");
    

    let ctaBtn = document.createElement("button");
    ctaBtn.setAttribute("id", "cta-btn");
    cta.classList.add("cta-menu-btn")
    ctaBtn.textContent = "Explore Out Menu";
    ctaBtn.addEventListener("click", function(){
        content.innerHTML = ""
        generateMenu(content) 
        toggleBtns(btnNavMenu)
    });

    let description = document.createElement("p");
    description.textContent = "At Bulgogi House, we bring the vibrant flavors of Korea right to your table. Our expertly grilled bulgogi, made from the finest cuts of beef and pork, is served with fresh sides and a taste of tradition. Whether you’re here for a cozy dinner or a night of celebration, we promise a dining experience that will ignite your senses."

    cta.append(ctaBtn, description);
    heroContainer.appendChild(cta);
    container.appendChild(heroContainer);
}

function generateAbout(container){
    content.style.padding = "10px"
    let aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("id", "about-container");

    let ourStory = document.createElement("div");
    ourStory.setAttribute("id", "our-story");
    ourStory.setAttribute("class", "about-section right");
    let ourStoryHeading = document.createElement("h1");
    ourStoryHeading.textContent = "Our Story";
    let ourStoryBlockquote = document.createElement("blockquote");
    ourStoryBlockquote.textContent = "Founded by Chef Romm James, Bulgogi House was born from a passion for Korean BBQ and a love for bringing people together over great food. We combine the best of tradition and innovation, serving bold flavors with a modern twist. Every dish is prepared with care, using the finest ingredients and age-old techniques passed down through generations."
    ourStory.append(ourStoryHeading, ourStoryBlockquote);

    let imgTeam = document.createElement("img");
    imgTeam.src = teamImage;

    let ourValues = document.createElement("div");
    ourValues.id = "our-values";
    ourValues.classList.add("about-section");
    ourValues.classList.add("left");
    let ourValuesBlockquote = document.createElement("blockquote");
    ourValuesBlockquote.textContent = "At Bulgogi House, we believe in using only the highest quality meats, vegetables, and authentic spices. We partner with local farmers to ensure freshness and sustainability."
    let ourValuesHeading = document.createElement("h1");
    ourValuesHeading.textContent = "Our Values"
    ourValues.append(ourValuesBlockquote, ourValuesHeading);

    let ambiance = document.createElement("div");
    ambiance.id = "ambiance";
    ambiance.classList.add("about-section-w-img");
    let ambianceImg = document.createElement("img");
    ambianceImg.src = ambianceImage;
    let ambianceDescription = document.createElement("p");
    ambianceDescription.textContent = "Our space combines the warmth of traditional Korean design with modern elegance, creating the perfect setting for a casual meal or a special celebration.";
    ambiance.append(ambianceImg, ambianceDescription);

    aboutContainer.append(ourStory, imgTeam,ourValues, ambiance);
    container.appendChild(aboutContainer)
}

function generateMenu(container){
    content.style.padding = "10px"
    const menuContainer = document.createElement("div")
    menuContainer.id = "menu-container"
    const contentTitle = document.createElement("h1");
    contentTitle.textContent = "Bulgogi House Menu";

    const cardsContainer = document.createElement("div");
    cardsContainer.id = "cards-container"

    menu.forEach(cardMenu => {        
        const card = document.createElement("div");
        card.classList.add("card");

        const imgMenu = new Image();
        imgMenu.src = cardMenu.img;

        const menuTitle = document.createElement("h2");
        menuTitle.textContent = cardMenu.name;

        const cardDescription = document.createElement("div");
        cardDescription.id = "card-description";
        const menuPrice = document.createElement("div");
        menuPrice.innerHTML = `<b>Price: </b> <i>₱ ${cardMenu.price}</i>`
        const menuDescription = document.createElement("p");
        menuDescription.textContent = cardMenu.description
        cardDescription.append(menuPrice, menuDescription);


        const buyNow = document.createElement("div");
        buyNow.classList.add("buy-now");
        buyNow.textContent = "Order Now";

        card.append(imgMenu, menuTitle, cardDescription, buyNow);

        cardsContainer.appendChild(card)
    });

    menuContainer.append(contentTitle, cardsContainer)
    container.appendChild(menuContainer)
}

export {generateHome, generateAbout, generateMenu}