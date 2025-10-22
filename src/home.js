import bigPolloLogo from "./assets/img/Los-Pollos-Hermanos-big.jpg";

function createHomeTab(contentDiv) {
    const homeImg = document.createElement("img");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3_1 = document.createElement("h3");
    const p1 = document.createElement("p");
    const h3_2 = document.createElement("h3");
    const p2 = document.createElement("p");
    const h3_3 = document.createElement("h3");
    const p3 = document.createElement("p");
    const h3_4 = document.createElement("h3");
    const p4 = document.createElement("p");
    
    homeImg.src = bigPolloLogo;
    h1.textContent = "Los Pollos Hermanos";
    h2.textContent = "where something delicious is always cooking";
    h3_1.textContent = "Taste the Tradition. Savor the Flavor.";
    p1.textContent = "At Los Pollos Hermanos, we're more than just a fast-food restaurant—we're a family tradition built on quality, flavor, and exceptional service. From our humble beginnings in Mexico, we've grown to bring our renowned chicken to communities across the Southwest, always staying true to the secret recipes that made us famous.";
    h3_2.textContent = "Our Signature Chicken";
    p2.textContent = "Our award-winning fried chicken is marinated for hours in a proprietary blend of herbs and spices, then hand-breaded and pressure-fried to a perfect, crispy golden finish. Every piece is juicy on the inside, crunchy on the outside, and bursting with flavor. It’s the chicken that everyone talks about—come find out why!";
    h3_3.textContent = "Fresh Sides, Served Daily";
    p3.textContent = "No meal is complete without our selection of classic, homemade sides. Don't miss our creamy mashed potatoes and gravy, our tangy coleslaw, and our famous, perfectly seasoned curly fries. We use fresh ingredients delivered daily to ensure the highest quality in every bite.";
    h3_4.textContent = "Find a Location & Order Now!";
    p4.textContent = "We've got a seat waiting for you. Come dine-in with us, use our drive-thru for a quick meal on the go, or order online for delivery right to your door.";
    
    contentDiv.appendChild(homeImg);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(h2);
    contentDiv.appendChild(h3_1);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(h3_2);
    contentDiv.appendChild(p2);
    contentDiv.appendChild(h3_3);
    contentDiv.appendChild(p3);
    contentDiv.appendChild(h3_4);
    contentDiv.appendChild(p4);
}

export {createHomeTab};