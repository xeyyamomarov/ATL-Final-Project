import { IconButton, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';


export function InfoIcon({ fontSize, onClick }) {

  return (
    <Tooltip title="Məlumat">
      <IconButton
        onClick={onClick}
      >
        <InfoOutlined fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};