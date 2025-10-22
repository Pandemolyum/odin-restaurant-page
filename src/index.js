import "./style.css";
import {createHomeTab} from "./home.js";
import {createMenuTab} from "./menu.js";
import {createAboutTab} from "./about.js";

const contentDiv = document.querySelector("#content");
createHomeTab(contentDiv);

const buttons = document.querySelectorAll("button");
const navElems = [() => createHomeTab(contentDiv),
                  () => createMenuTab(contentDiv),
                  () => createAboutTab(contentDiv),
                  /*() => createContactTab(contentDiv)*/];

for (let i = 0; i < navElems.length; i++) {
    buttons[i].addEventListener("click", () => {
        contentDiv.replaceChildren();
        console.log("children replaced");
        navElems[i]();
        console.log(i)
    })
}