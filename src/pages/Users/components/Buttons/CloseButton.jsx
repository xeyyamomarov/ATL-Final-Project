import { Button } from '@mui/material';

const CloseButton = ({text="Bağla", onClick}) => {
  return (
    <Button
      variant='contained'
      color='secondary'
      disableElevation
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CloseButton;