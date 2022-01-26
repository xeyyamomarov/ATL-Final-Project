import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DialogContent, IconButton, DialogTitle, Button, Dialog, DialogActions, TextField, Box, Grid, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";

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

      <DialogActions
        sx={{
          padding: '12px 16px',
        }}
      >
        <Button
          variant='contained'
          color='secondary'
          disableElevation
          sx={{
            fontWeight: 500,
            fontSize: 14,
            textTransform: 'none',
          }}
          onClick={() => close(prev => !prev)}
        >
          Bağla
        </Button>
        <Button
          type="submit"
          variant='contained'
          color="success"
          disableElevation
          sx={{
            marginLeft: '12px',
            textTransform: 'none',
          }}
          onClick={() => console.log(password, passwordRepeat)}
        >
          Yenilə
        </Button>
      </DialogActions>

    </Dialog>
  );
}

export default PasswordUpdateDialog;