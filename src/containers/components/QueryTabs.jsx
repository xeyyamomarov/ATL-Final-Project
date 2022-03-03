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
        case "main":
          navigate(`/${mainPath[0]}/new`)
          break;
        case "contract":
          navigate(`/${mainPath[0]}/new/contract`)
          break;
        case "order":
          navigate(`/${mainPath[0]}/new/order`)
          break;
        case "salary":
          navigate(`/${mainPath[0]}/new/salary`)
          break;
        case "vacation":
          navigate(`/${mainPath[0]}/new/vacations`)
          break;
        case "documents":
          navigate(`/${mainPath[0]}/new/documents`)
          break;
      case "mainDetails":
        navigate(`/${mainPath[0]}/details`)
        break;
      case "contractDetails":
        navigate(`/${mainPath[0]}/details/contract`)
        break;
      case "orderDetails":
        navigate(`/${mainPath[0]}/details/order`)
        break;
      case "salaryDetails":
        navigate(`/${mainPath[0]}/details/salary`)
        break;
      case "vacationDetails":
        navigate(`/${mainPath[0]}/details/vacations`)
        break;
      case "documentsDetails":
        navigate(`/${mainPath[0]}/details/documents`)
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