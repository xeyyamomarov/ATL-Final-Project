import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';


const QueryTabs = ({tabs}) => {

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <Box sx={{ width: '100%', backgroundColor: "#F5F5F5" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab, index) => <Tab key={index} value={tab.value} label={tab.label}/>)}
        </Tabs>
      </Box>
   );
}
 
export default QueryTabs;