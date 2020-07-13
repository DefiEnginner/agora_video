import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import {
  VideoCameraFilled,
  AudioOutlined,
  WhatsAppOutlined,
  AudioMutedOutlined,
  VideoCameraAddOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import "./index.css";

const CallControls = ({ stream, leaveCall, devices }) => {
  const [audioMuted, setAudioMuted] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const deviceIndex = useRef();
  deviceIndex.current = 0;

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
        {devices.length > 1 && (
          <Button
            size="large"
            shape="circle"
            icon={<ReloadOutlined />}
            className="control"
            onClick={() => {
              deviceIndex.current = (deviceIndex.current + 1) % devices.length;
              stream.getVideoTrack().stop();
              stream.switchDevice(
                "video",
                devices[deviceIndex.current].deviceId
              );
            }}
          />
        )}
        <Button
          size="large"
          shape="circle"
          icon={audioMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
          className="control"
          style={{ background: audioMuted ? "gray" : "white", border: "none" }}
          onClick={muteAudio}
        />
        <Button
          size="large"
          shape="circle"
          icon={videoMuted ? <VideoCameraAddOutlined /> : <VideoCameraFilled />}
          className="control"
          style={{ background: videoMuted ? "gray" : "white", border: "none" }}
          onClick={muteVideo}
        />
        <Button
          type="primary"
          danger
          size="large"
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
