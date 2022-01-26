import { Button } from '@mui/material';


const PurpleButton = ({text, onClick}) => {
  return (
    <Button
      variant='contained'
      color='primary'
      disableElevation
      sx={{
        marginLeft: '12px'
      }}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
}

export default PurpleButton;