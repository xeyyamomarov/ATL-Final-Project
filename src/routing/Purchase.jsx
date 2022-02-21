import {
  PurchaseFormWorker,
  PurchaseFormWorkerSaved,
  PurchaseFormDepartment,
  PurchaseFormDepartmentEdit,
  PurchaseFormHrEdit,
  PurchaseFormHr
} from "containers/PurchaseContainer/pages";
import { PurchasePage } from "pages/InquiriesPage/PurchasePage";
import { Route } from "react-router-dom";


export const Purchase = () => {
  return <>
    <Route path="/purchase" element={<PurchasePage />} />
    <Route path="/purchase/worker/new" element={<PurchaseFormWorker />} />
    <Route path="/purchase/worker/saved" element={<PurchaseFormWorkerSaved />} />
    <Route path="/purchase/department/edit" element={<PurchaseFormDepartmentEdit />} />
    <Route path="/purchase/department" element={<PurchaseFormDepartment />} />
    <Route path="/purchase/hr/edit" element={<PurchaseFormHrEdit />} />
    <Route path="/purchase/hr" element={<PurchaseFormHr />} />
  </>
};