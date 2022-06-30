import React from "react";
import "./Login.css";
import { Form, Input, Button } from "antd";

const Login = ({ setActiveKey }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("hitted");
    form.validateFields().then((values) => {
      console.log(values);
      setActiveKey("3");
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
            name="Enter Your Email Id"
            rules={[{ required: true, message: "Please input your Email Id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Enter your Mobile Number"
            name="Enter your Mobile Number"
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
