import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  EnvironmentOutlined,
  FileWordOutlined,
  FireOutlined,
  WechatOutlined,
} from "@ant-design/icons";

const AdditionalControls = ({ currentDrawer, setCurrentDrawer }) => {
  return (
    <div className="additional-controls">
      <div className="controls">
        {currentDrawer !== "patient-records" && (
          <Button
            size="large"
            shape="circle"
            icon={<AuditOutlined />}
            className="control"
            onClick={() => setCurrentDrawer("patient-records")}
          />
        )}
        {currentDrawer !== "appointment-summary" && (
          <Button
            size="large"
            shape="circle"
            icon={<EnvironmentOutlined />}
            className="control"
            onClick={() => setCurrentDrawer("appointment-summary")}
          />
        )}
        {currentDrawer !== "prescription-items" && (
          <Button
            size="large"
            shape="circle"
            icon={<FileWordOutlined />}
            className="control"
            onClick={() => setCurrentDrawer("prescription-items")}
          />
        )}
        {currentDrawer !== "lab-tests" && (
          <Button
            size="large"
            shape="circle"
            icon={<FireOutlined />}
            className="control"
            onClick={() => setCurrentDrawer("lab-tests")}
          />
        )}
        {currentDrawer !== "doctor-advice" && (
          <Button
            size="large"
            shape="circle"
            icon={<WechatOutlined />}
            className="control"
            onClick={() => setCurrentDrawer("doctor-advice")}
          />
        )}
      </div>
    </div>
  );
};

export default AdditionalControls;
