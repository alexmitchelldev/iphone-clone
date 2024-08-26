// src/components/Topbar.js
import "../index.css";
import data from "../data/data";
import TimeDisplay from "./TimeDisplay";
// import Spacer from "./Spacer";

const TopBar = () => {
  return (
    <div className="top-bar">
      <TimeDisplay />
      <div className="notch">
        <div className="camera"></div>
      </div>
      <div className="status-bar">
        {data.statusIconsData.map((icon) => {
          return <img src={icon.icon} alt={icon.alt} className="icon"></img>;
        })}
      </div>
    </div>
  );
};

export default TopBar;
