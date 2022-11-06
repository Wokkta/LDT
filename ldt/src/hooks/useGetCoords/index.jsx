import { useEffect, useState } from "react";

const useGetCoords = (props) => {
  const [data, setData] = useState(props.map((el) => [el["lat"], el["long"]]));
  useEffect(() => {
    setData(props.map((el) => [el["lat"], el["long"]]));
    //console.log("data changed " + data);
  }, [props]);

  return data;
};
export default useGetCoords;
