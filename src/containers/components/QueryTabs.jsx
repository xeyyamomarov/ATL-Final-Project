import { Box, Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export const QueryTabs = ({ tabs, value }) => {
  const { pathname } = useLocation();
  const mainPath = pathname.split("/").filter(x => x);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    console.log(mainPath)
    switch (newValue) {
      case "one":
        navigate(`/${mainPath[0]}/worker/new`)
        break;
      case "two":
        navigate(`/${mainPath[0]}/department`)
        break;
      case "three":
        let tab = mainPath[0] === 'it-supply' ? 'it'
          : mainPath[0] === 'purchase' ? 'purchase'
            : mainPath[0] === 'guest' ? 'nbm' : 'hr'
        navigate(`/${mainPath[0]}/${tab}`)
        break;
      case "four":
        navigate(`/${mainPath[0]}/nbmworker`)
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