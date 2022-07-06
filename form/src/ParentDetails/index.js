import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./index.css";
import { UploadOutlined } from "@ant-design/icons";

const Parent = ({ setActiveKey, form }) => {
  const tabChange = (value) => {
    setActiveKey(value);
  };
  const layout = {
    wrapperCol: { col: 8, span: 28 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = () => {
    form.validateFields().then((value) => {
      console.log(value);
    });
  };

  return (
    <div className="">
      <div className="">
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <div style={{ textAlign: "center" }}>
            <h1>
              <span>Father details</span>
            </h1>
          </div>

          <div
            style={{
              display: "flex",

              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "30px",
              }}
            >
              <Form.Item
                name={["user", "name"]}
                // label="FirstName"
                rules={[{ required: true }]}
              >
                <Input placeholder="FirstName" />
              </Form.Item>
              <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item name={["user", "occupation"]}>
                <Input placeholder="Occupation" />
              </Form.Item>
              <Form.Item name={["user", "income"]}>
                <Input placeholder="Income" />
              </Form.Item>

              {/* <Form.Item name={["user", "income"]} label="Income">
                <Input />
              </Form.Item> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "30px",
              }}
            >
              <Form.Item
                name={["user", "name"]}
                // label="LastName"
                rules={[{ required: true }]}
              >
                <Input placeholder="LastName" />
              </Form.Item>
              <Form.Item
                name={["user", "mobile"]}
                //   label="MobileNumber"
              >
                <Input placeholder="MobileNumber" />
              </Form.Item>

              <Form.Item name={["user", "work"]}>
                <Input placeholder="Place of Work" />
              </Form.Item>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <p>
              <span style={{ fontSize: "18px", textAlign: "center" }}>
                Father Photo
              </span>
              <br />
              <span>
                Upload document for Photo
                <br />
                (Only JPG or JPEG or PNG or PDF Format)*
              </span>
            </p>
            <label
              for="myFile"
              style={{
                outline: "none",
                padding: "5px 10px",
                backgroundColor: "#1890ff",
                borderRadius: "2px",
                color: "#efefef",
                marginLeft: "15px",
              }}
            >
              <UploadOutlined style={{ marginRight: "5px" }} />
              Upload
            </label>
            <input type="file" id="myFile" name="filename" hidden />
          </div>
          <div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h1>
                <span>Mother Details</span>
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  margin: "30px",
                }}
              >
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                  <Input placeholder="FirstName" />
                </Form.Item>
                <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name={["user", "occupation"]}>
                  <Input placeholder="Occupation" />
                </Form.Item>
                <Form.Item name={["user", "income"]}>
                  <Input placeholder="Income" />
                </Form.Item>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "30px",
                }}
              >
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                  <Input placeholder="LastName" />
                </Form.Item>

                <Form.Item name={["user", "mobile"]}>
                  <Input placeholder="MobileNumber" />
                </Form.Item>

                <Form.Item name={["user", "work"]}>
                  <Input placeholder="Place of Work" />
                </Form.Item>

                {/* <Form.Item name={["user", "income"]} label="Income">
              <Input />
            </Form.Item> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "18px", textAlign: "center" }}>
                  Mother Photo
                </span>
                <br />
                <span>
                  Upload document for Photo
                  <br />
                  (Only JPG or JPEG or PNG or PDF Format)*
                </span>
              </p>
              <label
                for="myFile"
                style={{
                  outline: "none",
                  padding: "5px 10px",
                  backgroundColor: "#1890ff",
                  borderRadius: "2px",
                  color: "#efefef",
                }}
              >
                <UploadOutlined style={{ marginRight: "5px" }} />
                Upload
              </label>
              <input type="file" id="myFile" name="filename" hidden />
            </div>
          </div>
          <Button
            style={{ float: "right" }}
            type="primary"
            onClick={() => {
              tabChange("8");
              onFinish();
            }}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Parent;
