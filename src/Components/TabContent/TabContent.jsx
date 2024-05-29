import styles from "./TabContent.module.css";
const TabContent = ({ data }) => {
  return <div className={styles.contentContainer}>{data.content}</div>;
};
export default TabContent;
