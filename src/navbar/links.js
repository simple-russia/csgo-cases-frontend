
import Translate from 'Translator/tr';

const links = () => [
    {
      to: "/cases",
      name: Translate('navlink-cases')
    },
    {
      to: "/inventory",
      name: Translate("navlink-inventory"),
    },
    {
      to: "/contracts",
      name: Translate("navlink-contracts"),
    },
    {
      to: "/statistics",
      name: Translate("navlink-statistics"),
    },
    {
      to: "/about",
      name: Translate("navlink-about"),
    },
];

export default links;