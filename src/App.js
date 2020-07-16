import React from "react";

import AgoraVideo from "./components/AgoraVideo";
import DrawerControls from "./components/DrawerControls";
import "antd/dist/antd.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgoraVideo />
      <DrawerControls />
    </div>
  );
}

export default App;
