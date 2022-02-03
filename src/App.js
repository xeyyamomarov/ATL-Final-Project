import "./App.css";
import MainLayout from "containers/mainLayout";
import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import MainMenu from "pages/main-menu/MainMenu";
import { DayOffPage, BusinessTripPage, GuestPage, ITSupplyPage, PurchasePage, VacationPage } from 'pages/InquiriesInquiriesPage';
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
          <Route path="/day-off" element={<DayOffPage />} />
          <Route path="/business-trip" element={<BusinessTripPage />} />
          <Route path="/vacation" element={<VacationPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/it-supply" element={<ITSupplyPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-roles" element={<UserRoles />} />
          {/* <Route path="mainpage" element={<MainMenu/>} />  */}
        </Routes>
      </MainLayout>

      {/* <MainLayout /> */}
      {/* <MainMenu/> */}

    </div>
  );
}

export default App;