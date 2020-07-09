import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk";

import "./style.css";
import config from "./config";
import LocalStream from "./localStream";
import RemoteStream from "./RemoteStream";
import CallControls from "./CallControls";

const { AGORA_APP_ID } = config;

const AgoraVideo = ({
  channel = "hello_agora_video" /* receive channel as a prop */,
}) => {
  const client = useRef(null);
  const localStream = useRef();
  const remoteStream = useRef();
  const localInterval = useRef();
  const remoteInterval = useRef();
  const [expanded, setExpanded] = useState(false);
  const [localRatio, setLocalRatio] = useState(1);
  const [remoteRatio, setRemoteRatio] = useState(1);

  // call when remote stream is removed
  const remoteStreamRemoved = () => {
    clearInterval(remoteInterval.current);
  };

  // leave the current call
  const leaveCall = () => {
    clearInterval(localInterval.current);
    clearInterval(remoteInterval.current);
    client.current.leave();
  };

  // subscribe to stream events to hear the remote stream
  const subscribeStreamEvents = () => {
    // Remote stream added
    client.current.on("stream-added", function (evt) {
      let stream = evt.stream;
      client.current.subscribe(stream, (err) =>
        console.log("subscribe remote failed", err)
      );
    });

    // Peer leaved the call
    client.current.on("peer-leave", function (evt) {
      remoteStreamRemoved();
      remoteStream.current.stop();
    });

    // Remote stream subscribed
    client.current.on("stream-subscribed", function (evt) {
      remoteStream.current = evt.stream;
      remoteStream.current.play("agora_remote", {
        fit: !expanded ? "contain" : "cover",
      });

      remoteInterval.current = setInterval(() => {
        const {
          aspectRatio,
        } = remoteStream.current.getVideoTrack().getSettings();
        if (aspectRatio !== remoteRatio) {
          setRemoteRatio(aspectRatio);
        }
      }, 1000);
    });

    // Remote stream removed
    client.current.on("stream-removed", function (evt) {
      remoteStreamRemoved();
    });
  };

  useEffect(() => {
    // Create the client, init and subscribe the stream events
    client.current = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
    client.current.init(AGORA_APP_ID, () => {}, []);
    subscribeStreamEvents();

    // Join to the channel
    client.current.join(AGORA_APP_ID, channel, undefined, (uid) => {
      localStream.current = AgoraRTC.createStream({
        streamID: uid,
        audio: true,
        video: true,
        screen: false,
      });

      // Init local stream
      localStream.current.init(
        () => {
          console.log("stream init success");
          localStream.current.play("agora_local");

          // Get aspect ratio
          localInterval.current = setInterval(() => {
            const {
              aspectRatio,
              width,
            } = localStream.current.getVideoTrack().getSettings();
            if (aspectRatio !== localRatio) {
              setLocalRatio(aspectRatio);
            }

            // If width is larger than 720, then set the video profile to 720p_1
            if (width > 720) {
              localStream.current.setVideoProfile("720p_1");
            }
          }, 1000);

          client.current.publish(localStream.current, (err) =>
            console.error("publish failed", err)
          );
        },
        (err) => console.error("stream init fail", err)
      );
    });
  }, [channel]);

  return (
    <div style={{ background: "#303070", width: "100%", height: "100%" }}>
      <LocalStream
        expanded={expanded}
        setExpanded={setExpanded}
        aspectRatio={localRatio}
      />
      <RemoteStream expanded={!expanded} aspectRatio={remoteRatio} />
      <CallControls stream={localStream.current} leaveCall={leaveCall} />
    </div>
  );
};

export default AgoraVideo;
