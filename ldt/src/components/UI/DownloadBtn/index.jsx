import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
function DownloadBtn() {
  function handleClick(params) {
    console.log("clicked");
  }
  return (
    <Button
      type="primary"
      icon={<DownloadOutlined />}
      size={"large"}
      onClick={handleClick}
    />
  );
}

export default DownloadBtn;
