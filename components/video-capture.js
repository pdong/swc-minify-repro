import IDVC from "@idscan/idvc";
import { useEffect } from "react";

const VideoCapture = () => {
  useEffect(() => {
    new IDVC({
      useCDN: true,
      el: "videoCapture",
    });
  }, []);
  return <div id="videoCapture" />;
};

export default VideoCapture;
