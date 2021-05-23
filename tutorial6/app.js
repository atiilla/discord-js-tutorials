let today = new Date().getDay();

let bugunFrontend = document.querySelector('.bugun')

let gunler = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi']

bugunFrontend.innerHTML = `<h1>test</h1>`

switch (today) {
    case 0:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 1:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 2:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 3:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 4:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 5:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;
    case 6:
        bugunFrontend.innerHTML = `<h1>Bugün ${gunler[today]}</h1>`
        break;

    default:
        break;
}

