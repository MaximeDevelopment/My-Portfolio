"use strict";
console.log("Coucou la console");
console.log("Bienvenue sur mon portfollio");
let data;
const langue =  "./json/Language.json"
async function language() {
    const respond = await fetch(langue)
    if(!respond.ok) return;
    data = await respond.json();
}
language();
const selectLangue = document.querySelector("body .langue")
const title = document.querySelector("body .haut .header");
const skill = document.querySelector("body .skills .title-skills .skill")
const project = document.querySelector("body .divpro .myproject")
const contact = document.querySelector("footer .divcontact .contact")
const about = document.querySelector("body .about .about-p")
const mail = document.querySelector("footer .divcontact .contactpage .adress .email p span")
let lang;
selectLangue.addEventListener("click", (e)=>{
    const L = e.target.className
    switch (L) {
        case "fra":
            title.textContent = data.Language[0].title.françaisTitle
            skill.textContent = data.Language[0].skillsText.françaisSkills
            project.textContent = data.Language[0].projectText.françaisProject
            contact.textContent = data.Language[0].contactText.françaisContact
            mail.textContent = data.Language[0].mailText.françaisMail
            about.textContent = data.Language[0].aboutText.françaisAbout
            break;
        case "eng":
            title.textContent = data.Language[0].title.englishTitle
            skill.textContent = data.Language[0].skillsText.englishSkills
            project.textContent = data.Language[0].projectText.englishProject
            contact.textContent = data.Language[0].contactText.englishContact
            mail.textContent = data.Language[0].mailText.englishMail
            about.textContent = data.Language[0].aboutText.englishAbout
            break;
        case "deu":
            title.textContent = data.Language[0].title.deutschTitle
            skill.textContent = data.Language[0].skillsText.deutschSkills
            project.textContent = data.Language[0].projectText.deutschProject
            contact.textContent = data.Language[0].contactText.deutschContact
            mail.textContent = data.Language[0].mailText.deutschMail
            about.textContent = data.Language[0].aboutText.deutschAbout
            break;
        default:
            break;
    }
})