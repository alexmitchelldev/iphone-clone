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
  },
  {
    id: 2,
    label: "Music",
    icon: "/images/apps/music.png",
    link: null,
    type: appTypes.widget,
  },
  {
    id: 3,
    label: "About Me",
    icon: "/images/apps/about.png",
    link: "/about",
    type: appTypes.app,
  },
  {
    id: 4,
    label: "Portfolio",
    icon: "/images/apps/folder.png",
    link: "/portfolio",
    type: appTypes.app,
  },
  {
    id: 5,
    label: "Skills",
    icon: "/images/apps/skills.png",
    link: "/skills",
    type: appTypes.app,
  },
  {
    id: 5,
    label: "Messages",
    icon: "/images/apps/messages.png",
    link: "/messages",
    type: appTypes.app,
  },
];

const data = {
  appTypes: appTypes,
  appsData: appsData,
};

export default data;
