import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Components/Tabs/Tabs";

const createTabsComponent = (container, tabsConfig) => {
  ReactDOM.render(<Tabs tabs={tabsConfig} />, container);
};

export default createTabsComponent;
