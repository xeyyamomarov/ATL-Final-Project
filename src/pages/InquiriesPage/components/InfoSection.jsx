import { InfoRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';


const InfoSection = () => {
  return (
    <Box>
      <InfoRounded />
      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
        <strong>Sorğunu yaradan şəxs: </strong>Lamiə Səyidova Əliağa
      </Typography>
    </Box>
  );
}

export default InfoSection;