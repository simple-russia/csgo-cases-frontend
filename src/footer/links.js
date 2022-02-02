
import Translate from 'Translator/tr';

export default () => [
    {
        blockName: Translate('footer/other-projects'),
        links: [
            { linkName: Translate("footer/case-simulator"), href: ""},
            { linkName: "Alinguo", href: "https://alinguo.com/"},
        ]
    },
    {
        blockName: Translate('footer/project-repos'),
        links: [
            { linkName: "UI/UX design", href: "https://github.com/simple-russia/csgo-cases-uxui"},
            { linkName: "Frontend", href: "https://github.com/simple-russia/csgo-cases-frontend"},
            { linkName: "Backend", href: "https://github.com/simple-russia/csgo-cases-backend"},
            { linkName: "Database", href: "https://github.com/simple-russia/csgo-cases-backend"},
            { linkName: Translate('footer/author-github'), href: "https://github.com/simple-russia/csgo-db"},
        ]
    },
    {
        blockName: Translate('footer/about'),
        links: [
            { linkName: Translate("footer/special-thanks"), href: ""},
            { linkName: Translate("footer/author-page"), href: ""},
            { linkName: Translate("footer/about-the-project"), href: ""},
        ]
    },
];
