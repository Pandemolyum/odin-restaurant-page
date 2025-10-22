function createContactTab(contentDiv) {
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const p2 = document.createElement("p");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    const p3 = document.createElement("p");
    const span5 = document.createElement("span");
    const span6 = document.createElement("span");
    
    h1.textContent = "Contact Us";
    h3.textContent = "We are here to help! Let us know how we can best serve you.";
    span1.textContent = "Phone number: ";
    span2.textContent = "555-555-5555";
    span3.textContent = "Email: ";
    span4.textContent = "contact@lospolloshermanos.com";
    span5.textContent = "Address: ";
    span6.textContent = "123 Chicken Rd, BB";
    
    contentDiv.appendChild(h1);
    contentDiv.appendChild(h3);
    p1.appendChild(span1);
    p1.appendChild(span2);
    contentDiv.appendChild(p1);
    p2.appendChild(span3);
    p2.appendChild(span4);
    contentDiv.appendChild(p2);
    p3.appendChild(span5);
    p3.appendChild(span6);
    contentDiv.appendChild(p3);
}

export {createContactTab};