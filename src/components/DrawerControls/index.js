import React, { useState } from "react";
import { Button, Drawer } from "antd";
import {
  AuditOutlined,
  EnvironmentOutlined,
  FileWordOutlined,
  FireOutlined,
  WechatOutlined,
} from "@ant-design/icons";

import PatientRecords from "../Forms/PatientRecords";
import AppointmentSummaryNotes from "../Forms/AppointmentSummaryNotes";
import PrescriptionItmes from "../Forms/PrescriptionItems";
import LabTestsInstructions from "../Forms/LabTestsInstructed";
import DoctorsAdvice from "../Forms/DoctorsAdvice";
import AdditionalControls from "./AdditionalControls";

import "./index.css";

const DrawerControls = () => {
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const closeDrawer = () => setCurrentDrawer(null);

  let DrawerForm = null;

  switch (currentDrawer) {
    case "patient-records":
      DrawerForm = <PatientRecords />;
      break;
    case "appointment-summary":
      DrawerForm = <AppointmentSummaryNotes />;
      break;
    case "prescription-items":
      DrawerForm = <PrescriptionItmes />;
      break;
    case "lab-tests":
      DrawerForm = <LabTestsInstructions />;
      break;
    case "doctor-advice":
      DrawerForm = <DoctorsAdvice />;
      break;
    default:
      DrawerForm = null;
      break;
  }

  return (
    <div className="drawer-controls">
      <div className="controls">
        <Button
          size="large"
          shape="circle"
          icon={<AuditOutlined />}
          className="control"
          onClick={() => setCurrentDrawer("patient-records")}
        />
        <Button
          size="large"
          shape="circle"
          icon={<EnvironmentOutlined />}
          className="control condition-render"
          onClick={() => setCurrentDrawer("appointment-summary")}
        />
        <Button
          size="large"
          shape="circle"
          icon={<FileWordOutlined />}
          className="control condition-render"
          onClick={() => setCurrentDrawer("prescription-items")}
        />
        <Button
          size="large"
          shape="circle"
          icon={<FireOutlined />}
          className="control condition-render"
          onClick={() => setCurrentDrawer("lab-tests")}
        />
        <Button
          size="large"
          shape="circle"
          icon={<WechatOutlined />}
          className="control condition-render"
          onClick={() => setCurrentDrawer("doctor-advice")}
        />
        <Drawer
          placement="left"
          onClose={closeDrawer}
          visible={!!currentDrawer}
          bodyStyle={{ paddingBottom: 80 }}
        >
          {DrawerForm}
          <AdditionalControls
            currentDrawer={currentDrawer}
            setCurrentDrawer={setCurrentDrawer}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default DrawerControls;
