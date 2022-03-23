// import functions and grab DOM elements

import { getHeroes } from './fetch-utils.js';
import { renderHeroes } from './render-utils.js';

const heroListEl = document.querySelector('.got-list');

window.addEventListener('load', async () => {

    const heroes = await getHeroes();

    for (let hero of heroes){

        const heroEl = renderHeroes(hero);

        heroListEl.append(heroEl);
    }
  
});


// let state



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
