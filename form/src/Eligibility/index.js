import React, { useEffect } from "react";
import data from "./data";
import "./index.css";
import { Button } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

import axios from "axios";

const Eligibility = ({ setActiveKey }) => {
  const tabChange = (value) => {
    setActiveKey(value);
  };

  let a = "http://192.168.0.112:3003/parent/getparents";

  const date = () => {
    axios(a, {
      method: "GET",
    })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    date();
  }, []);
  return (
    <div className="main">
      <div className="cards">
        <h1>
          <span>Eligibility</span>
        </h1>
        <ul>
          {data[0].map((e) => (
            <>
              <li style={{ lineHeight: "2em" }}>
                <span style={{ marginRight: "5px" }}>
                  <CheckCircleTwoTone />
                </span>
                {e}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="card">
        <h1>
          <span>Kindly go through the following points in detail.</span>
        </h1>
        <ul>
          {data[1].map((e) => (
            <>
              <li style={{ lineHeight: "2em" }}>
                <span style={{ marginRight: "5px" }}>
                  <CheckCircleTwoTone />
                </span>
                {e}
              </li>
            </>
          ))}
          <h1>
            <span>For Age Proof (any one)</span>
          </h1>
          <ul>
            {data[2].map((e) => (
              <>
                <li style={{ lineHeight: "2em" }}>
                  <span style={{ marginRight: "5px" }}>
                    <CheckCircleTwoTone />
                  </span>
                  {e}
                </li>
              </>
            ))}
            <h1>
              <span>For Address proof (any one)</span>
            </h1>
            <ul>
              {data[3].map((e) => (
                <>
                  <li style={{ lineHeight: "2em" }}>
                    <span style={{ marginRight: "5px" }}>
                      <CheckCircleTwoTone />
                    </span>
                    {e}
                  </li>
                </>
              ))}
            </ul>
          </ul>
        </ul>
      </div>
      <div className="card">
        <h1>
          <span>General Tips</span>
        </h1>
        <ul>
          {data[4].map((e) => (
            <>
              <li style={{ lineHeight: "2em" }}>
                <span style={{ marginRight: "5px" }}>
                  <CheckCircleTwoTone />
                </span>
                {e}
              </li>
            </>
          ))}
        </ul>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <img
            src={"photo-rejected.png"}
            alt=""
            style={{ width: "100px" }}
          ></img>
        </div>
        <Button
          type="primary"
          onClick={() => {
            tabChange("2");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Eligibility;
