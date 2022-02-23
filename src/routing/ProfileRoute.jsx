import { Profile } from "pages/Profile";
import { UserSettings } from "pages/Profile/UserSettings";
import { ProfileSecurity } from "pages/Profile/ProfileSecurity";
import { ChangePass } from "pages/Profile/ChangePass";
import { Route, Routes } from "react-router-dom";
export const ProfileRoute = () => {
  return (
    <>
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-settings" element={<UserSettings />} />
      <Route path="/profile-security" element={<ProfileSecurity />} />
      <Route path="/change-password" element={<ChangePass />} />
    </>
  );
};
