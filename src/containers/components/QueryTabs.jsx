import { Box, Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export const QueryTabs = ({ tabs, value }) => {
  const { pathname } = useLocation();
  const mainPath = pathname.split("/").filter(x => x);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "one":
        navigate(`/${mainPath[0]}/worker/new`)
        break;
      case "two":
        navigate(`/${mainPath[0]}/department/view`)
        break;
      case "three":
        let tab = mainPath[0] === 'it-supply' ? 'it/view'
          : mainPath[0] === 'purchase' ? 'purchases/view'
            : mainPath[0] === 'guest' ? 'nbm/view' : 'hr/view'
        navigate(`/${mainPath[0]}/${tab}`)
        break;
      case "four":
        navigate(`/${mainPath[0]}/nbmworker/view`)
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