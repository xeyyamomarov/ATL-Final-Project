import {
  ITSupplyFormWorker,
  ITSupplyFormWorkerSaved,
  ITSupplyFormDepartment,
  ITSupplyFormDepartmentEdit,
  ITSupplyFormITEdit,
  ITSupplyFormIT
} from "containers/Inquiries/ITSupplyContainer/pages";
import { ITSupplyPage } from "pages/InquiriesPage/ITSupplyPage";
import { Route } from "react-router-dom";


export const ITSupply = () => {
  return <>
    <Route path="/it-supply" element={<ITSupplyPage />} />
    <Route path="/it-supply/worker/new" element={<ITSupplyFormWorker />} />
    <Route path="/it-supply/worker/saved" element={<ITSupplyFormWorkerSaved />} />
    <Route path="/it-supply/department/edit" element={<ITSupplyFormDepartmentEdit />} />
    <Route path="/it-supply/department" element={<ITSupplyFormDepartment />} />
    <Route path="/it-supply/it/edit" element={<ITSupplyFormITEdit />} />
    <Route path="/it-supply/it" element={<ITSupplyFormIT />} />
  </>
};