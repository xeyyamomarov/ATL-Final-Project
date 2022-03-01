import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { MoreOptions } from "components/MoreOptions";
import { ProfileOptions } from "pages/Profile/ProfileOptions";
import { useState } from "react";
import {
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

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
            <IconButton sx={{ p: 0, marginRight: 1 }}>
              <ProfileOptions>
                
              </ProfileOptions>
            </IconButton>
            <Typography component="div" sx={{ fontSize: 14 }}>
              Aydin Abbasov
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
