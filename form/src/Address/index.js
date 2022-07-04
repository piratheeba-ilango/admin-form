import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./index.css";

export default function Address() {
  const [form] = Form.useForm();

  return (
    <>
      <div className="main">
        <div className="cards">
          <Form
            form={form}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "20px", margin: "30px" }}>
              Communication Address
            </div>
            <div style={{ display: "flex" }}>
              <Form.Item
                name="Address 1"
                label={"Address 1"}
                rules={[
                  { required: true, message: "Please input your Address" },
                ]}
                className="Address"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Address 2"
                label={"Address 2"}
                className="Address"
                wrapperCol={{ span: 16 }}
              >
                <Input />
              </Form.Item>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Item wrapperCol={{ span: 20 }}>
                <Input placeholder="state" name="state" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 20 }}>
                <Input placeholder="City" name="city" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 20 }}>
                <InputNumber placeholder="Pin Code" name="pinCode" />
              </Form.Item>
            </div>

            <div style={{ fontSize: "20px", margin: "30px" }}>
              Permanent Address
            </div>
            <div style={{ display: "flex" }}>
              <Form.Item
                name="Address 1"
                label={"Address 1"}
                rules={[
                  { required: true, message: "Please input your Address" },
                ]}
                className="Address"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Address 2"
                label={"Address 2"}
                className="Address"
                wrapperCol={{ span: 16 }}
              >
                <Input />
              </Form.Item>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Item wrapperCol={{ span: 20 }}>
                <Input placeholder="state" name="state" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 20 }}>
                <Input placeholder="City" name="city" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 20 }}>
                <InputNumber placeholder="Pin Code" name="pinCode" />
              </Form.Item>
            </div>
            <Button
              type="primary"
              style={{ display: "flex", alignSelf: "flex-end", margin: "40px" }}
            >
              Next
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
