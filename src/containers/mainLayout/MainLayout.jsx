import {Grid} from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} sm={9}>
        <NavBar />
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
