import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./index.css";

export default function Address({ setActiveKey }) {
  const tabChange = (value) => {
    setActiveKey(value);
  };
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
            <div>
              <Form.Item
                name="addrss_1"
                rules={[
                  { required: true, message: "Please input your Address" },
                ]}
                className="Address"
              >
                <Input placeholder="Address 1" />
              </Form.Item>

              <Form.Item
                name="address_2"
                className="Address"
                wrapperCol={{ span: 16 }}
              >
                <Input placeholder="Address 2" />
              </Form.Item>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
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
                <InputNumber placeholder="Pin Code" name="pincode1" />
              </Form.Item>
            </div>

            <div style={{ fontSize: "20px", margin: "30px" }}>
              Permanent Address
            </div>
            <div>
              <Form.Item
                name="addrss_1"
                rules={[
                  { required: true, message: "Please input your Address" },
                ]}
                className="Address"
              >
                <Input placeholder="Address 1" />
              </Form.Item>

              <Form.Item
                name="addrss_2"
                className="Address"
                wrapperCol={{ span: 16 }}
              >
                <Input placeholder="Address 2" />
              </Form.Item>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
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
                <InputNumber placeholder="Pin Code" name="pincode1" />
              </Form.Item>
            </div>
            <Button
              type="primary"
              style={{
                display: "flex",
                alignSelf: "flex-end",
                margin: "40px",
                float: "right",
              }}
              onClick={() => {
                tabChange("7");
              }}
            >
              Next
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
