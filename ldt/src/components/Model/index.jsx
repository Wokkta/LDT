import { useEffect, useState } from "react";
import MaskOverlay from "../MaskOverlay";
import Postmats from "../Postmats";

import useGetJson from "../../hooks/useGetJson";

import { useSelector, useDispatch } from "react-redux";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { Dot } from "../UI";

const Model = () => {
  const selectModel = useSelector((state) => state.selectModel.selectModel);
  const dispatch = useDispatch();
  const [currentChoise, setCurrentChoise] = useState(<></>);
  const data = useGetJson();
  const dots = useGetJson().map((el) => [
    el["lat"],
    el["long"],
    `${Math.random()}`,
  ]);
  console.clear();
  console.log("data");
  console.log("dots");
  console.log(data);
  console.log(dots);
  useEffect(() => {
    switch (selectModel) {
      case 1:
        setCurrentChoise(<Postmats data={data} />);
        break;

      case 2:
        setCurrentChoise(
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={dots}
            longitudeExtractor={(m) => m[1]}
            latitudeExtractor={(m) => m[0]}
            intensityExtractor={(m) => parseFloat(m[2])}
            radius={10}
            max={100}
            minOpacity={1}
            useLocalExtrema={true}
          />
        );
        break;

      case 3:
        console.log("YES");
        setCurrentChoise(<MaskOverlay />);
        break;
      case 4:
        setCurrentChoise(<Dot />);
        break;

      default:
        console.log("strange model ");
        console.log(selectModel);

        console.log("strange model end ");
        setCurrentChoise(<></>);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectModel, dispatch, data]);
  return currentChoise;
};
export default Model;
