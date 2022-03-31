import { Box, Stack } from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";


const MainLayout = () => {

  let mediaQuery = window.matchMedia('(min-width: 800px)');
  const [open, setOpen] = useState(mediaQuery.matches || false);

  useEffect(() => {
    mediaQuery.addEventListener('change', (e) => {
      setOpen(e.matches)
    })
  }, [mediaQuery])

  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <SideBar open={open} setOpen={setOpen}/>
      <Box sx={{
        flexGrow: 1,
        overflow: "hidden"
      }}>
        <NavBar open={open} setOpen={setOpen} />
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
