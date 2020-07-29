import React, { useState, useEffect } from "react";
import { Button } from "antd";
import {
  VideoCameraFilled,
  AudioOutlined,
  WhatsAppOutlined,
  AudioMutedOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

import "./index.css";

const CallControls = ({ stream, leaveCall, switchCamera }) => {
  const [audioMuted, setAudioMuted] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);

  useEffect(() => {
    // set audio muted and video muted
    setAudioMuted(!stream?.isAudioOn() || !stream?.getAudioTrack());
    setVideoMuted(!stream?.isVideoOn() || !stream?.getVideoTrack());
  }, [stream]);

  // Mute/Unmute audio
  const muteAudio = () => {
    !audioMuted ? stream.muteAudio() : stream.unmuteAudio();
    setAudioMuted(!stream.isAudioOn() || !stream?.getAudioTrack());
  };

  // Mute/Unmute video
  const muteVideo = () => {
    !videoMuted ? stream.muteVideo() : stream.unmuteVideo();
    setVideoMuted(!stream.isVideoOn() || !stream?.getVideoTrack());
  };

  return (
    <div className="call-controls">
      <div className="controls">
        <Button
          shape="circle"
          icon={audioMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
          className="control"
          style={{ background: audioMuted ? "gray" : "white", border: "none" }}
          onClick={muteAudio}
        />
        <Button
          shape="circle"
          icon={videoMuted ? <VideoCameraAddOutlined /> : <VideoCameraFilled />}
          className="control"
          style={{ background: videoMuted ? "gray" : "white", border: "none" }}
          onClick={muteVideo}
        />
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<WhatsAppOutlined />}
          className="control"
          onClick={leaveCall}
        />
      </div>
    </div>
  );
};

export default CallControls;
