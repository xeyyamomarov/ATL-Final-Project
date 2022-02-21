import {
  ITSupplyFormWorker,
  ITSupplyFormWorkerSaved,
  ITSupplyFormDepartment,
  ITSupplyFormDepartmentEdit,
  ITSupplyFormHrEdit,
  ITSupplyFormHr
} from "containers/ITSupplyContainer/pages";
import { ITSupplyPage } from "pages/InquiriesPage/ITSupplyPage";
import { Route } from "react-router-dom";


export const ITSupply = () => {
  return <>
    <Route path="/it-supply" element={<ITSupplyPage />} />
    <Route path="/it-supply/worker/new" element={<ITSupplyFormWorker />} />
    <Route path="/it-supply/worker/saved" element={<ITSupplyFormWorkerSaved />} />
    <Route path="/it-supply/department/edit" element={<ITSupplyFormDepartmentEdit />} />
    <Route path="/it-supply/department" element={<ITSupplyFormDepartment />} />
    <Route path="/it-supply/hr/edit" element={<ITSupplyFormHrEdit />} />
    <Route path="/it-supply/hr" element={<ITSupplyFormHr />} />
  </>
};