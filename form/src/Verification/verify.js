import React from "react";
import "./verify.css";

import { Form, Input, Button, message } from "antd";

const Verify = () => {
  const [form] = Form.useForm();

  return (
    <div className="title">
      <div className="card">
        <h1 style={{ margin: "30px" }}>
          <span>OTP Verification</span>
        </h1>
        <p style={{ textAlign: "center" }}>
          <span>
            You will receive the verification code to your registered email
            under 5 minutes.
            <br />
            If you still have not received the verification code, Please try
            after some time.
          </span>
        </p>

        <Form form={form} wrapperCol={{ span: 24 }}>
          <Form.Item
            name="mail"
            rules={[{ required: true, message: "Please input your Email Id!" }]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Input
                placeholder="   Enter Verification Code"
                style={{ margin: "20px" }}
                prefix={"OTP : "}
              />
              <p style={{ textAlign: "center" }}>
                <span>
                  Please confirm the details entered in this page is accurate
                  before clicking to the next page, to the page.
                  <br />
                  The data might be cleared if you return
                </span>
              </p>
              <div
                style={{
                  margin: "30px",
                }}
              >
                <Button>Cancel</Button>
                <Button type="primary">Next</Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Verify;
