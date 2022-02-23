import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import {
    Guest,
    ITSupply,
    Purchase,
    Vacation
} from 'pages/InquiriesPage';

import { UserRolesContainer } from "containers/UserRolesContainer";
import { Users } from "./Users";
import { MainPage } from "./MainPage";
import {DayOff} from "./DayOff";
import {BusinessTrip} from "./BusinessTrip"
import {Notifications} from "./Notifications"
import {ProfileRoute} from "./ProfileRoute"

export const Routing = () => {
    return (
        <Routes>
            {
                MainPage()
            }
            <Route path="/employees" element={<EmployeesPage />} />
            { DayOff() }
            { BusinessTrip() }
            <Route path="/vacation" element={<Vacation />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/it-supply" element={<ITSupply />} />
            <Route path="/purchase" element={<Purchase />} />
            { Users() }
            { Notifications() }
            { ProfileRoute() }
            <Route path="/user-roles" element={<UserRolesContainer />} />
           
        </Routes>
    )
}       