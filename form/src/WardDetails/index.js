/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Form, Input, Select, DatePicker, Space, Button } from "antd";
import "./index.css";
import Upload from "../Component/Upload";
import { RightSquareOutlined } from "@ant-design/icons";
const Option = { Select };

export default function ({ setActiveKey }) {
  const tabChange = (value) => {
    setActiveKey(value);
  };
  console.log("added");
  return (
    <div className="title">
      <div className="ward">
        <Form className="ward-form" wrapperCol={{ col: 8, span: 24 }}>
          <div style={{ fontSize: "30px", margin: "30px" }}>
            Student Details
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="formChild">
              <Form.Item name="first_name" rules={[{ required: true }]}>
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item name="std" rules={[{ required: true }]}>
                <Select placeholder="Class" allowClear>
                  <Option value="std">LKG</Option>
                  <Option value="std">UKG</Option>
                  <Option value="std">1</Option>
                  <Option value="std">2</Option>
                  <Option value="std">3</Option>
                  <Option value="std">4</Option>
                  <Option value="std">5</Option>
                  <Option value="std">6</Option>
                  <Option value="std">7</Option>
                  <Option value="std">8</Option>
                  <Option value="std">9</Option>
                  <Option value="std">10</Option>
                  <Option value="std">11</Option>
                  <Option value="std">12</Option>
                </Select>
              </Form.Item>
              <Form.Item name="weight" rules={[{ required: true }]}>
                <Input placeholder="Weight" />
              </Form.Item>
              <Form.Item name="nationality" rules={[{ required: true }]}>
                <Input placeholder="Nationality" />
              </Form.Item>
              <Form.Item name="religion" rules={[{ required: true }]}>
                <Select placeholder="Religion" allowClear>
                  <Option value="hindu">Hindu</Option>
                  <Option value="christian">Christian</Option>
                  <Option value="muslim">Muslim</Option>
                </Select>
              </Form.Item>
              <Form.Item name="community" rules={[{ required: true }]}>
                <Select placeholder="Community" allowClear>
                  <Option value="male">Fc</Option>
                  <Option value="male">BC</Option>
                  <Option value="male">MBC</Option>
                  <Option value="male">SC</Option>
                  <Option value="male">Muslim BC</Option>
                </Select>
              </Form.Item>

              <Form.Item name="ageproof" rules={[{ required: true }]}>
                <div style={{ textAlign: "center" }}>
                  <p>
                    <span style={{ fontSize: "18px" }}>Age Proof</span>
                    <br />
                    <span>
                      Upload document for age proof
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <Upload />
                </div>
              </Form.Item>
            </div>
            <div className="formChild">
              <Form.Item name="last_name" rules={[{ required: true }]}>
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item name="dob" rules={[{ required: true }]}>
                {/* <Space direction="vertical"> */}
                <DatePicker placeholder="DOB" style={{ width: "100%" }} />
                {/* </Space> */}
              </Form.Item>
              <Form.Item name="blood_group" rules={[{ required: true }]}>
                <Select placeholder="Blood Group" allowClear>
                  <Option value="std">A+</Option>
                  <Option value="std">A-</Option>
                  <Option value="std">B+</Option>
                  <Option value="std">B-</Option>
                  <Option value="std">O+</Option>
                  <Option value="std">0-</Option>
                </Select>
              </Form.Item>
              <Form.Item name="motherTongue" rules={[{ required: true }]}>
                <Input placeholder="Mother Tongue" />
              </Form.Item>
              <Form.Item name="extra_curricular" rules={[{ required: true }]}>
                <Input placeholder="Extra Curricular Activity" />
              </Form.Item>
              <Form.Item name="prof_in_sports" rules={[{ required: true }]}>
                <Input placeholder="Proficiency in Sports" />
              </Form.Item>
              <Form.Item name="Applicantphoto" rules={[{ required: true }]}>
                <div style={{ textAlign: "center" }}>
                  <p>
                    <span style={{ fontSize: "18px" }}>Applicant Photo</span>
                    <br />
                    <span>
                      Upload document for Photo
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <Upload />
                </div>
              </Form.Item>
            </div>
            <div className="formChild">
              <Form.Item name="gender" rules={[{ required: true }]}>
                <Select placeholder="Gender" allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item name="height" rules={[{ required: true }]}>
                <Input placeholder="Height" prefix="CM" />
              </Form.Item>
              <Form.Item name="adhar" rules={[{ required: true }]}>
                <Input placeholder="Aadhar Number" />
              </Form.Item>
              <Form.Item name="special_eads" rules={[{ required: true }]}>
                <Input placeholder="Special Eeds" />
              </Form.Item>
              <Form.Item name="board" rules={[{ required: true }]}>
                <Select placeholder="Board" allowClear>
                  <Option value="male">CBSE</Option>
                  <Option value="female">ICSE</Option>
                  <Option value="other">SAMACHEER</Option>
                </Select>
              </Form.Item>
              <Form.Item name="distance" rules={[{ required: true }]}>
                <Input placeholder="Distance" />
              </Form.Item>

              <Form.Item name="distance" rules={[{ required: true }]}>
                <div style={{ textAlign: "center" }}>
                  <p>
                    <span style={{ fontSize: "18px" }}>
                      Applicant Aadhar Card
                    </span>
                    <br />
                    <span>
                      Upload document for Aadhar Card
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <Upload />
                </div>
              </Form.Item>
            </div>
          </div>
          <div style={{ display: "flex", alignSelf: "flex-end" }}>
            <Button
              type="primary"
              style={{ float: "right" }}
              onClick={() => {
                tabChange("6");
              }}
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
