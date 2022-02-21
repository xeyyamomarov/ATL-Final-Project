import {
  BusinessTripFormWorker,
  BusinessTripFormDepartment,
  BusinessTripFormDepartmentEdit,
  BusinessTripFormHr,
  BusinessTripFormHrEdit,
  BusinessTripFormWorkerSaved
} from "containers/BusinessTripContainer/pages";
import { BusinessTripPage } from "pages/InquiriesPage/BusinessTripPage";
import { Route } from "react-router-dom";

export const BusinessTrip = () => {
  return (
    <>
      <Route path="/business-trip" element={<BusinessTripPage />} />
      <Route path="/business-trip/worker/new" element={<BusinessTripFormWorker />} />
      <Route path="/business-trip/worker/saved" element={<BusinessTripFormWorkerSaved />} />
      <Route path="/business-trip/department/edit" element={<BusinessTripFormDepartmentEdit />} />
      <Route path="/business-trip/department" element={<BusinessTripFormDepartment />} />
      <Route path="/business-trip/hr/edit" element={<BusinessTripFormHrEdit />} />
      <Route path="/business-trip/hr" element={<BusinessTripFormHr />} />
    </>
  );
};