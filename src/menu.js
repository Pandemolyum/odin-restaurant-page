function createMenuTab(contentDiv) {
    const h1 = document.createElement("h1");
    const h3_1 = document.createElement("h3");
    const p1 = document.createElement("p");
    const h3_2 = document.createElement("h3");
    const p2 = document.createElement("p");
    const h3_3 = document.createElement("h3");
    const p3 = document.createElement("p");
    const h3_4 = document.createElement("h3");
    const p4 = document.createElement("p");
    
    h1.textContent = "Menu";
    h3_1.textContent = "Fried Chicken";
    p1.textContent = "Perfectly golden, crispy fried chicken with our signature Southwestern seasoning blend—tender and juicy on the inside, unforgettable flavor on the outside.";
    h3_2.textContent = "Pollos Nuggets";
    p2.textContent = "All-white meat chicken pieces, lightly battered and fried to a crisp golden finish. Served with your choice of dipping sauce.";
    h3_3.textContent = "Chicken Sandwich";
    p3.textContent = "A large, crispy chicken fillet served on a soft bun with fresh lettuce and a savory secret sauce. The classic fast-food favorite, Los Pollos style.";
    h3_4.textContent = "Curly Fries";
    p4.textContent = "Our famous seasoned curly fries. Crispy, savory, and seasoned with a special mix of spices for a satisfying crunch in every bite.";
    
    contentDiv.appendChild(h1);
    contentDiv.appendChild(h3_1);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(h3_2);
    contentDiv.appendChild(p2);
    contentDiv.appendChild(h3_3);
    contentDiv.appendChild(p3);
    contentDiv.appendChild(h3_4);
    contentDiv.appendChild(p4);
}

export {createMenuTab};