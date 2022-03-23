import { getHero } from '../fetch-utils.js';
import { renderHeroesDetail } from '../render-utils.js';

const heroListEl = document.querySelector('.hero-list');

window.addEventListener('load', async () => {

    const data = new URLSearchParams(window.location.search);

    const heroId = data.get('id');

    const heros = await getHero(heroId);

    const heroEl = renderHeroesDetail(heros);

    heroListEl.append(heroEl);
    
    
});
