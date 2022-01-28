import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DialogContent, IconButton, DialogTitle, Dialog, DialogActions, TextField, Box, Grid, InputAdornment } from "@mui/material";
import { useState } from "react";
import { SubmitButton, CloseButton } from '../Buttons'

const PasswordUpdateDialog = (props) => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenPasswordRepeat, setHiddenPasswordRepeat] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { open, close } = props;

  const handleShowPassword = () => {
    setHiddenPassword(prev => !prev);
  };
  const handleShowPasswordRepeat = () => {
    setHiddenPasswordRepeat(prev => !prev);
  };

  return (
    <Dialog open={open}>

      <DialogTitle
        sx={{
          padding: '12px 16px',
        }}
      >
        Şifrənin yenilənməsi
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          padding: '16px !important',
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField fullWidth
                type={hiddenPassword ? 'password' : 'text'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Yeni şifrə*"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {hiddenPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth
                type={hiddenPasswordRepeat ? 'password' : 'text'}
                value={passwordRepeat}
                onChange={e => setPasswordRepeat(e.target.value)}
                label="Şifrənin təkrarı*"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPasswordRepeat}
                        edge="end"
                      >
                        {hiddenPasswordRepeat ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{padding: '12px 16px'}}>
        <CloseButton onClick={() => close(prev => !prev)} />
        <SubmitButton text="Yenilə" onClick={() => console.log(password, passwordRepeat)} />
      </DialogActions>

    </Dialog>
  );
}

export default PasswordUpdateDialog;