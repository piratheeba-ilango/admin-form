import React from "react";
import "./Thank.css";
import { Button } from "antd";
const Thank = () => {
  return (
    <div className="mains8">
      <div className="card8">
        <h1>
          <span>Thanks For Registering With Us</span>
        </h1>
        <br></br>
        <p>Your submission has been received.</p>
        <p>A member of our team will contact you shortly.</p>
        <br></br>
        <p>
          You can also <a href="">download</a> your filled application form
          here.
        </p>
      </div>
      <Button type="primary" style={{ float: "right" }}>
        Print
      </Button>
    </div>
  );
};

export default Thank;
