import Grid from "@material-ui/core/Grid";
import SideBar from "components/sideBar";
import NavBar from "components/navBar";

const MainLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={9}>
        <NavBar />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
