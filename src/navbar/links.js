
import store from 'Redux';
import Translate from 'Translator/tr';

const links = [
    {
      to: "/cases",
      link: "cases",
      // name: "cases",
    },
    {
      to: "/inventory",
      link: "inventory",
      // name: "inventory",
    },
    {
      to: "/contracts",
      link: "contracts",
      // name: "contracts",
    },
    {
      to: "/statistics",
      link: "statistics",
      // name: "statistics",
    },
    {
      to: "/about",
      link: "about",
      // name: "about",
    },
];

const changeLang = () => {
  links[0].name  = Translate('navlink-cases')
  for (let i of links) {
    i.name = Translate(`navlink-${i.link}`)
  }
}
store.subscribe(changeLang)
changeLang();

export default links;