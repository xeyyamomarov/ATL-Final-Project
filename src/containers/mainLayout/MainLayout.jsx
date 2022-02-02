import { Box, Stack } from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import { useState } from 'react';

  

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <SideBar open={open} />
      <Box sx={{ flexGrow: 1 }}>
        <NavBar open={open} setOpen={setOpen}/>
        {children}
      </Box>
    </Stack>
  );
};

export default MainLayout;
