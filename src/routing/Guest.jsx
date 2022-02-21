import {
  GuestFormWorker,
  GuestFormWorkerSaved,
  GuestFormDepartment,
  GuestFormDepartmentEdit,
  GuestFormHrEdit,
  GuestFormHr
} from "containers/GuestContainer/pages";
import { GuestPage } from "pages/InquiriesPage/GuestPage";
import { Route } from "react-router-dom";


export const Guest = () => {
  return <>
    <Route path="/guest" element={<GuestPage />} />
    <Route path="/guest/worker/new" element={<GuestFormWorker />} />
    <Route path="/guest/worker/saved" element={<GuestFormWorkerSaved />} />
    <Route path="/guest/department/edit" element={<GuestFormDepartmentEdit />} />
    <Route path="/guest/department" element={<GuestFormDepartment />} />
    <Route path="/guest/hr/edit" element={<GuestFormHrEdit />} />
    <Route path="/guest/hr" element={<GuestFormHr />} />
  </>
};