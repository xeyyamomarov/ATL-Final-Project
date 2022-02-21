import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import MainMenu from "pages/MainPage/MainMenu";
import NotificationsPage from "pages/NotificationsPage";
import { Users } from "./Users";
import { UserRoles } from "./UserRoles";
import { DayOff } from "./DayOff";
import { BusinessTrip } from "./BusinessTrip";
import { Vacation } from "./Vacation";
import { ITSupply } from "./ITSupply";
import { Guest } from "./Guest";
import { Purchase } from "./Purchase";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/employees" element={<EmployeesPage />} />
            { DayOff() }
            { BusinessTrip() }
            { Vacation() }
            { Guest() }
            { ITSupply() }
            { Purchase() }
            { Users() }
            <Route path="/notification" element={<NotificationsPage />} />
            { UserRoles() }
        </Routes>
    )
}       