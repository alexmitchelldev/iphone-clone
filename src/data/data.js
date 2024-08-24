const appTypes = {
  app: 1,
  widget: 2,
};

const appsData = [
  {
    id: 1,
    label: "Weather",
    icon: "/images/apps/weather.png",
    link: null,
    type: appTypes.widget,
    background: "#81D4FA",
  },
  {
    id: 2,
    label: "What I'm listening to",
    icon: "/images/apps/music.png",
    link: null,
    type: appTypes.widget,
    background: "#f50057",
  },
  {
    id: 3,
    label: "About Me",
    icon: "/images/apps/about.png",
    link: "/about",
    type: appTypes.app,
    background: "#A8D5BA",
  },
  {
    id: 4,
    label: "Portfolio",
    icon: "/images/apps/folder.png",
    link: "/portfolio",
    type: appTypes.app,
    background: "#AFCBFF",
  },
  {
    id: 5,
    label: "Skills",
    icon: "/images/apps/skills.png",
    link: "/skills",
    type: appTypes.app,
    background: "#FFCCB6",
  },
  {
    id: 6,
    label: "Contact",
    icon: "/images/apps/messages.png",
    link: "/messages",
    type: appTypes.app,
    background: "#D7BDE2",
  },
];

const data = {
  appTypes: appTypes,
  appsData: appsData,
};

export default data;
