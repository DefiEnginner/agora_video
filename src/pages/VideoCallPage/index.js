import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";

import AgoraVideo from "../../components/AgoraVideo";
import DrawerControls from "../../components/DrawerControls";
import BrowserCheck from "../../components/BrowserCheck";
import "./index.css";

const VideoCallPage = (props) => {
  const [remoteJoined, setRemoteJoined] = useState(false);

  const leaveCall = () => props.history.push("/");

  return (
    <BrowserCheck>
      <div style={{ width: "100vw", height: "100vh" }}>
        <AgoraVideo
          remoteJoined={remoteJoined}
          setRemoteJoined={setRemoteJoined}
          leaveCall={leaveCall}
        />
        <DrawerControls />
        {!remoteJoined && (
          <div className="loader">
            <Spin /> Waiting For Participant ...
          </div>
        )}
      </div>
    </BrowserCheck>
  );
};

export default withRouter(VideoCallPage);
