import {Grid} from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import Users from "pages/Users/Users";

const MainLayout = () => {
  return (
    <Grid container spacing={0}>
      {/* <Grid item xs={12} md={3}>
        <SideBar />
      </Grid> */}
      {/* <Grid item xs={12} md={9}>
        <NavBar />
      </Grid> */}
      <Grid item xs={12} md={9}>
        <Users />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
