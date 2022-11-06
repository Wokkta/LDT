import { useEffect } from "react";
import useGetParams from "../useGetParams";
import data from "./test_data.json";
const useGetJson = () => {
  const params = useGetParams();
  useEffect(() => {
    console.log("params");
    console.log(params);
  }, [params]);
  return data;
};
export default useGetJson;
