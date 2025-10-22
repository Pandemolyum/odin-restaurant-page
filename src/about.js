import restaurantImgSrc from "./assets/img/los-pollos-restaurant.jpg";
import gusImgSrc from "./assets/img/gus.jpg";

function createAboutTab(contentDiv) {
    const h1 = document.createElement("h1");
    const h3_1 = document.createElement("h3");
    const p1 = document.createElement("p");
    const restImg = document.createElement("img");
    const h3_2 = document.createElement("h3");
    const p2 = document.createElement("p");
    const gusImg = document.createElement("img");
    
    h1.textContent = "About";
    h3_1.textContent = "Our Story";
    p1.textContent = "For over 20 years, we've been dedicated to serving communities with a smile, a commitment to excellence, and that unmistakable, zesty flavor that keeps our customers coming back for more. From our crispy signature fried chicken to our savory sides and refreshing beverages, every item on our menu is prepared with the care and attention you'd expect from a family-run establishment.";
    restImg.src = restaurantImgSrc;
    h3_2.textContent = "Our Founder";
    p2.textContent = "Los Pollos Hermanos was founded by the visionary Gustavo Fring, whose dedication to quality and service transformed a humble chicken stand into a beloved regional empire. Gus, as he's known to many, built Los Pollos Hermanos on the principles of hard work, unwavering attention to detail, and a deep respect for his customers and employees. His commitment to efficiency and perfection ensures that every meal served upholds the high standards he established, making Los Pollos Hermanos a trusted name in fast-casual dining. Gus's passion for fine food and community spirit is the heart of everything we do, inspiring us to consistently deliver an exceptional dining experience.";
    gusImg.src = gusImgSrc;

    contentDiv.appendChild(h1);
    contentDiv.appendChild(h3_1);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(restImg);
    contentDiv.appendChild(h3_2);
    contentDiv.appendChild(p2);
    contentDiv.appendChild(gusImg);
}

export {createAboutTab};