import { DialogContent, DialogTitle, Dialog, DialogActions, TextField, MenuItem, Box, Grid } from "@mui/material";
import { useState } from "react";
import GreenButton from "../Buttons/GreenButton";
import GreyButton from "../Buttons/GreyButton";

const AddNewUserDialog = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { open, close } = props;

  const handleCreate = () => console.log(name, username, position, password, passwordRepeat)
  const handleClose = () => close(prev => !prev);

  return (
    <Dialog open={open}>

      <DialogTitle sx={{ padding: '12px 16px' }}>
        Yeni İstifadəçi
      </DialogTitle>

      <DialogContent dividers sx={{ padding: '16px !important' }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth
                label="Əməkdaş*"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth
                value={username}
                onChange={e => setUsername(e.target.value)}
                label="İstifadəçi adı*"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField select label="Rollar" fullWidth
                value={position}
                onChange={e => setPosition(e.target.value)}
              >
                <MenuItem value='User'>User</MenuItem>
                <MenuItem value='Reporter'>Reporter</MenuItem>
                <MenuItem value='Admin'>Admin</MenuItem>
                <MenuItem value='Manager'>Manager</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Şifrə*"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth
                value={passwordRepeat}
                onChange={e => setPasswordRepeat(e.target.value)}
                label="Şifrənin təkrarı*"
              />
            </Grid>

          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: '12px 16px' }}>
        <GreyButton text="Bağla" onClick={handleClose} />
        <GreenButton text="Yarat" onClick={handleCreate} />
      </DialogActions>

    </Dialog>
  );
}

export default AddNewUserDialog;