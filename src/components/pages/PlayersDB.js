import React, { useState } from "react";
import "./PlayersDB.css";
import ClubTab from "./tabs/ClubsTab";

const PlayersDB = () => {
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    // update the state to tab2
    setActiveTab("tab4");
  };
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Club Tab
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Player Tab
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Events Tab
        </li>
        <li
          className={activeTab === "tab4" ? "active" : ""}
          onClick={handleTab4}
        >
          FA Tab
        </li>
      </ul>
      <div className="outlet">
        <div title="Tab 1" id="tab1" activeTab={activeTab}>
          <ClubTab ></ClubTab>
        </div>
        <div title="Tab 2" id="tab2" activeTab={activeTab}>
          <ClubTab ></ClubTab>
        </div>
        <div title="Tab 3" id="tab3" activeTab={activeTab}>
          <ClubTab ></ClubTab>
        </div>
        <div title="Tab 4" id="tab4" activeTab={activeTab}>
          <ClubTab ></ClubTab>
        </div>
      </div>
    </div>
  );
};

export default PlayersDB;
