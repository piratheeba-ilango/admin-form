import React, { useState } from "react";
import "./Login.css";
import { Form, Input, Button, message, InputNumber } from "antd";
import { registerUser } from "../services";

const Login = ({ setActiveKey }) => {
  const [form] = Form.useForm();

  const createRecords = (values) => {
    const resp = registerUser(values);
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
            name="email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Enter your Mobile Number" name="mobile">
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
