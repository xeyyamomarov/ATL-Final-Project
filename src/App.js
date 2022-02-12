import "./App.css";
import MainLayout from "containers/mainLayout";
import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import MainMenu from "pages/main-menu/MainMenu";
import {
  DayOff,
  BusinessTrip,
  Guest,
  ITSupply,
  Purchase,
  Vacation
} from 'pages/InquiriesPage';
import NotificationsPage from "pages/NotificationsPage";
import { Users } from "pages/Users";
import { UserRoles } from "pages/UserRoles";
import { DayOffForm } from "pages/InquiriesPage/DayOff/components/DayOffForm";
import { DayOffSaved } from "pages/InquiriesPage/DayOff/components/DayOffSaved";

// import MainLayout from "containers/mainLayout";
// import MainMenu from "pages/main-menu/MainMenu";


function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/inquiries/day-off" element={<DayOff />} />
          {/* <Route path="/inquiries/day-off/new" element={<DayOffForm />} /> */}
          <Route path="/inquiries/day-off/new" element={<DayOffSaved />} />
          <Route path="/inquiries/business-trip" element={<BusinessTrip />} />
          <Route path="/inquiries/vacation" element={<Vacation />} />
          <Route path="/inquiries/guest" element={<Guest />} />
          <Route path="/inquiries/it-supply" element={<ITSupply />} />
          <Route path="/inquiries/purchase" element={<Purchase />} />
          <Route path="/notifications/notification" element={<NotificationsPage />} />
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/user-roles" element={<UserRoles />} />
        </Routes>
      </MainLayout>



    </div>
  );
}

export default App;