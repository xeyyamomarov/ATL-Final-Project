import {Grid} from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import Users from "pages/Users/Users";

const MainLayout = ({ children }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <SideBar />
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10}>
        <NavBar />
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
