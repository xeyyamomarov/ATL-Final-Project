import { Routes, Route } from "react-router-dom";
import EmployeesPage from "pages/EmployeesPage";
import { Users } from "./Users";
import { MainPage } from "./MainPage";
import { DayOff } from "./DayOff";
import { Notifications } from "./Notifications"
import {Profile }from "pages/Profile/Profile"
import { UserRoles } from "./UserRoles";
import { BusinessTrip } from "./BusinessTrip";
import { Vacation } from "./Vacation";
import { ITSupply } from "./ITSupply";
import { Guest } from "./Guest";
import { Purchase } from "./Purchase";

export const Routing = () => {
    return (
        <Routes>
            {MainPage()}
            <Route path="/employees" element={<EmployeesPage />} />
            {DayOff()}
            {BusinessTrip()}
            {Vacation()}
            {Guest()}
            {ITSupply()}
            {Purchase()}
            {Users()}
            {Notifications()}
            <Route path = "/profile/*" element={<Profile/>}/>
            {UserRoles()}
        </Routes>
    )
}       