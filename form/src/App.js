import "./App.css";
import Eligibility from "./Eligibility/index";
import { Button, Tabs } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import Login from "./Registration/Login";
import Verify from "./Verification/verify";

function App() {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log("current key is", key);
    setActiveKey(key);
  };
  return (
    <>
      <div className="App">
        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <img src={"/logo-final.png"} alt="" style={{ width: "100px" }}></img>
        </div>

        <Tabs
          onChange={onChange}
          type="card"
          centered
          animated={true}
          tabBarGutter={40}
          activeKey={activeKey}
        >
          <TabPane tab="Eligibility" key="1">
            <Eligibility setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="Registration" key="2" style={{ padding: "200px" }}>
            <Login setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="Verification" key="3">
            <Verify />
          </TabPane>
          <TabPane tab="Category" key="4">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Ward Details" key="5">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Address" key="6">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Parent Details" key="7">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Thank you" key="8">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default App;
