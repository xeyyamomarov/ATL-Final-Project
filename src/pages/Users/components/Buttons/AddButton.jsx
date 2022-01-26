import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';


const AddButton = ({onClick}) => {
  return (
    <Button
      variant='contained'
      color='primary'
      disableElevation
      sx={{
        marginLeft: '12px'
      }}
      startIcon={<Add />}
      onClick={() => onClick()}
    >
      Əlavə et
    </Button>
  );
}

export default AddButton;