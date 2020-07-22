import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";

const HomePage = (props) => {
  const gotoVideoCallPage = () => {
    props.history.push("/video-call");
  };
  return <Button onClick={gotoVideoCallPage}>Join Call</Button>;
};

export default withRouter(HomePage);
