import { Polygon } from "react-leaflet";
import { useGetCoords, useGetJson } from "../../hooks";
const MaskOverlay = (props) => {
  let coordinats = useGetCoords(useGetJson());
  return (
    <>
      <Polygon pathOptions={{ color: "lime" }} positions={coordinats} />
    </>
  );
};
export default MaskOverlay;
