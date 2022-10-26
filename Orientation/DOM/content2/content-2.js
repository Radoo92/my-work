'use strict';

const ul = document.querySelectorAll("ul").item(0)
const lenghts = ul.children.length

for (let i =0 ; i < lenghts; i ++ ) {
     ul.removeChild(ul.children.item(0))
}

const array = ['apple', 'banana', 'cat', 'dog']

for (let i = 0; i < array.length; i ++){
    const li = document.createElement('li')
    li.className = 'myColor'
    li.textContent = array[i];
    ul.appendChild(li)
}