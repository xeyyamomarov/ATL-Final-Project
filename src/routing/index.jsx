import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import MainMenu from "pages/MainPage/MainMenu";
import {
    DayOff,
    BusinessTrip,
    Guest,
    ITSupply,
    Purchase,
    Vacation
} from 'pages/InquiriesPage';
import NotificationsPage from "pages/NotificationsPage";
import {Users} from "pages/Users";
import {UserRoles} from "pages/UserRoles";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/inquiries/day-off" element={<DayOff />} />
            <Route path="/inquiries/business-trip" element={<BusinessTrip />} />
            <Route path="/inquiries/vacation" element={<Vacation />} />
            <Route path="/inquiries/guest" element={<Guest />} />
            <Route path="/inquiries/it-supply" element={<ITSupply />} />
            <Route path="/inquiries/purchase" element={<Purchase />} />
            <Route path="/notifications/notification" element={<NotificationsPage />} />
            <Route path="/settings/users" element={<Users />} />
            <Route path="/settings/user-roles" element={<UserRoles />} />
        </Routes>
    )
}       