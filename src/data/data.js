const appTypes = {
  app: 1,
  widget: 2,
};

const statusIconsData = [
  {
    id: 1,
    alt: "Cellular signal icon",
    icon: "/images/apps/signal.png",
  },
  {
    id: 2,
    alt: "Wifi signal icon",
    icon: "/images/apps/wifi.png",
  },
  {
    id: 3,
    alt: "Battery percentage icon",
    icon: "/images/apps/battery.png",
  },
];

const appsData = [
  {
    id: 1,
    label: "Weather",
    icon: "/images/apps/weather.svg",
    link: "/weather",
    type: appTypes.widget,
    // background: "linear-gradient(to top, #B3E5FC, #1565C0)",
    background: "#1565C0",
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

const weatherIcons = [
  {
    id: 1,
    link: "/images/weather/sunny.png",
    reference:
      "https://www.iconfinder.com/icons/2682848/day_forecast_sun_sunny_weather_icon",
  },
];

const data = {
  statusIconsData: statusIconsData,
  appTypes: appTypes,
  appsData: appsData,
  weatherIcons: weatherIcons,
};

export default data;
