import { Button } from '@mui/material';

const GreenButton = ({text, onClick}) => {
  return (
    <Button
      variant='contained'
      color='formSubmit'
      disableElevation
      sx={{
        color: 'white',
        marginLeft: '12px'
      }}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
}

export default GreenButton;