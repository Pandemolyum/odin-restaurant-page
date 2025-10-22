import smallPolloLogo from "./assets/img/Los_Pollos_Hermanos_logo.png";

function createContactTab(contentDiv) {
    const contactDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const h4 = document.createElement("h4");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    const span5 = document.createElement("span");
    const span6 = document.createElement("span");
    const smallImg = document.createElement("img");
    
    contactDiv.classList.add('contact');

    h1.textContent = "Contact Us";
    h4.textContent = "We are here to help! Let us know how we can best serve you.";
    span1.textContent = "Phone number: ";
    span2.textContent = "555-555-5555";
    span3.textContent = "Email: ";
    span4.textContent = "contact@lospolloshermanos.com";
    span5.textContent = "Address: ";
    span6.textContent = "123 Chicken Rd, BB";
    smallImg.src = smallPolloLogo;
    
    contentDiv.appendChild(h1);
    contentDiv.appendChild(h4);
    contactDiv.appendChild(span1);
    contactDiv.appendChild(span2);
    contactDiv.appendChild(span3);
    contactDiv.appendChild(span4);
    contactDiv.appendChild(span5);
    contactDiv.appendChild(span6);
    contentDiv.appendChild(contactDiv);
    contentDiv.appendChild(smallImg);
}

export {createContactTab};