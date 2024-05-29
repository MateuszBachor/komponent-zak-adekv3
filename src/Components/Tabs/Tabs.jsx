import { useState } from "react";
// import TabContent from "../TabContent/TabContent";
import styles from "./Tabs.module.css";
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={styles.mainConteiner}>
      <div className={styles.tabsContainer}>
        {tabs
          ? tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.tabElement} ${
                    activeTab.label === tab.label ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.label}
                </div>
              );
            })
          : null}
      </div>
      {/* {activeTab ? <TabContent data={activeTab} /> : null} */}
      {activeTab ? (
        <div className={styles.contentContainer}>{activeTab.content}</div>
      ) : null}
    </div>
  );
};
export default Tabs;
