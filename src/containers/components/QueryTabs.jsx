import { Box, Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export const QueryTabs = ({ tabs, value }) => {
  const { pathname } = useLocation();
  const mainPath = pathname.split("/").filter(x => x)[0];
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "one":
        navigate(`/${mainPath}/worker/new`)
        break;
      case "two":
        navigate(`/${mainPath}/department`)
        break;
      case "three":
        navigate(`/${mainPath}/hr`)
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: "#F5F5F5" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab, index) => <Tab key={index} value={tab.value} label={tab.label} />)}
      </Tabs>
    </Box>
  );
};