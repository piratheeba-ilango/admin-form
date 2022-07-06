import "./App.css";
import Eligibility from "./Eligibility/index";
import { Button, Form, Tabs } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import Login from "./Registration/Login";
import Verify from "./Verification/verify";
import AdmissionType from "./Categories/cate";
import WardDetails from "./WardDetails";
import Thank from "./Thankyou/Thank";
import Address from "./Address";
import Parent from "./ParentDetails";
import axios from "axios";

function App() {
  const [form] = Form.useForm();
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log("current key is", key);
    setActiveKey(key);
  };

  const handleEvent = () => {
    let a = {
      email: "wdwd1@gmail.com",
      mobile: "8940972627",
      relevent_type: "Father",
      mother_name: "d22d2d2d",
      father: "",
      siblings_name: "siblings",
    };
    const formdata = new FormData();
    formdata.append("username", a);
    axios.post("http://192.168.0.112:3002/user/create", a).then((resp) => {
      console.log(resp);
    });
  };
  return (
    <>
      <div className="App">
        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <img src={"/dav.jpg"} alt="" style={{ width: "100px" }}></img>
        </div>
        <button onClick={handleEvent}>call</button>
        <Form>
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
              <Verify setActiveKey={setActiveKey} />
            </TabPane>
            <TabPane tab="Category" key="4">
              <AdmissionType setActiveKey={setActiveKey} />
            </TabPane>
            <TabPane tab="Ward Details" key="5">
              <WardDetails setActiveKey={setActiveKey} />
            </TabPane>
            <TabPane tab="Address" key="6">
              <Address setActiveKey={setActiveKey} />
            </TabPane>
            <TabPane tab="Parent Details" key="7">
              <Parent setActiveKey={setActiveKey} />
            </TabPane>
            <TabPane tab="Thank you" key="8">
              <Thank />
            </TabPane>
          </Tabs>
        </Form>
      </div>
    </>
  );
}

export default App;
