import { Popup, Marker } from "react-leaflet";
import { useSelector } from "react-redux";

function Dot() {
  const dot = useSelector((state) => state.dot.dot);

  return (
    <Marker position={dot}>
      <Popup>
        {
          <>
            <span>Выбранная точка </span>
            <br />
            <span>{dot[0] + " & " + dot[1]}</span>
          </>
        }
      </Popup>
    </Marker>
  );
}

export default Dot;
