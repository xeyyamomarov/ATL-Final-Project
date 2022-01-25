import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const GreyButton = () => {
  return (
    <Button
      variant='text'
      color='inherit'
      startIcon={<Search />}
    >
      Axtarış
    </Button>
  );
}

export default GreyButton;