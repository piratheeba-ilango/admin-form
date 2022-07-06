import React, { useState } from "react";
import "./cate.css";
import { Button } from "antd";
import { Input, Radio, Space, Form } from "antd";

const AdmissionType = ({ setActiveKey }) => {
  const [relevantType, setReleventType] = useState("Generel");
  const tabChange = (value) => {
    setActiveKey(value);
  };

  const [value, setValue] = useState();
  const [form] = Form.useForm();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setReleventType(e.target.value);
    console.log(relevantType);
  };

  return (
    <div className="mains">
      <div className="card3">
        <h1>
          <span>Admission Type</span>
        </h1>
        <p>Please select the relevant type mentioned below,</p>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={"Generel"}>General</Radio>
            <Radio value={"Father"}>Father As Alumini </Radio>
            {relevantType === "Father" ? (
              <>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item
                  name="Year"
                  rules={[
                    {
                      required: true,
                      message: "Please input  your Passed Out Year!",
                    },
                  ]}
                >
                  <Input placeholder="Year Passed Out" />
                </Form.Item>
              </>
            ) : null}

            <Radio value={"Mother"}>Mother As Alumini</Radio>
            {relevantType === "Mother" ? (
              <>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item
                  name="Year"
                  rules={[
                    {
                      required: true,
                      message: "Please input  your Passed Out Year!",
                    },
                  ]}
                >
                  <Input placeholder="Year Passed Out" />
                </Form.Item>
              </>
            ) : null}

            <Radio value={"Siblings"}>
              Sibilings
              {/* {value === 4 ? (
                <Input style={{ width: 100, marginLeft: 10 }} />
              ) : null} */}
            </Radio>
          </Space>
        </Radio.Group>

        {relevantType === "Siblings" ? (
          <div>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your Sibiling Name!" },
              ]}
            >
              <Input placeholder="Sibiling Name" />
            </Form.Item>

            <Form.Item
              name="class"
              rules={[
                {
                  required: true,
                  message: "Please input  your Sibiling Class!",
                },
              ]}
            >
              <Input placeholder="Sibiling Class" />
            </Form.Item>
            <Form.Item
              name="Section"
              rules={[
                {
                  required: true,
                  message: "Please input  your Sibiling Section!",
                },
              ]}
            >
              <Input placeholder="Sibiling Section" />
            </Form.Item>
          </div>
        ) : null}

        <p>
          Please confirm the details entered in this page is accurate before
          clicking to the next page, The data might be cleared if you return to
          the page.
        </p>
        <Button
          type="primary"
          onClick={() => {
            tabChange("5");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default AdmissionType;
