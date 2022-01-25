import SideBar from "components/sideBar";
import NavBar from "components/navBar";

const MainLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={3}>
        <Item>
          <SideBar />
        </Item>
      </Grid>
      <Grid item xs={12} md={9}>
        <Item>
          <NavBar />
        </Item>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
