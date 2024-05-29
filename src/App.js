import { useEffect } from "react";
import "./App.css";
import Tabs from "./Components/Tabs/Tabs";
import createTabsComponent from "./createTabsComponent";

const data = [
  { label: "Zakładka1", content: "content1" },
  { label: "Zakładka2", content: "content2" },
  { label: "Zakładka3", content: "content3" },
  { label: "Zakładka4", content: "content4" },
  { label: "Zakładka5", content: "content5" },
  { label: "Zakładka6", content: "content6" },
  { label: "Zakładka7", content: "content7" },
  { label: "Zakładka8", content: "content8" },
  { label: "Zakładka9", content: "content9" },
  { label: "Zakładka10", content: "content10" },
];
const App = () => {
  useEffect(() => {
    const container = document.getElementById("App");
    createTabsComponent(container, data);
  }, []);
  return <div id="App"></div>;
};

export default App;
