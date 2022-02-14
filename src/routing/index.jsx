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
import { UserRolesContainer } from "containers/UserRolesContainer";
import { Users } from "./Users";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/day-off" element={<DayOff />} />
            <Route path="/business-trip" element={<BusinessTrip />} />
            <Route path="/vacation" element={<Vacation />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/it-supply" element={<ITSupply />} />
            <Route path="/purchase" element={<Purchase />} />
            {
                Users()
            }
            <Route path="/notification" element={<NotificationsPage />} />
            <Route path="/user-roles" element={<UserRolesContainer />} />
        </Routes>
    )
}       