import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./index.css";
import { Col, Row } from "antd";

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
              width: "100%",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col span={12}>
                <div
                  style={{
                    fontSize: "10px",
                    margin: "30px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ textAlign: "center" }}>Communication Address</h1>
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

                  <Form.Item name="address_2" className="Address">
                    <Input placeholder="Address 2" />
                  </Form.Item>
                  <Form.Item className="Address">
                    <Input placeholder="state" name="state" />
                  </Form.Item>

                  <Form.Item className="Address">
                    <Input placeholder="City" name="city" />
                  </Form.Item>

                  <Form.Item className="Address">
                    <InputNumber placeholder="Pin Code" name="pincode1" />
                  </Form.Item>
                </div>
              </Col>

              <Col span={12}>
                <div
                  style={{
                    fontSize: "10px",
                    margin: "30px",

                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ textAlign: "center" }}>Permanent Address</h1>
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

                  <Form.Item name="addrss_2" className="Address">
                    <Input placeholder="Address 2" />
                  </Form.Item>
                  <Form.Item className="Address">
                    <Input placeholder="state" name="state" />
                  </Form.Item>

                  <Form.Item className="Address">
                    <Input placeholder="City" name="city" />
                  </Form.Item>

                  <Form.Item className="Address">
                    <InputNumber placeholder="Pin Code" name="pincode1" />
                  </Form.Item>
                </div>
              </Col>
            </Row>

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
