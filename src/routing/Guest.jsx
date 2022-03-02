import {
  GuestFormWorker,
  GuestFormWorkerSaved,
  GuestFormDepartment,
  GuestFormDepartmentEdit,
  GuestFormNBMChief,
  GuestFormNBMChiefEdit,
  GuestFormNBMWorker,
  GuestFormNBMWorkerEdit
} from "containers/Inquiries/GuestContainer/pages";
import { GuestPage } from "pages/InquiriesPage/GuestPage";
import { Route } from "react-router-dom";


export const Guest = () => {
  return <>
    <Route path="/guest" element={<GuestPage />} />
    <Route path="/guest/worker/new" element={<GuestFormWorker />} />
    <Route path="/guest/worker/saved" element={<GuestFormWorkerSaved />} />
    <Route path="/guest/department/edit" element={<GuestFormDepartmentEdit />} />
    <Route path="/guest/department" element={<GuestFormDepartment />} />
    <Route path="/guest/nbm/edit" element={<GuestFormNBMChiefEdit />} />
    <Route path="/guest/nbm" element={<GuestFormNBMChief />} />
    <Route path="/guest/nbmworker/edit" element={<GuestFormNBMWorkerEdit />} />
    <Route path="/guest/nbmworker" element={<GuestFormNBMWorker />} />
  </>
};