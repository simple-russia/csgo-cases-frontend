import store from "Redux";

const dict = {
    ru: {
        'language': 'Привет! Добро пожаловать!',
        'navlink-cases': 'Кейсы',
        'navlink-inventory': 'Инвентарь',
        'navlink-contracts': 'Контракты',
        'navlink-statistics': 'Статистика',
        'navlink-about': 'О проекте',
    },
    en: {
        'language': 'Hi! Nice to see you!',
        'navlink-cases': 'cases',
        'navlink-inventory': 'Inventory',
        'navlink-contracts': 'Contracts',
        'navlink-statistics': 'Statistics',
        'navlink-about': 'About',
    },
    es: {
        'language': 'Hola! Encontado!',
        'navlink-cases': 'casiudar',
        'navlink-inventory': 'Invetariar',
        'navlink-contracts': 'Contrecto',
        'navlink-statistics': 'Statiduar',
        'navlink-about': 'Con projecto',
    }
}


const Translate = (phrase) => {
    const language = store.getState().language; 
    return dict[language][phrase];
}

const changeLang = () => {
    const newLang = store.getState().language;

    console.log('The new language now is', newLang)
}
store.subscribe(changeLang);

export default Translate;