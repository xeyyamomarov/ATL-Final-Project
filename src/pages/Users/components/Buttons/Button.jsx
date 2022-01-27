import { Button as CButton } from '@mui/material';

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
}

const Button = ({onClick, text = 'Əlavə et', startIcon, endIcon, color = ButtonColors.purple}) => {
  return (
    <CButton
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
    </CButton>
  );
}



export default Button;