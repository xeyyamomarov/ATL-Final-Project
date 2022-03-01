
  import { EmployeesPage } from "pages/EmployeesPage";
  import { Route } from "react-router-dom";
  
  export const Employees = () => {
    return (
      <>
        <Route path="/employees" element={<EmployeesPage />} />
      </>
    );
  };