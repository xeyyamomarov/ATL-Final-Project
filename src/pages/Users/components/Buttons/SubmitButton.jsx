import { Button } from '@mui/material';

const SubmitButton = ({text = 'Yadda saxla', onClick}) => {
  return (
    <Button
      variant='contained'
      color='formSubmit'
      disableElevation
      sx={{
        color: 'white',
        marginLeft: '12px'
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default SubmitButton;