import { DayOffFormWorker, DayOffFormWorkerSaved } from "containers/DayOffContainer/pages";
import { DayOffPage } from "pages/InquiriesPage/DayOffPage";
import { Route } from "react-router-dom";


export const DayOff = () => {
  return <>
    <Route path="/day-off" element={<DayOffPage />} />
    <Route path="/day-off/new" element={<DayOffFormWorker />} />
    <Route path="/day-off/saved" element={<DayOffFormWorkerSaved />} />
  </>
};