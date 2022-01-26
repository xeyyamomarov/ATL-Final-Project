import { Button } from '@mui/material';

const GreyButton = ({text, onClick}) => {
  return (
    <Button
      variant='contained'
      color='secondary'
      disableElevation
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
}

export default GreyButton;