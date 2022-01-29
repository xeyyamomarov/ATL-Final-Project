import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "containers/MainLayout";
import HomePage from "pages/HomePage";
import EmployeesPage from "pages/EmployeesPage";
import InquiriesPage from "pages/InquiriesInquiriesPage";
import NotificationsPage from "pages/NotificationsPage";
import SettingsPage from "pages/SettingsPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/inquiries" element={<InquiriesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
