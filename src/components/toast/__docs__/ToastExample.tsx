import React, { FC } from "react";
import Toast, { ToastProps } from "../Toast";

const ToastExample: FC<ToastProps> = ({ text, type, mobile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Toast text={text} type={type} mobile={mobile} />
    </div>
  );
};

export default ToastExample;
