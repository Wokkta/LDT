import axios from "axios";

import useGetParams from "../useGetParams";
function useFetch() {
  axios.post(`http://92.243.176.50`, { useGetParams }).then((res) => {
    console.log("axios 2 lines");
    console.log(res);
    console.log(res.data);
  });
  return null;
}

export default useFetch;
