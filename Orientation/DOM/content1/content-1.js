'use strict';

const animalsParagraph = document.querySelector('.animals',);
const animalsParagraphHtml = animalsParagraph.innerHTML;

const allParagraphs = document.querySelectorAll('p'); 

allParagraphs.forEach(function (paragraph) {
    paragraph.innerHTML = animalsParagraphHtml;
});

//pamätať na názvy premennych, googlit, skusat, ctrl+d na premenovanie viac riadkov premennej naraz, pamätať si na syntax for each
