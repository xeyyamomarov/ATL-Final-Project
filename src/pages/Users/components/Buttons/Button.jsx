import { Button as cButton } from '@mui/material';

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
}

const Button = ({onClick, text = 'Əlavə et', startIcon, endIcon, color = ButtonColors.purple}) => {
  return (
    <cButton
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
    </cButton>
  );
}



export default Button;