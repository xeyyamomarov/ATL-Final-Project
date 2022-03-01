import { Box, Stack } from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import { useState } from 'react';
import { Outlet } from "react-router-dom";




const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <SideBar open={open} setOpen={setOpen} />
      <Box sx={{
        flexGrow: 1,
        overflow: "hidden"
      }}>
          <NavBar open={open} setOpen={setOpen} />
          <Outlet/>
      </Box>
    </Stack>
  );
};

export default MainLayout;
