import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ProfileOptions } from "pages/Profile/ProfileOptions";

export default function ButtonAppBar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#424242",
          height: 56,
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton
              onClick={() => setOpen(!open)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <ProfileOptions>
                <MenuItem onClick={() => navigate("/profile/settings")}>
                  Profil
                </MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Çıxış</MenuItem>
              </ProfileOptions>
            </Box>
            <Typography component="div" sx={{ fontSize: 14 }}>
              Aydin Abbasov
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
