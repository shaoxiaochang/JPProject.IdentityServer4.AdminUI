
const Home = {
    text: "Home",
    link: "/home",
    icon: "icon-home"
};

const Settings = {
    text: "Clients",
    link: "/clients",
    icon: "fas fa-desktop",
    submenu: [
        {
            text: "List",
            link: "/clients/list"
        }
    ]
};

const headingMain = {
    text: "Main Navigation",
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Settings
];
