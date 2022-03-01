import { Routes, Route } from "react-router-dom";
import {EmployeesPage} from "pages/EmployeesPage";
import {
    Guest,
    ITSupply,
    Purchase,
    Vacation
} from 'pages/InquiriesPage';
import { NotificationsPage } from "pages/NotificationsPage/components/Notification";
import { NotificationForm } from "pages/NotificationsPage/components/NotificationForm";
import { UserRolesContainer } from "containers/UserRolesContainer";
import { Users } from "./Users";
import { MainPage } from "./MainPage";
import {DayOff} from "./DayOff";
import {BusinessTrip} from "./BusinessTrip"
import { NotifyEdit } from "pages/NotificationsPage/components/NotifyEdit";
import {NotifyView} from "pages/NotificationsPage/components/NotifyView";

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
            <Route path="/notification" element={<NotificationsPage />} />
            <Route path="/notificationForm" element={<NotificationForm/>}/>
            <Route path="/notificationEdit" element={<NotifyEdit/>}/>
            <Route  path="/notificationView" element={<NotifyView/>}/>
            <Route path="/user-roles" element={<UserRolesContainer />} />
        </Routes>
    )
}       