import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spin, notification } from "antd";
import { isChrome, isFirefox, isIOS } from "react-device-detect";

import AgoraVideo from "../../components/AgoraVideo";
import DrawerControls from "../../components/DrawerControls";
import "./index.css";

const VideoCallPage = (props) => {
  const [remoteJoined, setRemoteJoined] = useState(false);
  const shouldAbort = isIOS && (isChrome || isFirefox);

  useEffect(() => {
    if (shouldAbort) {
      props.history.push("/");
      notification.error({
        message: "Browser not supported",
        description:
          "We only support safari on iPhone. Please check your browser and join again.",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const leaveCall = () => props.history.push("/");

  return shouldAbort ? null : (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgoraVideo
        remoteJoined={remoteJoined}
        setRemoteJoined={setRemoteJoined}
        leaveCall={leaveCall}
      />
      {!remoteJoined && (
        <div className="loader">
          <Spin /> Waiting For Participant ...
        </div>
      )}
      {remoteJoined && <DrawerControls />}
    </div>
  );
};

export default withRouter(VideoCallPage);
