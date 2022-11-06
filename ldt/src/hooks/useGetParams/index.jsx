import { useSelector } from "react-redux";
function useGetParams() {
  const date = useSelector((state) => state.date.date);
  const county = useSelector((state) => state.county.county);
  const area = useSelector((state) => state.area.area);
  const type = useSelector((state) => state.type.type);
  const range = useSelector((state) => state.range.range);
  const demand = useSelector((state) => state.demand.demand);
  const selectModel = useSelector((state) => state.selectModel.selectModel);
  const params = {
    selectModel: selectModel,
    date: date,
    demand: demand,
    area: area,
    range: range,
    type: type,
    county: county,
  };
  return params;
}

export default useGetParams;
