'use strict';

const animalsParagraph = document.querySelector('.animals',);
const animalsParagraphHtml = animalsParagraph.innerHTML;

const allParagraphs = document.querySelectorAll('p'); 

allParagraphs.forEach(function (paragraph) {
    paragraph.innerHTML = animalsParagraphHtml;
});