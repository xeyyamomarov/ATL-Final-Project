import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
}

const Button = ({onClick, text = 'Əlavə et', startIcon, endIcon, color = ButtonColors.purple}) => {
  return (
    <Button
      variant='contained'
      color={color}
      disableElevation
      sx={{
        marginLeft: '12px'
      }}
      startIcon={startIcon}
      endIcon = {endIcon}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
}



export default Button;