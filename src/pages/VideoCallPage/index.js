import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spin, notification } from "antd";
import { isChrome, isFirefox, mobileVendor } from "react-device-detect";

import AgoraVideo from "../../components/AgoraVideo";
import DrawerControls from "../../components/DrawerControls";
import "./index.css";

const VideoCallPage = (props) => {
  const [remoteJoined, setRemoteJoined] = useState(false);

  useEffect(() => {
    if (mobileVendor === "iPhone" && (isChrome || isFirefox)) {
      props.history.push("/");
      notification.error({
        message: "Browser not supported",
        description:
          "We only support safari on iPhone. Please check your browser and join again.",
      });
    }
  }, []);

  const leaveCall = () => props.history.push("/");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgoraVideo
        remoteJoined={remoteJoined}
        setRemoteJoined={setRemoteJoined}
        leaveCall={leaveCall}
      />
      {!remoteJoined && (
        <div className="loader">
          <Spin /> Wating For Participant ...
        </div>
      )}
      {remoteJoined && <DrawerControls />}
    </div>
  );
};

export default withRouter(VideoCallPage);
