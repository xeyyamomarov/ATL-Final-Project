import { DayOffFormWorker, DayOffFormWorkerSaved, DayOffFormDepartment, DayOffFormDepartmentEdit, DayOffFormHrEdit, DayOffFormHr } from "containers/DayOffContainer/pages";
import { DayOffPage } from "pages/InquiriesPage/DayOffPage";
import { Route } from "react-router-dom";


export const DayOff = () => {
  return <>
    <Route path="/day-off" element={<DayOffPage />} />
    <Route path="/day-off/worker/new" element={<DayOffFormWorker />} />
    <Route path="/day-off/worker/saved" element={<DayOffFormWorkerSaved />} />
    <Route path="/day-off/department/edit" element={<DayOffFormDepartmentEdit />} />
    <Route path="/day-off/department" element={<DayOffFormDepartment />} />
    <Route path="/day-off/hr/edit" element={<DayOffFormHrEdit />} />
    <Route path="/day-off/hr" element={<DayOffFormHr />} />
  </>
};