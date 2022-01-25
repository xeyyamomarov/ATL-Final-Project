import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';


const PurpleButton = ({text, icon}) => {
  return (
    <Button
    variant='contained'
    color='primary'
    disableElevation
    sx={{
      marginLeft: '12px'
    }}
    startIcon={<Add />}>
      {text}
    </Button>
  );
}

export default PurpleButton;