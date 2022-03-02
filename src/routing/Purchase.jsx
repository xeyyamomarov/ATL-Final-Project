import {
  PurchaseFormWorker,
  PurchaseFormWorkerSaved,
  PurchaseFormDepartment,
  PurchaseFormDepartmentEdit,
  PurchaseFormPurchase,
  PurchaseFormPurchaseEdit
} from "containers/Inquiries/PurchaseContainer/pages";
import { PurchasePage } from "pages/InquiriesPage/PurchasePage";
import { Route } from "react-router-dom";


export const Purchase = () => {
  return <>
    <Route path="/purchase" element={<PurchasePage />} />
    <Route path="/purchase/worker/new" element={<PurchaseFormWorker />} />
    <Route path="/purchase/worker/saved" element={<PurchaseFormWorkerSaved />} />
    <Route path="/purchase/department/edit" element={<PurchaseFormDepartmentEdit />} />
    <Route path="/purchase/department" element={<PurchaseFormDepartment />} />
    <Route path="/purchase/purchase/edit" element={<PurchaseFormPurchaseEdit />} />
    <Route path="/purchase/purchase" element={< PurchaseFormPurchase/>} />
  </>
};