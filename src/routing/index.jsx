import { Routes, Route, useNavigate } from "react-router-dom";
import { Employees } from "./Employees";
import { Users } from "./Users";
import { MainPage } from "./MainPage";
import { DayOff } from "./DayOff";
import { Notifications } from "./Notifications"
import { Profile } from "pages/Profile/Profile"
import { UserRoles } from "./UserRoles";
import { BusinessTrip } from "./BusinessTrip";
import { Vacation } from "./Vacation";
import { ITSupply } from "./ITSupply";
import { Guest } from "./Guest";
import { Purchase } from "./Purchase";
import MainLayout from "containers/mainLayout";
import { LoginPage } from "pages/LoginPage";
import { LS } from 'utils';
import { appConfig } from "configs";
import { useEffect } from "react";

export const Routing = () => {

    const navigate= useNavigate();

    useEffect(()=>{
      const login = LS.getItemLocalStorage(appConfig.userData)
      console.log(login)
        if(!login){
            navigate("/login")
        }
    },[])

    return (
        <Routes>
            <Route path='/login' element={< LoginPage />} />
            <Route path="/" element={<MainLayout />}>
                {MainPage()}
                {Employees()} 
                {DayOff()}
                {BusinessTrip()}
                {Vacation()}
                {Guest()}
                {ITSupply()}
                {Purchase()}
                {Users()}
                {Notifications()}
                <Route path="/profile/*" element={<Profile />} />
                {UserRoles()}
            </Route>
        </Routes>
    )
}       
