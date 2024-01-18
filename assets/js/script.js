"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    // PAGES NAVIGATION
    const buttons = ['btnWhoAmI', 'btnEducation', 'btnExperience', 'btnSkills', 'btnContact'];
    const sections = ['whoAmI', 'education', 'experience', 'skills', 'contact'];

    buttons.forEach((button, index) => {
        const element = document.querySelector(`#${button}`);
        element.addEventListener('click', () => pagesSetActive(button, sections[index]));
    });

    //AUTO UPDATE AGE
    updateAge();
}

function pagesSetActive(activeButton, activeSection) {
    const buttons = ['btnWhoAmI', 'btnEducation', 'btnExperience', 'btnSkills', 'btnContact'];
    const sections = ['whoAmI', 'education', 'experience', 'skills', 'contact'];

    buttons.forEach(button => {
        const element = document.querySelector(`#${button}`);
        element.classList.toggle('active', button === activeButton);
    });

    sections.forEach(section => {
        const element = document.querySelector(`#${section}`);
        element.classList.toggle('hidden', section !== activeSection);
    });
}

function updateAge() {
    const birthday = new Date('2005-07-18'); // Your birthday in the format: YYYY-MM-DD
    const today = new Date();
    const isBirthday = today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();

    if (isBirthday) {
        const ageElement = document.querySelector('#age');
        const age = today.getFullYear() - birthday.getFullYear();
        ageElement.textContent = age;
    }
}
