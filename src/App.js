import "./App.css";
import MainLayout from "containers/mainLayout";
import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import MainMenu from "pages/main-menu/MainMenu";
import { DayOffPage, BusinessTripPage, GuestPage, ITSupplyPage, PurchasePage, VacationPage } from 'pages/InquiriesPage';
import NotificationsPage from "pages/NotificationsPage";
import Users from "pages/Users";
import UserRoles from "pages/UserRoles";

// import MainLayout from "containers/mainLayout";
// import MainMenu from "pages/main-menu/MainMenu";


function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/inquiries/day-off" element={<DayOffPage />} />
          <Route path="/inquiries/business-trip" element={<BusinessTripPage />} />
          <Route path="/inquiries/vacation" element={<VacationPage />} />
          <Route path="/inquiries/guest" element={<GuestPage />} />
          <Route path="/inquiries/it-supply" element={<ITSupplyPage />} />
          <Route path="/inquiries/purchase" element={<PurchasePage />} />
          <Route path="/notifications/notification" element={<NotificationsPage />} />
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/user-roles" element={<UserRoles />} />
        </Routes>
      </MainLayout>



    </div>
  );
}

export default App;