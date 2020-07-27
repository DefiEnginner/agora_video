import React from "react";
import { notification } from "antd";
import {
  isChrome,
  isFirefox,
  isIOS,
  isSafari,
  isAndroid,
  isIE,
  isEdge,
  isEdgeChromium,
} from "react-device-detect";
import { withRouter } from "react-router-dom";

const BrowserCheck = ({ redirectURL = "/", children, history }) => {
  const iosAbort = isIOS && (isChrome || isFirefox);
  const androidAbort = isAndroid && (isSafari || isFirefox);
  const edgeAbort = (isIE || isEdge) && !isEdgeChromium;

  const errMessage = iosAbort
    ? "We only support safari on iPhone. Please check your browser and join again."
    : androidAbort
    ? "We only support Chrome on Android devices. Please check your browser and join again."
    : "We do not support IE and Edge Browsers. Please check your browser and join again.";

  if (iosAbort || androidAbort || edgeAbort) {
    history.push(redirectURL);
    notification.error({
      message: "Browser not supported",
      description: errMessage,
    });

    return null;
  }

  return <>{children}</>;
};

export default withRouter(BrowserCheck);
