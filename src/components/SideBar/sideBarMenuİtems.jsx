import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GroupsIcon from '@mui/icons-material/Groups';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';

const sideBarMenuİtems = [
  {
    key: "home",
    label: "Əsas səhifə",
    icon: <ViewCompactIcon fontSize='large'/>,
    path: "/",
    items: [],
  },
  {
    key: "employees",
    label: "Əməkdaşlar",
    icon: <GroupsIcon fontSize='large' />,
    path: "/employees",
    items: [],
  },
  {
    key: "inquiries",
    label: "Sorğular",
    icon: <DriveFileRenameOutlineIcon fontSize='large' />,
    items: [
      { key: "day-off", label: "Day off", path: "/inquiries/day-off" },
      { key: "business-trip", label: "Ezamiyyət", path: "/inquiries/business-trip" },
      { key: "vacation", label: "Məzuniyyət", path: "/inquiries/vacation" },
      { key: "guest", label: "Qonaq", path: "/inquiries/guest" },
      { key: "in-supply", label: "IT təchizat", path: "/inquiries/it-supply" },
      { key: "purchase", label: "Satınalma", path: "/inquiries/purchase" },
    ],
  },
  {
    key: "notifications",
    label: "Elanlar",
    icon: <CampaignIcon fontSize='large' />,
    items: [{ key: "notification", label: "Elan", path: "/notifications/notification" }],
  },
  {
    key: "settings",
    label: "Parametrlər",
    icon: <SettingsIcon fontSize='large' />,
    items: [
      { key: "users", label: "Istifadəçilər", path: "/settings/users" },
      { key: "user-roles", label: "İstifadəçi rolları", path: "/settings/user-roles" },
    ],
  },
];

export default sideBarMenuİtems;
