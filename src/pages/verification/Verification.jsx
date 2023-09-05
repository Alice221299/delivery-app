import React from "react";
import "./verification.scss";

const Verification = () => {
  return (
    <div className="verification">
      <div className="verification__box">
        <img src={logo} alt="" />
        <h1 className="verification__title">Verification</h1>
        <p className=" verification__text">
          Enter the four-digit code from SMS SMS not received.{" "}
          <span className="verification__span"> Send again?</span>
        </p>
        <div>__ __ __ __</div>
      </div>

      <div className="verification__numbers">
        <img src={keyboard} alt="" />
      </div>
    </div>
  );
};

export default Verification;
