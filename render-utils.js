export function renderHeroes(hero){
    const heroEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');
    const imageEl = document.createElement('img');
    // const birthYearEl = document.createElement('p');
    // const genderEl = document.createElement('p');
    // const houseNameEl = document.createElement('p');
    // const descriptionEl = document.createElement('p');
    

    heroEl.classList.add('hero');

    nameEl.innerHTML = `<b>${hero.character_name}</b>`;
    // birthYearEl.innerHTML = `<b>Birth Year:</b> ${hero.birthyear}`;
    // genderEl.innerHTML = `<b>Gender:</b> ${hero.gender}`;
    // houseNameEl.innerHTML = `<b>House Name: ${hero.house_name}`;
    // descriptionEl.innerHTML = `<b>Character Info:</b> ${hero.description}`;
    imageEl.src = `${hero.image}`;
    a.href = `./detail/?id=${hero.person_id}`;

    heroEl.append(nameEl, imageEl);

    a.append(heroEl);

    return a;


}

export function renderHeroesDetail(hero){

    const heroEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const imageEl = document.createElement('img');
    const birthYearEl = document.createElement('p');
    const genderEl = document.createElement('p');
    const houseNameEl = document.createElement('p');
    const descriptionEl = document.createElement('p');


    

    heroEl.classList.add('hero-detail');

    nameEl.innerHTML = `<b>${hero.character_name}</b>`;
    birthYearEl.innerHTML = `<b>Birth Year:</b> ${hero.birthyear}`;
    genderEl.innerHTML = `<b>Gender:</b> ${hero.gender}`;
    houseNameEl.innerHTML = `<b>House Name:</b> ${hero.house_name}`;
    descriptionEl.innerHTML = `<b>Character Info:</b> ${hero.description}`;
    imageEl.src = `${hero.image}`;

    heroEl.append(nameEl, imageEl, birthYearEl, genderEl, houseNameEl, descriptionEl);


    return heroEl;


}