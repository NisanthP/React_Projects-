import React from "react";
import "./Tech.css";
import data from "./Images/data scientist.webp";
import iot from "./Images/iot.png";
import vr from "./Images/vr.png";
import ml from "./Images/ml-engineer.png";
import Menu from "./Menu";

function Technologies() {
  return (
    <>
    <Menu/>
      <div className="backcolor container-fluid">
        <h1>Learn 4.0 Technologies</h1>
        <pre className="tech-p">
          Get trained by alumini of IIT's and top companies like Amazon,
          Microsoft, Intel <br /> and Qualcomm, etc. Learn directly from
          profesionals involved in Product Devolopment
        </pre>
        <div className="sub-con">
          <div className="row">
            <div className="sub-data col">
              <h1>Data Scientist</h1>
              <h6>
                Data scientist gather and analist large sets of structured and
                unstructured data
              </h6>
              <img src={data} />
            </div>
            <div className="sub-iot col">
              <h1>IOT Developers</h1>
              <h6>
              IoT Developers, also known as Internet of Things Developers, are specialized programmers who design, code, implement and maintain the applications for Internet of Things devices.
              </h6>
              <img src={iot} />
            </div>
          </div>
          <div className="row">
            <div className="sub-vr col">
              <h1>VR Developer</h1>
              <h6>
                A VR developer creates applications and experiences that
                leverage augmented realit.
              </h6>
              <img src={vr} />
            </div>
            <div className="sub-ml col">
              <h1>ML Enginee</h1>
              <h6>
                A Machine Learning Engineer is responsible for designing and
                developing machine learning systems
              </h6>
              <img src={ml} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
