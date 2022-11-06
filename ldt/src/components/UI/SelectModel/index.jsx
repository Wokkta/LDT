import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setSelectModel } from "../../../slices/selectModelSlice";
import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks";

function SelectModel() {
  const dispatch = useDispatch();
  const selectModel = useSelector((state) => state.selectModel.selectModel);
  useFetch();
  function handleSelectModelChange(selectedOption) {
    dispatch(setSelectModel(selectedOption));
    console.log("selected " + selectedOption);
  }
  const selectModelOptions = [
    { value: 1, label: "точки на карте" },
    { value: 2, label: "тепловая карта" },
    { value: 3, label: "область" },
    { value: 4, label: "ваша точка" },
  ];
  const [currentChoise, setCurrentChoise] = useState(selectModelOptions[0]);

  useEffect(() => {
    switch (selectModel["value"]) {
      case 1:
        setCurrentChoise(selectModelOptions[0]);
        break;

      case 2:
        setCurrentChoise(selectModelOptions[1]);
        break;

      case 3:
        setCurrentChoise(selectModelOptions[2]);
        break;
      case 4:
        console.log("Dot");
        setCurrentChoise(selectModelOptions[3]);
        break;
      default:
        console.log("strange model ");
        console.log(selectModel);

        console.log("strange model end ");
        setCurrentChoise({ value: 1, label: "модель 1" });
        break;
    }
  }, [selectModel]);

  return (
    <div style={{ width: "auto" }}>
      <Select
        defaultValue={currentChoise}
        onChange={(e) => handleSelectModelChange(e.value)}
        options={selectModelOptions}
      />
    </div>
  );
}
/**
 * сделал стейт по автозаполнению селекта,но он не меняется
 */
export default SelectModel;
