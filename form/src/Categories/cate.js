import React, { useState } from "react";
import "./cate.css";
import { Button, RadioChangeEvent } from "antd";
import { Input, Radio, Space, Form } from "antd";

const AdmissionType = ({ setActiveKey }) => {
  const tabChange = (value) => {
    setActiveKey(value);
  };

  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
            <Radio value={1}>General</Radio>
            <Radio value={2}>Father As Alumini </Radio>
            <Radio value={3}>Mother As Alumini</Radio>
            <Radio value={4}>
              Sibilings
              {/* {value === 4 ? (
                <Input style={{ width: 100, marginLeft: 10 }} />
              ) : null} */}
            </Radio>
          </Space>
        </Radio.Group>
        <Form form={form} labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Year Passed Out"
            name="Year"
            rules={[
              {
                required: true,
                message: "Please input  your Passed Out Year!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
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
