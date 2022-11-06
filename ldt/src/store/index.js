import { configureStore } from "@reduxjs/toolkit";
import {
  areaReducer,
  countyReducer,
  dateReducer,
  demandReducer,
  dotReducer,
  rangeReducer,
  selectModelReducer,
  typeReducer,
} from "../slices";
export const store = configureStore({
  reducer: {
    county: countyReducer,
    area: areaReducer,
    type: typeReducer,
    range: rangeReducer,
    demand: demandReducer,
    dot: dotReducer,
    date: dateReducer,
    selectModel: selectModelReducer,
  },
});
