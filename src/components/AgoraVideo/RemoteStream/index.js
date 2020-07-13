import React, { useRef, useEffect } from "react";

import "./index.css";

const RemoteStream = ({ expanded, setExpanded, aspectRatio }) => {
  const ref = useRef();
  useEffect(() => {
    // Set to cover if shrinked
    const video = ref.current.querySelector("video");
    if (video) {
      video.style["object-fit"] = expanded ? "contain" : "cover";
    }
  }, [expanded]);

  return (
    <div className="remote-stream">
      <div
        className={expanded ? "expanded-stream" : "shrinked-stream"}
        style={{ paddingTop: `${20 / aspectRatio}%` }}
        onDoubleClick={() => !expanded && setExpanded(false)}
      >
        <div
          id="agora_remote"
          style={{ top: 0, left: 0, bottom: 0, right: 0, position: "absolute" }}
          ref={ref}
        />
      </div>
    </div>
  );
};

export default RemoteStream;
