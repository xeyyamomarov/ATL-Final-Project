import { Download, Edit, InfoRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';


export const FormHead = ({ text, actions=<></> }) => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ backgroundColor: "#F5F5F5", padding: "16px", borderBottom: "1px solid #E0E0E0" }}>
      <Box>
        <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
          {text}
        </Typography>
      </Box>
      <Box>
       {actions}
      </Box>
    </Box>
  );
}

{/* <Edit />
<InfoRounded />
<Download /> */}