import React, { useState } from "react";
import "./Login.css";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const Login = ({ setActiveKey }) => {
  const [form] = Form.useForm();

  const createRecords = (values) => {
    axios("http://192.168.0.112:3003/parent/createparents", {
      method: "POST",
      data: values,
    }).then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        message.success("added successfully");
        form.resetFields();
        setActiveKey("3");
      }
    });
  };

  const onFinish = () => {
    console.log("hitted");
    form.validateFields().then((values) => {
      createRecords(values);
    });
  };

  return (
    <div className="main">
      <div className="card">
        <h1>
          <span>Verify With Email</span>
        </h1>

        <Form form={form} labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
          <Form.Item
            label="Enter Your Email Id"
            name="mail"
            rules={[{ required: true, message: "Please input your Email Id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Enter your Mobile Number"
            name="mobile"
            rules={[
              { required: true, message: "Please input your Mobile Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Button
            style={{
              float: "right",
            }}
            onClick={onFinish}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
