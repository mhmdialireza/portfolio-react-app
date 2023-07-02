import React from "react";

import "./about-us-box.css";

const AboutUsBox = ({ title, desc, icon }) => {
  return (
    <div class="col-6">
      <div class="about-us__box">
        <div class="about-us__box-right">
          <i class="far fa-copyright about-us__icon"></i>
        </div>
        <div class="about-us__box-left">
          <span class="about-us__box-title">{title}</span>
          <span class="about-us__box-text">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBox