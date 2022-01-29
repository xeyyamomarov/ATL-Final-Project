import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import GroupsIcon from "@mui/icons-material/Groups";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";

const sideBarMenuİtems = [
  {
    key: "home",
    label: "Əsas səhifə",
    icon: <ViewCompactIcon />,
    path: "/",
    items: [],
  },
  {
    key: "employees",
    label: "Əməkdaşlar",
    icon: <GroupsIcon />,
    path: "/employees",
    items: [],
  },
  {
    key: "inquiries",
    label: "Sorğular",
    icon: <DriveFileRenameOutlineIcon />,
    path: "/inquiries",
    items: [
      { key: "day-off", label: "Day off", path: "/" },
      { key: "ezamiyyət", label: "Ezamiyyət", path: "/" },
      { key: "məzuniyyət", label: "Məzuniyyət", path: "/" },
      { key: "qonaq", label: "Qonaq", path: "/" },
      { key: "it-təchizat", label: "IT təchizat", path: "/" },
      { key: "satınalma", label: "Satınalma", path: "/" },
    ],
  },
  {
    key: "notifications",
    label: "Elanlar",
    icon: <CampaignIcon />,
    path: "/notifications",
    items: [{ key: "elan", label: "Elan", path: "/" }],
  },
  {
    key: "settings",
    label: "Parametrlər",
    icon: <SettingsIcon />,
    path: "/settings",
    items: [
      { key: "istifadəçilər", label: "Istifadəçilər", path: "/" },
      { key: "İstifadəçi-rolları", label: "İstifadəçi rolları", path: "/" },
    ],
  },
];

export default sideBarMenuİtems;
