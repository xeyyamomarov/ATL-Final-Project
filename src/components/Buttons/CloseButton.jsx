import { Button } from '@mui/material';

export const CloseButton = ({text="Bağla", onClick}) => {
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
