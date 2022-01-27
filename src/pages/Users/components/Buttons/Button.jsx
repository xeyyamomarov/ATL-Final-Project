import { Button as AButton } from '@mui/material';
import { Add } from '@mui/icons-material';

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
}

const Button = ({ onClick, text="Əlavə et", startIcon=(<Add />), endIcon, color=ButtonColors.purple, variant='contained' }) => {
  return (
    <AButton
      variant={variant}
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
    </AButton>
  );
}



export default Button;