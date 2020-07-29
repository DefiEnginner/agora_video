import React from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";

import AgoraVideo from "../../components/AgoraVideo";
import DrawerControls from "../../components/DrawerControls";
import BrowserCheck from "../../components/BrowserCheck";
import "./index.css";

const VideoCallPage = (props) => {
  const leaveCall = () => props.history.push("/");

  return (
    <BrowserCheck>
      <div style={{ width: "100vw", height: "100vh" }}>
        <AgoraVideo leaveCall={leaveCall} />
        <DrawerControls />
        <div className="loader">
          <Spin /> Awaiting other participant
        </div>
      </div>
    </BrowserCheck>
  );
};

export default withRouter(VideoCallPage);
