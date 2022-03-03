
import { EmployeesPage } from "pages/EmployeesPage";
import { Route } from "react-router-dom";
import { NewEmployeesForm, EmployeesDetails, EmployeesContractDetails, EmployeesOrderDetails, EmployeesSalaryDetails, EmployeesVacationDetails, EmployeesDocumentsDetails} from 'containers/EmployeesContainer/pages';

export const Employees = () => {
  return (
    <>
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/employees/new" element={<NewEmployeesForm />} />
      <Route path="/employees/details" element={<EmployeesDetails />} />
      <Route path="/employees/details/contract" element={<EmployeesContractDetails />} />
      <Route path="/employees/details/order" element={<EmployeesOrderDetails />} />
      <Route path="/employees/details/salary" element={<EmployeesSalaryDetails />} />
      <Route path="/employees/details/vacation" element={<EmployeesVacationDetails />} />
      <Route path="/employees/details/documents" element={<EmployeesDocumentsDetails />} />
    </>
  );
};