import { DownloadOutlined } from "@ant-design/icons";
import { ScreenCapture } from "react-screen-capture";
import { Button } from "antd";
import { useState } from "react";

function DownloadBtn() {
  const [screenCapture, setScreenCapture] = useState("");

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture);
    handleSave();
  };

  const handleSave = () => {
    const screenCaptureSource = screenCapture;
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <div style={{ zIndex: 4, position: "absolute", top: 0 }}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={"large"}
            onClick={onStartCapture}
          />
        </div>
      )}
    </ScreenCapture>
  );
}

export default DownloadBtn;
