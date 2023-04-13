'use strict';

const accordionContainer = document.querySelectorAll('.container');

for (let i = 0; i < accordionContainer.length; i++) {
  accordionContainer[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}