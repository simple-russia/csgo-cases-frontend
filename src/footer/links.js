
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
            { linkName: "UI/UX design", href: ""},
            { linkName: "Frontend", href: "https://github.com/simple-russia/csgo-cases-frontend"},
            { linkName: "Backend", href: ""},
            { linkName: Translate('footer/author-github'), href: ""},
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
