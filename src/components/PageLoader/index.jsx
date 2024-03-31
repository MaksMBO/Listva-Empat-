import React from "react";
import { Spin } from "antd";

export default function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vh",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="centerAbsolute"
    >
      <Spin size="large" />
    </div>
  );
}
