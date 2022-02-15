import { InfoRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';


export const InfoSection = ({ name }) => {
  return (
    <Box sx={{
      display: 'flex',
      padding: "12px 16px",
      gap: 1
    }}>
      <InfoRounded />
      <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
        <strong>Sorğunu yaradan şəxs: </strong>
        {name}
      </Typography>
    </Box>
  );
};